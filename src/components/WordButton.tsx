import { useEffect, useState, useRef, useCallback } from "react";
import { WordItem } from "@/interfaces/interfaces";
import { text } from "node:stream/consumers";

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
  const [textSizeClass, setTextSizeClass] = useState("text-lg");
  const textElementRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Check if the word is selected
    setIsActive(
      selectedWords.some((selectedWord) => selectedWord.word === wordItem.word)
    );
  }, [selectedWords, wordItem]);

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

  const resizeButtonText = useCallback(() => {
    const textElement = textElementRef.current;
    if (!textElement || !textElement.parentElement) return;
  
    const textElementWidth = Math.floor(textElement.scrollWidth);
    const parentElementWidth = Math.floor(textElement.parentElement.clientWidth);
    const difference = parentElementWidth - textElementWidth;
  
    if (difference > 30) {
      setTextSizeClass("text-lg"); // Plenty of space
    } 
    else if (difference < -5) {
      setTextSizeClass("text-scale"); // Overflowing a lot
    }

  // WordItem included in dependency as shuffling does not trigger a re-render of font size
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordItem]);

  useEffect(() => {
    const buttonElement = buttonRef.current;
    if (!buttonElement) return;

    const resizeObserver = new ResizeObserver(() => {
      resizeButtonText();
    });

    resizeObserver.observe(buttonElement);

    return () => {
      resizeObserver.unobserve(buttonElement);
    };
  }, [resizeButtonText]);

  return (
    <button
      ref={buttonRef}
      className={`
        ${
          isActive
            ? "bg-wordButtonActive text-white"
            : "bg-wordButton text-black"
        }
        ${shake && isActive ? "animate-shake" : ""}
        ${popOut && isActive ? "animate-popOut" : ""}
        ${textSizeClass}
        font-bold px-2 rounded w-auto min-h-[75px] sm:min-w-[150px] justify-center items-center overflow-hidden flex`}
      onClick={handleClick}
    >
      <span ref={textElementRef}>{wordItem.word.toUpperCase()}</span>
    </button>
  );
};

export default WordButton;
