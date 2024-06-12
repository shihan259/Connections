// File to store any data

import { BLUE, GREEN, PURPLE, YELLOW } from "./constants";
import { AnswerItem, WordItem } from "./interfaces/interfaces";

export const answers: AnswerItem[] = [
  {
    answer: ["Fee", "Fi", "Fo", "Fum"],
    category: YELLOW,
    description: "I smell the blood of an English man",
  },
  {
    answer: ["Cee", "See", "Sea", "Si"],
    category: GREEN,
    description: "Homophones",
  },
  {
    answer: ["Zap", "Boom", "Bam", "Pow"],
    category: BLUE,
    description: "Onomatopoeias",
  },
  {
    answer: ["Doe", "Ray", "Me", "Far"],
    category: PURPLE,
    description: "Lyrics to do-re-mi",
  },
];
export const wordlist: WordItem[] = [
  {
    word: "Cee",
    category: GREEN,
  },
  {
    word: "Fee",
    category: YELLOW,
  },
  {
    word: "Sea",
    category: GREEN,
  },
  {
    word: "Doe",
    category: PURPLE,
  },
  {
    word: "Far",
    category: PURPLE,
  },
  {
    word: "Fo",
    category: YELLOW,
  },
  {
    word: "Zap",
    category: BLUE,
  },
  {
    word: "Fi",
    category: YELLOW,
  },
  {
    word: "Ray",
    category: PURPLE,
  },
  {
    word: "See",
    category: GREEN,
  },
  {
    word: "Me",
    category: PURPLE,
  },
  {
    word: "Pow",
    category: BLUE,
  },
  {
    word: "Fum",
    category: YELLOW,
  },
  {
    word: "Bam",
    category: BLUE,
  },
  {
    word: "Si",
    category: GREEN,
  },
  {
    word: "Boom",
    category: BLUE,
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
  ["Congratulations!"], // 4 or more mistakes
];
