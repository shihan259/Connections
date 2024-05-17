"use client";

import { useEffect, useState } from "react";

interface WordButtonProps {
  category: number;
  word: string;
  selectedWords: string[];
  setSelectedWords: (words: string[]) => void;
}

const WordButton: React.FC<WordButtonProps> = ({
  category,
  word,
  selectedWords,
  setSelectedWords,
}) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Check if the word is selected
    setIsActive(selectedWords.includes(word));
  }, [selectedWords, word]);

  const handleClick = () => {

    // Check if max number of words are selected already
    if (selectedWords.length >= 4 && !selectedWords.includes(word)) {
      return;
    }

    // Toggle selection state of the word
    const updatedSelectedWords = selectedWords.includes(word)
      ? selectedWords.filter((selectedWord) => selectedWord !== word)
      : [...selectedWords, word];

    setSelectedWords(updatedSelectedWords);
  };

  return (
    <button
      className={`bg-${
        isActive ? "wordButtonActive text-white" : "wordButton text-black"
      } font-bold py-2 px-4 rounded h-[75px]`}
      onClick={handleClick}
    >
      {word.toUpperCase()}
    </button>
  );
};

export default WordButton;
