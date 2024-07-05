import { getColorClass } from "@/utils/functions";
import { AnswerItem } from "@/interfaces/interfaces";

interface SolvedCategoryProps {
  category: number;
  answerItem: AnswerItem;
}


const SolvedCategory: React.FC<SolvedCategoryProps> = ({
  category,
  answerItem,
}) => {
  return (
    <div
      className={`${getColorClass(
        category
      )} py-2 px-8 xs:text-sm flex justify-center flex-col text-lg overflow-hidden leading-5 text-center rounded h-[75px] mb-2`}
    >
      <div className="font-bold">{answerItem.description.toUpperCase()}</div>
      <div>{answerItem.answer.join(", ").toUpperCase()}</div>
    </div>
  );
};

export default SolvedCategory;
