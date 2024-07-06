import { CategoryItem } from "@/interfaces/interfaces";
import { getColorClass } from "@/utils/functions";

interface CategoryProps {
  categoryItem: CategoryItem;
  setCategoryItem: (categoryItem: CategoryItem) => void;
}

const Category: React.FC<CategoryProps> = ({
  categoryItem,
  setCategoryItem,
}) => {
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryItem({ ...categoryItem, title: e.target.value.toUpperCase() });
  };

  return (
    <div
      className={`${getColorClass(
        categoryItem.category
      )} py-2 px-2 xs:text-sm flex justify-center flex-col text-lg
      items-center text-center rounded h-[100px]`}
    >
      <input
        className="w-full text-center bg-transparent text-black placeholder-gray-500 font-bold mb-0 focus:outline-none"
        placeholder="ENTER CATEGORY HERE"
        value={categoryItem.title}
        onChange={handleTitleChange}
      ></input>
    </div>
  );
};

export default Category;
