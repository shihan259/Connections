"use client";

import WordButton from "../components/WordButton";
import { useEffect, useState } from "react";
import { AnswerItem, WordItem } from "@/interfaces/interfaces";
import { shuffle, swapButtons } from "@/utils/functions";
import SolvedCategory from "@/components/SolvedCategory";
import Modal from "@/components/Modal/Modal";
import WinningScreen from "@/components/Modal/WinningScreen";
import LosingScreen from "@/components/Modal/LosingScreen";
import { CATEGORIES_ARR, MISTAKES_THRESHOLD } from "@/constants";
import { useToast } from "@/contexts/ToastContext";
import { Rochester } from "next/font/google";
import { createSupabaseClient } from "@/utils/database";
import { format } from "date-fns";

const rochester = Rochester({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  // Game functions
  const [mistakes, setMistakes] = useState(0);
  const [selectedWords, setSelectedWords] = useState([] as WordItem[]);
  // Store updated word list displaying user's word selections
  const [currentWordList, setCurrentWordList] = useState([] as WordItem[]);
  // Store answers that are solved
  const [solvedAnswers, setSolvedAnswers] = useState([] as AnswerItem[]);
  // Store individual guesses made by the user
  const [guesses, setGuesses] = useState([] as WordItem[][]);
  const [date, setDate] = useState("");
  const [answers, setAnswers] = useState([] as AnswerItem[]);

  // Animations
  // State to control shaking animation
  const [shake, setShake] = useState(false);
  // State to control popout animation
  const [popOut, setPopOut] = useState(false);

  // Display states
  const [showLoseModal, setShowLoseModal] = useState(false);
  const [showWinModal, setShowWinModal] = useState(false);
  const { showToast } = useToast();

  const supabase = createSupabaseClient();

  // Get puzzle from database
  useEffect(() => {
    const fetchPuzzle = async () => {
      try {
        const { data, error } = await supabase
          .from("Puzzles")
          .select("*")
          .order("date_created", { ascending: false })
          .limit(1)
          .single();

        if (error) {
          throw error;
        }

        // Set the word list and answers
        setCurrentWordList(data.word_list);
        setAnswers(data.answer_list);
        const date = new Date(data.date_created);
        setDate(format(date, "do MMMM yyyy"));
      } catch (error) {
        showToast("Error fetching puzzle", 3000);
      }
    };

    fetchPuzzle();
  }, []);

  // Shuffle the wordlist
  const handleShuffle = () => {
    const shuffledList = shuffle([...currentWordList]);
    setCurrentWordList(shuffledList);
  };

  // Deselect all selected words
  const handleDeselect = () => {
    setSelectedWords([]);
  };

  const correctGuessEvent = (answer: AnswerItem, givenUp: boolean = false) => {
    // Move buttons to the next row
    const swappedList = swapButtons(currentWordList, selectedWords);
    // Set the new word list
    setCurrentWordList(swappedList);
    // Popout the selected buttons
    setPopOut(true);

    setTimeout(() => {
      setPopOut(false);
      setSelectedWords([]);
      // Update currentWordList after the pop-out animation
      setCurrentWordList((prevList) => {
        const updatedList = prevList.slice(4);
        return updatedList;
      });
      // Add to solved categories
      setSolvedAnswers((prevAnswers) => {
        const newAnswers = [...prevAnswers, answer];

        // Do not trigger win modal if given up
        if (newAnswers.length === 4 && !givenUp) {
          setTimeout(() => {
            setShowWinModal(true);
          }, 800);
        }
        return newAnswers;
      });
    }, 400);
  };

  const handleSubmit = () => {
    // Sort selected words for comparison
    const sortedGuess = selectedWords
      .map((selectedWord) => selectedWord.word)
      .sort()
      .join(",");

    // Handle duplicate guesses
    const guessed = guesses.some((existingGuess) => {
      return (
        existingGuess
          .map((guess) => guess.word)
          .sort()
          .join(",") === sortedGuess
      );
    });

    if (guessed) {
      showToast("Already guessed!", 3000);
      return;
    }

    // Add the guess to the list of guesses
    setGuesses((prevGuesses) => [...prevGuesses, selectedWords]);

    // Return a category if the guess is correct
    // undefined = wrong guess, 1-4 = correct guess
    const foundCategory = answers.find(
      (answerItem) => answerItem.answer.sort().join(",") === sortedGuess
    );

    // Handle correct category guess
    if (foundCategory) {
      correctGuessEvent(foundCategory);
    } else {
      // Handle wrong guess
      if (detectOneAway(selectedWords)) {
        showToast("One away...", 3000);
      }

      // Shake selected WordButtons
      setShake(true);
      setTimeout(() => {
        setShake(false);
        // Increment mistakes after timeout to allow the shake animation to finish
        setMistakes((prevMistakes) => {
          const newMistake = prevMistakes + 1;
          // Show modal when it reaches threshold only once
          // Call inside setMistakes to ensure that the state is updated first
          if (newMistake == MISTAKES_THRESHOLD) {
            setShowLoseModal(true);
          }
          return newMistake;
        });
      }, 500); // Remove the shake class after the animation duration
    }
  };

  // Detect if guess is one away from a correct answer
  const detectOneAway = (selectedWords: WordItem[]) => {
    const frequencyCounter: { [key: number]: number } = {};

    // Get the selected words
    const categories = selectedWords.map((word) => word.category);

    // Count number of ocurrences of each category
    for (const num of categories) {
      frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
    }

    // Check if there is a category with 3 ocurrences
    return Object.values(frequencyCounter).some((count) => count === 3);
  };

  const renderSolvedCategories = () => {
    return solvedAnswers.map((answer, index) => (
      <SolvedCategory
        key={index}
        category={answer.category}
        answerItem={answer}
      />
    ));
  };

  const renderWordButtons = () => {
    return currentWordList.map((wordItem, index) => (
      <WordButton
        key={index}
        wordItem={wordItem}
        setSelectedWords={setSelectedWords}
        selectedWords={selectedWords}
        shake={shake}
        popOut={popOut}
      ></WordButton>
    ));
  };

  const handleGiveUp = async () => {
    // Show all the answers
    const currentSolves = solvedAnswers.map((answer) => answer.category);

    // Get unsolved categories
    const unsolvedCategories = CATEGORIES_ARR.filter(
      (category) => !currentSolves.includes(category)
    );

    for (const category of unsolvedCategories) {
      // Find the words for the category
      const categoryWordList = currentWordList.filter(
        (wordItem) => wordItem.category === category
      );

      const foundCategory = answers.find(
        (answerItem) =>
          answerItem.answer.sort().join(",") ===
          categoryWordList
            .map((wordItem) => wordItem.word)
            .sort()
            .join(",")
      );

      // Trigger onclick effect for submitting
      if (foundCategory) {
        setSelectedWords(categoryWordList);
        correctGuessEvent(foundCategory, true);
        // Wait for 1 second before processing the next category (using async/await)
        // await timeout(1000);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {showLoseModal && (
        <Modal>
          <LosingScreen
            noOfSolves={solvedAnswers.length}
            mistakes={mistakes}
            setShowLoseModal={setShowLoseModal}
            guesses={guesses}
          />
        </Modal>
      )}
      {showWinModal && (
        <Modal>
          <WinningScreen
            mistakes={mistakes}
            guesses={guesses}
            setShowWinModal={setShowWinModal}
          />
        </Modal>
      )}
      <h1 className="text-3xl font-bold mb-4">Konnections</h1>
      <div className="text-base mb-3 font-bold">{date}</div>
      <div className="w-auto px-2">
        {renderSolvedCategories()}
        <div className="grid grid-cols-4 gap-2 w-[100%]">
          {renderWordButtons()}
        </div>
      </div>
      <div className="py-3">Mistakes made: {mistakes}</div>
      <div className="w-full overflow-hidden">
        <div className="flex items-center gap-2 justify-center flex-wrap overflow-x-auto">
          {mistakes >= 4 && (
            <button
              className="bg-red-500 text-white font-bold py-3 px-5 rounded-full hover:bg-red-600"
              onClick={handleGiveUp}
            >
              Give up
            </button>
          )}
          <button
            className="bg-white text-black font-bold py-3 px-5 border border-black rounded-full hover:bg-gray-100"
            onClick={handleShuffle}
          >
            Shuffle
          </button>
          <button
            className="bg-white text-black font-bold py-3 px-5 border border-black rounded-full hover:bg-gray-100"
            onClick={handleDeselect}
          >
            Deselect all
          </button>
          <button
            className={`${
              selectedWords.length < 4
                ? "bg-white text-gray-400 border border-gray-400"
                : "bg-black text-white"
            } font-bold py-3 px-5 rounded-full`}
            disabled={selectedWords.length < 4}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="py-3">
        Brought to you by
        <span className={`${rochester.className} text-xl`}>
          {" "}
          KayaButterNews
        </span>
      </div>
    </div>
  );
}
