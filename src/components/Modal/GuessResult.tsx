import { getColorClass } from "@/utils/functions";
import { WordItem } from "@/interfaces/interfaces";

interface GuessResultProps {
  guesses: WordItem[][];
}

const GuessResult: React.FC<GuessResultProps> = ({ guesses }) => {
  return <div className="grid grid-cols-4 gap-x-1 gap-y-2 w-auto min-h-[200px] overflow-auto">
    {guesses.map((guess, index) => (
        guess.map((wordItem, index) => (
          <div key={index} className={`${getColorClass(wordItem.category)} rounded w-10 h-10`}>
          </div>
        ))
    ))}
  </div>;
};

export default GuessResult;
