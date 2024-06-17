// File to store any data

import { BLUE, GREEN, PURPLE, YELLOW } from "./constants";
import { AnswerItem, WordItem } from "./interfaces/interfaces";

export const answers: AnswerItem[] = [
  {
    answer: ["不知不觉", "不鸣则已", "不欢而散", "不白之冤"],
    category: YELLOW,
    description: "不字头开始的成语",
  },
  {
    answer: ["杯弓蛇影", "牛刀小试", "塞翁失马", "狡兔三窟"],
    category: GREEN,
    description: "有动物的成语",
  },
  {
    answer: ["半途而废", "有始无终", "前功尽弃", "自暴自弃"],
    category: BLUE,
    description: "放弃的意思",
  },
  {
    answer: ["三顾茅庐", "七擒七纵", "草船借箭", "临危受命"],
    category: PURPLE,
    description: "关于诸葛亮",
  },
];

export const wordlist: WordItem[] = [
  {
    word: "杯弓蛇影",
    category: GREEN,
  },
  {
    word: "不白之冤",
    category: YELLOW,
  },
  {
    word: "三顾茅庐",
    category: PURPLE,
  },
  {
    word: "自暴自弃",
    category: BLUE,
  },
  {
    word: "不欢而散",
    category: YELLOW,
  },
  {
    word: "前功尽弃",
    category: BLUE,
  },
  {
    word: "有始无终",
    category: BLUE,
  },
  {
    word: "不鸣则已",
    category: YELLOW,
  },
  {
    word: "狡兔三窟",
    category: GREEN,
  },
  {
    word: "七擒七纵",
    category: PURPLE,
  },
  {
    word: "牛刀小试",
    category: GREEN,
  },
  {
    word: "草船借箭",
    category: PURPLE,
  },
  {
    word: "临危受命",
    category: PURPLE,
  },
  {
    word: "不知不觉",
    category: YELLOW,
  },
  {
    word: "塞翁失马",
    category: GREEN,
  },
  {
    word: "半途而废",
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
