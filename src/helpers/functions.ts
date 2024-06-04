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
    .map((selectedWord) =>
      wordList.findIndex((item) => item.word === selectedWord.word)
    )
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

// Used to copy the guess results to the clipboard
export const handleShareResults = (
  guesses: WordItem[][],
  showToast: (message: string, duration?: number) => void
) => {
  let clipboardText = "Konnections\n\n";
  guesses.forEach((guess) => {
    guess.forEach((wordItem) => {
      switch (wordItem.category) {
        case YELLOW:
          clipboardText = clipboardText.concat("🟨");
          break;
        case GREEN:
          clipboardText = clipboardText.concat("🟩");
          break;
        case BLUE:
          clipboardText = clipboardText.concat("🟦");
          break;
        case PURPLE:
          clipboardText = clipboardText.concat("🟪");
          break;
      }
    });
    clipboardText = clipboardText.concat("\n");
  });
  navigator.clipboard.writeText(clipboardText.trim());
  showToast("Results copied to clipboard!", 3000);
};
