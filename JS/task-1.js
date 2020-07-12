"use strict";

let array = [];
let message;
let numberOfElement;
let valueOfElement;

const logItems = function (array) {
  // с масива пытаюсь вытянуть елементы и внести в переменную valueOfElement
  for (const element of array) {
    valueOfElement = element;
    continue;
  }

  // перебираю масив чтоб получить порядковый номер
  for (let i = 0; i < array.length; i += 1) {
    numberOfElement = i + 1;
    continue;
  }

  message = `${numberOfElement} - ${valueOfElement}`;
  console.log(message);

  return;
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
