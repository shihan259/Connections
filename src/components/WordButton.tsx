"use client";

import { useEffect, useState } from "react";

interface WordButtonProps {
  word: string;
  selectedWords: string[];
  setSelectedWords: (words: string[]) => void;
  shake: boolean;
  popOut: boolean;
}

const WordButton: React.FC<WordButtonProps> = ({
  word,
  selectedWords,
  setSelectedWords,
  shake,
  popOut,
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
      className={`
    ${isActive ? "bg-wordButtonActive text-white" : "bg-wordButton text-black"}
    ${shake && isActive ? "animate-shake" : ""}
    ${popOut && isActive ? "animate-popOut" : ""}
    text-xl font-bold px-2 rounded w-auto h-[75px] overflow-hidden`}
      onClick={handleClick}
    >
      {word.toUpperCase()}
    </button>
  );
};

export default WordButton;
