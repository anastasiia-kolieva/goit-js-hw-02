"use strict";

let input;
let addNumber;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число");

  if (input === null) {
    console.log("Отменено пользователем!");
    break;
  } else if (Number.isNaN(Number(input))) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  } else {
    numbers.push(input);

    for (let i = 0; i < numbers.length; i += 1) {
      total += Number(input);
      break;
    }
  }
} while (true);

console.log(`Общая сумма чисел равна ${total}`);
