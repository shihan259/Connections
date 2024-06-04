import { YELLOW, GREEN, BLUE, PURPLE } from "@/constants";
import { WordItem } from "@/interfaces/interfaces";

// Function to shuffle the array randomly
export const shuffle = (array: WordItem[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Find index of selected words in the word list in ascending order
export const findWordIndexes = (
  wordList: WordItem[],
  selectedWords: WordItem[]
) => {
  return selectedWords
    .map((selectedWord) => wordList.findIndex((item) => item.word === selectedWord.word))
    .sort((a, b) => a - b);
};

export const swapButtons = (
  currentWordList: WordItem[],
  selectedWords: WordItem[]
) => {
  const swappedList = [...currentWordList];

  const selectedIndexes = findWordIndexes(currentWordList, selectedWords);
  // Swap all button positions
  selectedIndexes.forEach((selectedIndex, currentIndex) => {
    // Only do swapping for the buttons that are not in the correct position
    if (selectedIndex > currentIndex) {
      [swappedList[selectedIndex], swappedList[currentIndex]] = [
        swappedList[currentIndex],
        swappedList[selectedIndex],
      ];
    }
  });

  return swappedList;
};

// Covert category index to color class
export const getColorClass = (index: number) => {
  switch (index) {
    case YELLOW:
      return "bg-yellow";
    case GREEN:
      return "bg-green";
    case BLUE:
      return "bg-blue";
    case PURPLE:
      return "bg-purple";
  }
};
