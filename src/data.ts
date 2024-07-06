// File to store any data

import { BLUE, GREEN, PURPLE, YELLOW } from "./constants";
import { AnswerItem, WordItem } from "./interfaces/interfaces";

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
