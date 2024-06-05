// File to store any data

import { BLUE, GREEN, PURPLE, YELLOW } from "./constants";
import { AnswerItem, WordItem } from "./interfaces/interfaces";

export const answers: AnswerItem[] = [
  {
    answer: ["Fold", "Concede", "Surrender", "Yield"],
    category: YELLOW,
    description: "To give up",
  },
  {
    answer: ["Ruby", "Java", "Python", "Swift"],
    category: GREEN,
    description: "Computer Programming Languages",
  },
  {
    answer: ["Love", "Ace", "Deuce", "Rally"],
    category: BLUE,
    description: "Tennis Terminologies",
  },
  {
    answer: ["Racecar", "Deified", "Noon", "Rotor"],
    category: PURPLE,
    description: "Palindromes",
  },
];

export const wordlist: WordItem[] = [
  {
    word: "Racecar",
    category: PURPLE,
  },
  {
    word: "Rally",
    category: BLUE,
  },
  {
    word: "Fold",
    category: YELLOW,
  },
  {
    word: "Ruby",
    category: GREEN,
  },
  {
    word: "Rotor",
    category: PURPLE,
  },
  {
    word: "Deified",
    category: PURPLE,
  },
  {
    word: "Ace",
    category: BLUE,
  },
  {
    word: "Concede",
    category: YELLOW,
  },
  {
    word: "Python",
    category: GREEN,
  },
  {
    word: "Love",
    category: BLUE,
  },
  {
    word: "Java",
    category: GREEN,
  },
  {
    word: "Surrender",
    category: YELLOW,
  },
  {
    word: "Deuce",
    category: BLUE,
  },
  {
    word: "Swift",
    category: GREEN,
  },
  {
    word: "Yield",
    category: YELLOW,
  },
  {
    word: "Noon",
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
  ["Hao lian lor", "Hot shit", "It's morbin time! 🤓"], // 0 mistakes
  ["Slay sister 💅🏻", "Solid bird bird"], // 1 mistake
  ["Gottem", "Noice", "Swee"], // 2 mistakes
  ["Clutched it bro 😎", "Heng arh"], // 3 mistakes
  ["Congratulations!"] // 4 or more mistakes
];
