// import { colorClass } from "@/helpers/functions";
import { BLUE, GREEN, PURPLE, YELLOW } from "@/constants";
import { AnswerItem } from "@/interfaces/interfaces";

interface SolvedCategoryProps {
  category: number;
  answerItem: AnswerItem;
}

// Function is here because of safelisting on tailwind doesn't allow export functions
const getColorClass = (index: number) => {
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

const SolvedCategory: React.FC<SolvedCategoryProps> = ({
  category,
  answerItem,
}) => {
  return (
    <div
      className={`${getColorClass(
        category
      )} py-2 px-8 text-lg text-center rounded h-[75px] mb-2`}
    >
      <div className="font-bold">{answerItem.description.toUpperCase()}</div>
      <div>{answerItem.answer.join(", ").toUpperCase()}</div>
    </div>
  );
};

export default SolvedCategory;
