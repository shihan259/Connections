"use client";

import WordButton from "../components/WordButton";
import { useEffect, useState } from "react";
import { AnswerItem, WordItem } from "@/interfaces/interfaces";
import { shuffle, swapButtons } from "@/helpers/functions";
import { answers, wordlist } from "@/data";
import SolvedCategory from "@/components/SolvedCategory";

export default function Home() {
  // Store selected words
  const [selectedWords, setSelectedWords] = useState([] as string[]);
  // Store updated word list based
  const [currentWordList, setCurrentWordList] = useState(wordlist);
  // Store answers that are solved
  const [solvedAnswers, setSolvedAnswers] = useState([] as AnswerItem[]);
  // Store mistakes made
  const [mistakes, setMistakes] = useState(0);
  // Store individual guesses, it is a nested string array
  const guesses: string[][] = [];

  // Animations
  // State to control shaking animation
  const [shake, setShake] = useState(false);
  // State to control popout animation
  const [popOut, setPopOut] = useState(false);

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
    const sortedGuess = selectedWords.sort().join(",");
    const guessed = guesses.some((existingGuess) => {
      return existingGuess.sort().join(",") === sortedGuess;
    });
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
      // TODO: Remove items that are already guessed
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
      setTimeout(() => setShake(false), 500); // Remove the shake class after the animation duration

      // Increment mistakes
      setMistakes(mistakes + 1);
      // Add the wrong guess to the guesses list
      guesses.push(selectedWords);
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
        word={wordItem.word}
        setSelectedWords={setSelectedWords}
        selectedWords={selectedWords}
        shake={shake}
        popOut={popOut}
      ></WordButton>
    ));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
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
          className="bg-white text-black font-bold py-3 px-5 border border-black rounded-full"
          onClick={handleShuffle}
        >
          Shuffle
        </button>
        <button
          className="bg-white text-black font-bold py-3 px-5 border border-black rounded-full"
          onClick={handleDeselect}
        >
          Deselect all
        </button>
        <button
          className={`${
            selectedWords.length < 4
              ? "bg-white text-black"
              : "bg-black text-white"
          } font-bold py-3 px-5 border border-black rounded-full`}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <div className="py-2">Brought to you by BukitBatokTimes</div>
    </div>
  );
}
