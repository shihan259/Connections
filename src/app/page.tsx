"use client";

import WordButton from "./components/WordButton";
import { useEffect, useState } from "react";
import { BLUE, GREEN, PURPLE, YELLOW } from "./constants";

interface WordItem {
  word: string;
  category: number;
}

interface AnswerItem {
  answer: string[];
  category: number;
  description: string;
}

const wordlist: WordItem[] = [
  {
    word: "Connection",
    category: YELLOW,
  },
  {
    word: "Network",
    category: YELLOW,
  },
  {
    word: "Link",
    category: YELLOW,
  },
  {
    word: "Bond",
    category: YELLOW,
  },
  {
    word: "Tree",
    category: GREEN,
  },
  {
    word: "Flower",
    category: GREEN,
  },
  {
    word: "Grass",
    category: GREEN,
  },
  {
    word: "Bush",
    category: GREEN,
  },
  {
    word: "Cat",
    category: BLUE,
  },
  {
    word: "Dog",
    category: BLUE,
  },
  {
    word: "Bird",
    category: BLUE,
  },
  {
    word: "Fish",
    category: BLUE,
  },
  {
    word: "Car",
    category: PURPLE,
  },
  {
    word: "Bicycle",
    category: PURPLE,
  },
  {
    word: "Bus",
    category: PURPLE,
  },
  {
    word: "Train",
    category: PURPLE,
  },
];

const answers: AnswerItem[] = [
  {
    answer: ["Connection", "Network", "Link", "Bond"],
    category: YELLOW,
    description: "Words related to connection",
  },
  {
    answer: ["Tree", "Flower", "Grass", "Bush"],
    category: GREEN,
    description: "Words related to plants",
  },
  {
    answer: ["Cat", "Dog", "Bird", "Fish"],
    category: BLUE,
    description: "Words related to animals",
  },
  {
    answer: ["Car", "Bicycle", "Bus", "Train"],
    category: PURPLE,
    description: "Words related to transport",
  },
];

// Function to shuffle the array randomly
const shuffle = (array: WordItem[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Find index of selected words in the word list in ascending order
const findWordIndexes = (wordList: WordItem[], selectedWords: string[]) => {
  return selectedWords.map((word) =>
    wordList.findIndex((item) => item.word === word)
  ).sort((a, b) => a - b);;
};

const swapButtons = (
  currentWordList: WordItem[],
  selectedWords: string[],
  currentIndex: number
) => {
  const swappedList = [...currentWordList];

  const selectedIndexes = findWordIndexes(currentWordList, selectedWords);
  // Swap all button positions
  selectedIndexes.forEach((selectedIndex) => {
    // Only do swapping for the buttons that are not in the correct position
    if (selectedIndex > currentIndex) {
      [swappedList[selectedIndex], swappedList[currentIndex]] = [
        swappedList[currentIndex],
        swappedList[selectedIndex],
      ];
    }
    currentIndex += 1;
  });

  return swappedList;
};

export default function Home() {
  // Store selected words
  const [selectedWords, setSelectedWords] = useState([] as string[]);
  // Store updated word list based
  const [currentWordList, setCurrentWordList] = useState([] as WordItem[]);
  // Store current index of word list to display the next set of words
  const [currentIndex, setCurrentIndex] = useState(0);
  // Store individual guesses, it is a nested string array
  const guesses: string[][] = [];
  // Store mistakes made
  let mistakes = 0;

  // Animations
  // State to control shaking animation
  const [shake, setShake] = useState(false);

  useEffect(() => {
    // Shuffle the wordlist
    const shuffledList = shuffle([...wordlist]);
    setCurrentWordList(shuffledList);
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

    // Check if the guess is correct
    const isCorrect = answers.some(
      (answerItem) => answerItem.answer.sort().join(",") === sortedGuess
    );

    // Handle correct category guess
    if (isCorrect) {
      // Move buttons to the next row
      const swappedList = swapButtons(
        currentWordList,
        selectedWords,
        currentIndex
      );
      setCurrentIndex(currentIndex + 4);
      setCurrentWordList(swappedList);
      console.log("asd");
      console.log(currentIndex);
      setSelectedWords([]);
    } else {
      // Handle wrong guess
      // Shake selected WordButtons
      setShake(true);
      setTimeout(() => setShake(false), 500); // Remove the shake class after the animation duration

      // Increment mistakes
      mistakes++;
      // Add the wrong guess to the guesses list
      guesses.push(selectedWords);
    }
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
            shake={shake}
          ></WordButton>
        ))}
      </div>
      <div>Mistakes made: 0</div>
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
      Brought to you by BukitBatokTimes
    </div>
  );
}
