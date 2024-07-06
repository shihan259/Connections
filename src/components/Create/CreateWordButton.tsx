import { useEffect, useState, useRef, useCallback } from "react";
import { EditState, WordItem } from "@/interfaces/interfaces";
import { getColorClass } from "@/utils/functions";

interface CreateWordButtonProps {
  index: number; // Used to identify the button
  editState: EditState;
  wordItem: WordItem;
  setWordItem: (wordItem: WordItem, index: number) => void;
}

const CreateWordButton: React.FC<CreateWordButtonProps> = ({
  index,
  editState,
  wordItem,
  setWordItem,
}) => {
  const textElementRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [textSizeClass, setTextSizeClass] = useState("text-lg");

  const resizeButtonText = useCallback(() => {
    const textElement = textElementRef.current;
    if (!textElement || !textElement.parentElement) return;

    const textElementWidth = Math.floor(textElement.scrollWidth);
    const parentElementWidth = Math.floor(
      textElement.parentElement.clientWidth
    );
    const difference = parentElementWidth - textElementWidth;
    if (difference > 16) {
      setTextSizeClass("text-lg"); // Plenty of space
    } else if (difference < -8) {
      setTextSizeClass("text-sm"); // Overflowing a lot
    }
  }, []);

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

  // Used to set the singular word item in the word list
  const handleWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWordItem({ ...wordItem, word: e.target.value.toUpperCase() }, index);
  };

  const handleColorChange = () => {
    // Set the color of the word item
    console.log((wordItem.category + 1) % 4);
    setWordItem({ ...wordItem, category: (wordItem.category + 1) % 4 }, index);
  };

  // Decides on which function to call based on the current toggle state of (color, word)
  const handleButtonClick = () => {
    if (editState === "color") {
      handleColorChange();
    } else if (editState === "word") {
      // Focus on the button's input field
      focusWordInput();
    }
  };

  const focusWordInput = () => {
    const textElement = textElementRef.current;
    if (textElement) {
      textElement.focus();
    }
  };

  return (
    <button
      ref={buttonRef}
      className={`text-black
        ${wordItem.category !== -1 ? getColorClass(wordItem.category) : "bg-wordButton"}
        ${textSizeClass}
        font-bold px-2 rounded w-auto min-h-[75px] max-h-[100px]
        justify-center items-center`}
      onClick={handleButtonClick}
    >
      <input
        className={`w-full ${textSizeClass} mb-0 text-center bg-transparent pointer-events-none
       text-black placeholder-gray-500 font-bold focus:outline-none cursor-pointer`}
        ref={textElementRef}
        disabled={editState === "color"}
        value={wordItem ? wordItem.word : ""}
        onChange={(e) => {
          handleWordChange(e);
          resizeButtonText();
        }}
      ></input>
    </button>
  );
};

export default CreateWordButton;
