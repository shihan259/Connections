import { YELLOW, GREEN, BLUE, PURPLE } from "@/constants";
import { WordItem } from "@/interfaces/interfaces";

// Function to shuffle the array randomly
export const shuffle = (array: WordItem[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Find index of selected words in the word list in ascending order
export const findWordIndexes = (
  wordList: WordItem[],
  selectedWords: string[]
) => {
  return selectedWords
    .map((word) => wordList.findIndex((item) => item.word === word))
    .sort((a, b) => a - b);
};

export const swapButtons = (
  currentWordList: WordItem[],
  selectedWords: string[]
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
