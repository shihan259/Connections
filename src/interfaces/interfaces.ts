export interface WordItem {
  word: string;
  category: number;
}

export interface AnswerItem {
  answer: string[];
  category: number;
  description: string;
}

export interface CategoryItem {
  category: number;
  title: string;
}

export interface Puzzle {
  slug: string;
  dateCreated: string;
}

export type EditState = "color" | "word"