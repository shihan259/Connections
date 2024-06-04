"use client";

import WordButton from "../components/WordButton";
import { useEffect, useState } from "react";
import { AnswerItem, WordItem } from "@/interfaces/interfaces";
import { shuffle, swapButtons } from "@/helpers/functions";
import { answers, wordlist } from "@/data";
import SolvedCategory from "@/components/SolvedCategory";
import Modal from "@/components/Modal/Modal";
import WinningScreen from "@/components/Modal/WinningScreen";
import LosingScreen from "@/components/Modal/LosingScreen";
import { MISTAKES_THRESHOLD } from "@/constants";

export default function Home() {
  // Game functions
  const [mistakes, setMistakes] = useState(0);
  const [selectedWords, setSelectedWords] = useState([] as WordItem[]);
  // Store updated word list displaying user's word selections
  const [currentWordList, setCurrentWordList] = useState(wordlist);
  // Store answers that are solved
  const [solvedAnswers, setSolvedAnswers] = useState([] as AnswerItem[]);
  // Store individual guesses made by the user
  const [guesses, setGuesses] = useState([] as WordItem[][]);

  // Animations
  // State to control shaking animation
  const [shake, setShake] = useState(false);
  // State to control popout animation
  const [popOut, setPopOut] = useState(false);

  // Display states
  const [showLoseModal, setShowLoseModal] = useState(false);
  const [showWinModal, setShowWinModal] = useState(false);

  useEffect(() => {}, [solvedAnswers]);

  // Shuffle the wordlist
  const handleShuffle = () => {
    const shuffledList = shuffle([...currentWordList]);
    setCurrentWordList(shuffledList);
  };

  // Deselect all selected words
  const handleDeselect = () => {
    setSelectedWords([]);
  };

  const handleSubmit = () => {
    // Handle duplicate guesses
    const sortedGuess = selectedWords
      .map((selectedWord) => selectedWord.word)
      .sort()
      .join(",");

    const guessed = guesses.some((existingGuess) => {
      return (
        existingGuess
          .map((guess) => guess.word)
          .sort()
          .join(",") === sortedGuess
      );
    });
    console.log(guesses);
    // Add the guess to the list of guesses
    setGuesses((prevGuesses) => [...prevGuesses, selectedWords]);
    if (guessed) {
      // TODO: Show popup message for duplicate guesses
      return;
    }

    // Return a category if the guess is correct
    // undefined = wrong guess, 1-4 = correct guess
    const foundCategory = answers.find(
      (answerItem) => answerItem.answer.sort().join(",") === sortedGuess
    );

    // Handle correct category guess
    if (foundCategory) {
      // Move buttons to the next row
      const swappedList = swapButtons(currentWordList, selectedWords);
      // Set the new word list
      setCurrentWordList(swappedList);
      // Popout the selected buttons
      setPopOut(true);
      setTimeout(() => {
        setPopOut(false);
        setSelectedWords([]);
        // Remove the guessed words from the current word list
        setCurrentWordList((prevList) => prevList.slice(4));
        // Add to solved categories
        setSolvedAnswers((prevAnswers) => [...prevAnswers, foundCategory]);
      }, 500);
    } else {
      // Handle wrong guess
      // Shake selected WordButtons
      setShake(true);
      setTimeout(() => {
        setShake(false);
        // Increment mistakes after timeout to allow the shake animation to finish
        setMistakes((prevMistakes) => {
          const newMistake = mistakes + 1;
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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {showLoseModal && (
        <Modal>
          <LosingScreen
            mistakes={mistakes}
            setShowLoseModal={setShowLoseModal}
            guesses={guesses}
          />
        </Modal>
      )}
      {showWinModal && (
        <Modal>
          <WinningScreen mistakes={mistakes} guesses={guesses} setShowWinModal={setShowWinModal}/>
        </Modal>
      )}
      <h1 className="text-3xl font-bold mb-3">Connections</h1>
      <div className="w-auto">
        {renderSolvedCategories()}
        <div className="grid grid-cols-4 gap-2 w-auto">
          {renderWordButtons()}
        </div>
      </div>
      <div className="py-2">Mistakes made: {mistakes}</div>
      <div className="flex space-x-5">
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
      <div className="py-2">Brought to you by BukitBatokTimes</div>
    </div>
  );
}
