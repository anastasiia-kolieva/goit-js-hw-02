"use strict";

let lengthOfString;
let arr = [];
let partOfString;
let message;

const formatString = function (string) {
  lengthOfString = string.length;
  console.log(`Длина строки ${lengthOfString} символов`);

  if (lengthOfString <= 40) {
    console.log(string);
  }
  if (lengthOfString > 40) {
    let partOfString = string.slice(0, 41);
    console.log(partOfString);
  }
  return;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
formatString("Curabitur ligula sapien, tincidunt non.");
// вернется оригинальная строка

formatString("Vestibulum facilisis, purus nec pulvinar iaculis.");
// вернется форматированная строка

formatString("Curabitur ligula sapien.");
// вернется оригинальная строка

formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.");
// вернется форматированная строка
