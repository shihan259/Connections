import { WordItem } from "@/interfaces/interfaces";

interface WinningScreenProps {
  mistakes: number;
  guesses: WordItem[][];
  setShowWinModal: (showModal: boolean) => void;
}

const WinningScreen: React.FC<WinningScreenProps> = ({
  mistakes,
  guesses,
  setShowWinModal,
}) => {
  const title = mistakes == 0 ? "Perfect!" : "Congratulations!";

  return <div>{title}</div>;
};

export default WinningScreen;
