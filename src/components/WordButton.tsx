import { WordItem } from "@/interfaces/interfaces";
import { useEffect, useState } from "react";

interface WordButtonProps {
  wordItem: WordItem;
  selectedWords: WordItem[];
  setSelectedWords: (words: WordItem[]) => void;
  shake: boolean;
  popOut: boolean;
}

const WordButton: React.FC<WordButtonProps> = ({
  wordItem,
  selectedWords,
  setSelectedWords,
  shake,
  popOut,
}) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Check if the word is selected
    setIsActive(
      selectedWords.some((selectedWord) => selectedWord.word === wordItem.word)
    );
  }, [selectedWords, wordItem]);

  const calculateFontSize = (text: string) => {
    console.log(text.length);
    if (text.length < 5) {
      return "text-base"; // Default font size
    } else if (text.length < 8) {
      return "text-sm";
    } else {
      return "text-xs";
    }
  };

  const handleClick = () => {
    // Check if max number of words are selected already
    if (
      selectedWords.length >= 4 &&
      !selectedWords.some((selectedWord) => selectedWord.word === wordItem.word)
    ) {
      return;
    }

    // Toggle selection state of the word
    const updatedSelectedWords = selectedWords.some(
      (selectedWord) => selectedWord.word === wordItem.word
    )
      ? selectedWords.filter(
          (selectedWord) => selectedWord.word !== wordItem.word
        )
      : [...selectedWords, wordItem];

    setSelectedWords(updatedSelectedWords);
  };

  return (
    <button
      className={`
    ${isActive ? "bg-wordButtonActive text-white" : "bg-wordButton text-black"}
    ${shake && isActive ? "animate-shake" : ""}
    ${popOut && isActive ? "animate-popOut" : ""}
    ${calculateFontSize(wordItem.word)}
    font-bold px-2 rounded w-auto h-[75px] overflow-hidden`}
      onClick={handleClick}
    >
      {wordItem.word.toUpperCase()}
    </button>
  );
};

export default WordButton;
