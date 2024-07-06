"use client";

import Category from "@/components/Create/Category";
import CreateWordButton from "@/components/Create/CreateWordButton";
import { BLUE, GREEN, PURPLE, YELLOW } from "@/constants";
import { useToast } from "@/contexts/ToastContext";
import {
  AnswerItem,
  CategoryItem,
  EditState,
  WordItem,
} from "@/interfaces/interfaces";
import { createSupabaseClient } from "@/utils/database";
import { useState } from "react";

export default function Page() {
  const { showToast } = useToast();
  const supabase = createSupabaseClient();

  const initialWordList: WordItem[] = Array.from({ length: 16 }, () => ({
    word: "",
    category: -1,
  }));
  // Set the edit state for the buttons to be either color or word
  const [editState, setEditState] = useState<EditState>("word");
  const [wordList, setWordList] = useState<WordItem[]>(initialWordList);
  const [categories, setCategories] = useState<CategoryItem[]>([
    {
      category: YELLOW,
      title: "",
    },
    {
      category: GREEN,
      title: "",
    },
    {
      category: BLUE,
      title: "",
    },
    {
      category: PURPLE,
      title: "",
    },
  ]);

  // Set a singular category item
  const setCategoryItem = (categoryItem: CategoryItem) => {
    // set category at specific index
    setCategories((prevCategories) => {
      const newCategories = [...prevCategories];
      newCategories[categoryItem.category] = categoryItem;
      return newCategories;
    });
  };

  // Set a singular word item
  const setWordItem = (wordItem: WordItem, index: number) => {
    setWordList((prevWordList) => {
      const newWordList = [...prevWordList];
      newWordList[index] = wordItem;
      return newWordList;
    });
  };

  const handleToggle = () => {
    setEditState((prevEditState) =>
      prevEditState === "color" ? "word" : "color"
    );
  };

  // Check for any empty words in word buttons
  const checkEmptyWord = () => {
    for (let wordItem of wordList) {
      if (wordItem.word === "") {
        return true;
      }
    }

    return false;
  };

  // Check for any empty category titles/descriptions
  const checkEmptyCategory = () => {
    for (let category of categories) {
      if (category.title === "") {
        return true;
      }
    }

    return false;
  };

  // Checks if there are 4 categories each with a title and description
  const checkButtonColors = () => {
    let counter = [0, 0, 0, 0];
    wordList.forEach((word) => {
      counter[word.category] += 1;
    });
    // Return true if all categories have 4 words
    return !counter.every((element) => element === 4);
  };

  // Convert the current input data to usable answer list
  const convertToAnswerList = (
    wordList: WordItem[],
    categories: CategoryItem[]
  ) => {
    const answerList = [] as AnswerItem[];

    categories.forEach((category) => {
      answerList.push({
        answer: wordList
          .filter((word) => word.category === category.category)
          .map((word) => word.word),
        category: category.category,
        description: category.title,
      });
    });
    return answerList;
  };

  const handleCreate = async () => {
    if (checkEmptyWord()) {
      showToast("You must have a word for each button", 3000);
      return;
    }

    if (checkEmptyCategory()) {
      showToast(
        "You must have a title and description for each category",
        3000
      );
      return;
    }

    if (checkButtonColors()) {
      showToast("You must have have 4 buttons for each category", 3000);
      return;
    }

    // Error checking complete

    // Save creation to DB
    try {
      const { data, error } = await supabase
        .from("Puzzles")
        .insert([
          {
            word_list: wordList,
            answer_list: convertToAnswerList(wordList, categories),
          },
        ]);

      if (error) {
        throw error;
      }

      // TODO: Redirect to successful page
    } catch (error) {
      // TODO: Error handling
      showToast("Server error", 3000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-12">
        Create Konnections
      </h1>

      {/* Toggle button */}
      <div className="flex items-center justify-center w-full mb-4">
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <div className="mr-3 text-lg text-gray-700 font-medium">Word</div>
          <div className="relative">
            <input
              type="checkbox"
              id="toggle"
              className="sr-only"
              onChange={handleToggle}
              checked={editState === "color"}
            />
            <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
            <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
          </div>
          <div className="ml-3 text-lg text-gray-700 font-medium">Color</div>
        </label>
      </div>

      <div className="mx-12 grid grid-cols-2 gap-x-6">
        <div className="grid grid-cols-1 grid-rows-4 gap-2">
          <Category
            categoryItem={categories[YELLOW]}
            setCategoryItem={setCategoryItem}
          ></Category>

          <Category
            categoryItem={categories[GREEN]}
            setCategoryItem={setCategoryItem}
          ></Category>

          <Category
            categoryItem={categories[BLUE]}
            setCategoryItem={setCategoryItem}
          ></Category>

          <Category
            categoryItem={categories[PURPLE]}
            setCategoryItem={setCategoryItem}
          ></Category>
        </div>

        <div className="grid grid-cols-4 gap-2 w-full">
          {Array.from({ length: 16 }).map((_, index) => (
            <CreateWordButton
              key={index}
              index={index}
              editState={editState}
              wordItem={wordList[index]}
              setWordItem={setWordItem}
            ></CreateWordButton>
          ))}
        </div>
      </div>

      <button
        className="mt-6 bg-white text-black font-bold py-3
       px-5 border border-black rounded-full hover:bg-gray-100"
        onClick={handleCreate}
      >
        Create Konnection
      </button>
    </div>
  );
}
