"use client";

import WordButton from "./components/WordButton";
import { useEffect, useState } from "react";

interface WordItem {
  word: string;
  category: number;
}

const wordlist: WordItem[] = [
  {
    word: "Connection",
    category: 1,
  },
  {
    word: "Network",
    category: 1,
  },
  {
    word: "Link",
    category: 1,
  },
  {
    word: "Bond",
    category: 1,
  },
  {
    word: "Tree",
    category: 2,
  },
  {
    word: "Flower",
    category: 2,
  },
  {
    word: "Grass",
    category: 2,
  },
  {
    word: "Bush",
    category: 2,
  },
  {
    word: "Cat",
    category: 3,
  },
  {
    word: "Dog",
    category: 3,
  },
  {
    word: "Bird",
    category: 3,
  },
  {
    word: "Fish",
    category: 3,
  },
  {
    word: "Car",
    category: 4,
  },
  {
    word: "Bicycle",
    category: 4,
  },
  {
    word: "Bus",
    category: 4,
  },
  {
    word: "Train",
    category: 4,
  },
];

const shuffle = (array: WordItem[]) => { 
  return array.sort(() => Math.random() - 0.5); 
}; 

export default function Home() {
  const [selectedWords, setSelectedWords] = useState([] as string[]);
  const [currentWordList, setCurrentWordList] = useState(shuffle(wordlist));

  // Shuffle the wordlist
  const handleShuffle = () => {
    console.log(currentWordList);
    const shuffledList = shuffle([...currentWordList]);
    setCurrentWordList(shuffledList);
  };


  // Deselect all selected words
  const handleDeselect = () => {
    setSelectedWords([]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-3">Connections</h1>
      <div className="grid grid-cols-4 gap-2">
        {currentWordList.map((wordItem, index) => (
          <WordButton
            key={index}
            word={wordItem.word}
            category={wordItem.category}
            setSelectedWords={setSelectedWords}
            selectedWords={selectedWords}
          ></WordButton>
        ))}
      </div>
      <div>Mistakes made: 0</div>
      <div className="flex space-x-5">
        <button className="bg-white text-black font-bold py-3 px-5 border border-black rounded-full"
        onClick={handleShuffle}>
          Shuffle
        </button>
        <button 
        className="bg-white text-black font-bold py-3 px-5 border border-black rounded-full"
        onClick={handleDeselect}>
          Deselect all
        </button>
        <button
          className={`${
            selectedWords.length < 4
              ? "bg-white text-black"
              : "bg-black text-white"
          } font-bold py-3 px-5 border border-black rounded-full`}
        >
          Submit
        </button>
      </div>
      Brought to you by BukitBatokTimes
    </div>
  );
}
