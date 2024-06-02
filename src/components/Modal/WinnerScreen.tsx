import { WordItem } from "@/interfaces/interfaces";

interface WinnerScreenProps {
  mistakes: number;
  guesses: WordItem[][];
}

const WinnerScreen: React.FC<WinnerScreenProps> = ({ mistakes, guesses }) => {
  const title = mistakes == 0 ? "Perfect!" : "Congratulations!";

  

  return <div>{title}</div>;
};

export default WinnerScreen;
