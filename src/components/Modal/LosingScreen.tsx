import { WordItem } from "@/interfaces/interfaces";
import { useState } from "react";
import GuessResult from "./GuessResult";
import { handleShareResults } from "@/helpers/functions";
import { losingScreenTitles } from "@/data";

interface LosingScreenProps {
  mistakes: number;
  guesses: WordItem[][];
  setShowLoseModal: (showModal: boolean) => void;
}

const LosingScreen: React.FC<LosingScreenProps> = ({
  mistakes,
  guesses,
  setShowLoseModal,
}) => {
  const [showGuesses, setShowGuesses] = useState(false);

  // Display random title for losses
  const title = losingScreenTitles[Math.floor(Math.random() * losingScreenTitles.length)];

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-3xl font-bold text-center">{title}</h2>
      <button
        className="bg-white text-black font-bold py-3 px-5 border border-black rounded-full"
        onClick={() => setShowGuesses(!showGuesses)}
      >
        {showGuesses ? "Hide guesses" : "Show guesses"}
      </button>
      {showGuesses && <GuessResult guesses={guesses} />}

      <p className="font-bold">Mistakes made: {mistakes}</p>
      <div className="flex flex-row  flex-grow items-center justify-end w-full">
        <div className="flex flex-wrap gap-3 justify-center w-full">
          <button className="bg-white text-black font-bold py-3 px-5 border border-black rounded-full w-48 hover:bg-gray-100"
          onClick={() => handleShareResults(guesses)}>
            Share results
          </button>
          <button
            className="bg-black text-white font-bold py-3 px-5 border border-black rounded-full w-48"
            onClick={() => setShowLoseModal(false)}
          >
            Continue trying
          </button>
        </div>
      </div>
    </div>
  );
};

export default LosingScreen;
