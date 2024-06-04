import { getColorClass } from "@/helpers/functions";
import { WordItem } from "@/interfaces/interfaces";

interface GuessResultProps {
  guesses: WordItem[][];
}

const GuessResult: React.FC<GuessResultProps> = ({ guesses }) => {
  return <div className="grid grid-cols-4 gap-x-1 gap-y-3 w-auto overflow-auto">
    {guesses.map((guess, index) => (
        guess.map((wordItem, index) => (
          <div key={index} className={`${getColorClass(wordItem.category)} rounded w-10 h-10`}>
          </div>
        ))
    ))}
  </div>;
};

export default GuessResult;
