// File to store any data

import { BLUE, GREEN, PURPLE, YELLOW } from "./constants";
import { AnswerItem, WordItem } from "./interfaces/interfaces";

export const answers: AnswerItem[] = [
  {
    answer: ["Bolt", "Dodge", "Elude", "Flee"],
    category: YELLOW,
    description: "Escape",
  },
  {
    answer: ["Scrambled", "Fried", "Foggy", "Fuzzy"],
    category: GREEN,
    description: "Unclear mind",
  },
  {
    answer: ["Period", "Question", "Dash", "Slash"],
    category: BLUE,
    description: "Punctuations",
  },
  {
    answer: ["Valentine", "Benedict", "Mark", "Mary"],
    category: PURPLE,
    description: "Catholic saints",
  },
];

export const wordlist: WordItem[] = [
  {
    word: "Scrambled",
    category: GREEN,
  },
  {
    word: "Benedict",
    category: PURPLE,
  },
  {
    word: "Bolt",
    category: YELLOW,
  },
  {
    word: "Dash",
    category: BLUE,
  },
  {
    word: "Slash",
    category: BLUE,
  },
  {
    word: "Question",
    category: BLUE,
  },
  {
    word: "Valentine",
    category: PURPLE,
  },
  {
    word: "Fried",
    category: GREEN,
  },
  {
    word: "Dodge",
    category: YELLOW,
  },
  {
    word: "Fuzzy",
    category: GREEN,
  },
  {
    word: "Foggy",
    category: GREEN,
  },
  {
    word: "Elude",
    category: YELLOW,
  },
  {
    word: "Period",
    category: BLUE,
  },
  {
    word: "Flee",
    category: YELLOW,
  },
  {
    word: "Mark",
    category: PURPLE,
  },
  {
    word: "Mary",
    category: PURPLE,
  },
];

export const testWordList: WordItem[] = [
  {
    word: "Connection",
    category: YELLOW,
  },
  {
    word: "Network",
    category: YELLOW,
  },
  {
    word: "Link",
    category: YELLOW,
  },
  {
    word: "Bond",
    category: YELLOW,
  },
  {
    word: "Tree",
    category: GREEN,
  },
  {
    word: "Flower",
    category: GREEN,
  },
  {
    word: "Grass",
    category: GREEN,
  },
  {
    word: "Bush",
    category: GREEN,
  },
  {
    word: "Cat",
    category: BLUE,
  },
  {
    word: "Dog",
    category: BLUE,
  },
  {
    word: "Bird",
    category: BLUE,
  },
  {
    word: "Fish",
    category: BLUE,
  },
  {
    word: "Car",
    category: PURPLE,
  },
  {
    word: "Bicycle",
    category: PURPLE,
  },
  {
    word: "Bus",
    category: PURPLE,
  },
  {
    word: "Train",
    category: PURPLE,
  },
];

export const testAnswers: AnswerItem[] = [
  {
    answer: ["Connection", "Network", "Link", "Bond"],
    category: YELLOW,
    description: "Words related to connection",
  },
  {
    answer: ["Tree", "Flower", "Grass", "Bush"],
    category: GREEN,
    description: "Words related to plants",
  },
  {
    answer: ["Cat", "Dog", "Bird", "Fish"],
    category: BLUE,
    description: "Words related to animals",
  },
  {
    answer: ["Car", "Bicycle", "Bus", "Train"],
    category: PURPLE,
    description: "Words related to transport",
  },
];

export const losingScreenTitles = [
  ["💀💀💀", "toh"], // 0 solved categories
  ["Skill issue", "Rabak"], // 1 solved category
  ["womp womp", "See you no up"], // 2 solved categories
];

export const winningScreenTitles = [
  ["Hao lian lor", "Hot shit", "Bro cooked 🗣🔥🔥🔥", "Locked in. "], // 0 mistakes
  ["Slay sister 💅🏻", "Solid bird bird"], // 1 mistake
  ["Gottem", "Noice", "Swee"], // 2 mistakes
  ["Clutched it bro 😎", "Heng arh"], // 3 mistakes
  ["Congratulations!"] // 4 or more mistakes
];
