import { WordItem } from "@/interfaces/interfaces";
import GuessResult from "./GuessResult";
import { handleShareResults } from "@/helpers/functions";
import { useToast } from "@/contexts/ToastContext";
import { winningScreenTitles } from "@/data";
import { useEffect, useState } from "react";

interface WinningScreenProps {
  mistakes: number;
  guesses: WordItem[][];
  setShowWinModal: (showModal: boolean) => void;
}

const getRandomTitle = (mistakes: number) => {
  const titles =
    mistakes < 4 ? winningScreenTitles[mistakes] : winningScreenTitles[4];
  return titles[Math.floor(Math.random() * titles.length)];
};

const WinningScreen: React.FC<WinningScreenProps> = ({
  mistakes,
  guesses,
  setShowWinModal,
}) => {
  const { showToast } = useToast();
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(getRandomTitle(mistakes));
  }, [mistakes]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-3xl font-bold text-center">{title}</h2>
      <GuessResult guesses={guesses} />

      <div className="flex flex-row  flex-grow items-center justify-end w-full">
        <div className="flex flex-wrap gap-3 justify-center w-full">
          <button
            className="bg-white text-black font-bold py-3 px-5 border border-black rounded-full w-48 hover:bg-gray-100"
            onClick={() => handleShareResults(guesses, showToast)}
          >
            Share results
          </button>
          <button
            className="bg-black text-white font-bold py-3 px-5 border border-black rounded-full w-48"
            onClick={() => setShowWinModal(false)}
          >
            Back to puzzle
          </button>
        </div>
      </div>
    </div>
  );
};

export default WinningScreen;
