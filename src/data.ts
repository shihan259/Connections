// File to store any data

import { BLUE, GREEN, PURPLE, YELLOW } from "./constants";
import { AnswerItem, WordItem } from "./interfaces/interfaces";

export const wordlist: WordItem[] = [
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

export const answers: AnswerItem[] = [
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
  "Oh nyo you lost :(",
  "Skill issue",
]
