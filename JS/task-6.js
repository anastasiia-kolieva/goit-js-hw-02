"use strict";

let input;
const numbers = [];
let total = 0;

function totalInput() {
  while (true) {
    input = prompt("Введите число", 0);

    if (input === " " || input === null) {
      alert("Отменено пользователем!");
      break;
    } else if (!isFinite(input)) {
      alert("Было введено не число, попробуйте еще раз");
      continue;
    }

    numbers.push(+input);
  }

  for (let number of numbers) {
    total += number;
  }

  return total;
}

console.log(`Общая сумма чисел равна ${totalInput()}`);