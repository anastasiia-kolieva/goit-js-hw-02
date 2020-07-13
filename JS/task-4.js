"use strict";

let lengthOfString;
let arr = [];
let partOfString;
let message;

const formatString = function (string) {
  // Определила длинну строк, вывела в консоль
  lengthOfString = string.length;
  console.log(lengthOfString);

  //   Если длинна строки равна и меньше 40, возвращаем в консоль строку в начальном виде
  if (lengthOfString <= 40) {
    console.log(string);
  }
  if (lengthOfString > 40) {

    // ???? не знаю как ограничить вывод только 40-ка символов в строке
  }
  return;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );
// вернется форматированная строка
