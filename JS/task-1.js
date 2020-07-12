"use strict";

let array = [];  
let message;
let valueOfElement;

const logItems = function (array) {

  // с масива пытаюсь вытянуть елементы и внести в переменную valueOfElement
  for (const element of array) {
    valueOfElement = element;
  }

  // перебираю масив и получаю необходимое сообщение
  for (let i = 1; i < array.length; i += 1) {
    message = `${i} - ${valueOfElement}`;
  }

  return message;
};

console.log(message);
// в девтулзах показывает underfined и проблема в строке 22.

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
