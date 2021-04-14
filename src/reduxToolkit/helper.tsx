"use strict";
import { WEEKDAYS, MONTHS } from "../config/constants";
import { CardProps } from "./models";

type DateType = {
  weekday: string, day: string, month: string, year: string
};

const updateTotal = (amount: number, item: CardProps): number => {
  return item.total + amount;
};

const updateWeekdaysTotal = (amount: number, item: number[], day: Date): number[] => {
  const index: number = day.getDay().valueOf();
  item[index] = item[index]! + amount;
  return item;
};

const updateDates = (item: string[], day: Date): string[] => {
  item.push(day.toLocaleDateString());
  return item;
};

const updateSpeed = (item: CardProps, day: Date): number => {
  const date1: number = new Date(day.toLocaleDateString()).valueOf();
  const date2: number = new Date(item.dates[0]!).valueOf()
  const diff = Math.abs(date1 - date2);
  // 1 DAY = 24 hrs X 60 mins X 60 secs X 1000 ms = 86400000 ms
  const diffdays = Math.floor(diff / 86400000) + 1;
  return (item.total / diffdays / 60);
};

const updateTimeLeft = (item: CardProps): number => {
  return 10000 - (item.total / 60);
};

const convertWeekday = (value: Date): string => {
  const day = value.getDay().valueOf();
  return WEEKDAYS[day]!;
};

const convertMonth = (value: Date): string => {
  const month = value.getMonth() + 1;
  return MONTHS[month - 1]!;
};

const updateDate = (item: CardProps, day: Date): DateType => {
  day.setDate(day.getDate() + item.timeLeft);
  return {
    weekday: convertWeekday(day),
    day: day.getDate().toString(),
    month: convertMonth(day),
    year: day.getFullYear().toString(),
  };
};

const updateCard = (item: CardProps, amount: number): void => {
  const day: Date = new Date();
  item.total = updateTotal(amount, item);
  item.weekdaysTotals = updateWeekdaysTotal(amount, item.weekdaysTotals, day);
  item.dates = updateDates(item.dates!, day);
  item.speed = updateSpeed(item, day);
  item.timeLeft = updateTimeLeft(item);
  item.date = updateDate(item, day);
};

export const updateSelectedCard = (list: CardProps[], cardIdx: number, amount: number): CardProps[] => {
  const card = list.find((el: CardProps) => el.idx === cardIdx)!;
  updateCard(card, amount);
  return list;
};