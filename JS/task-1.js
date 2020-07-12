"use strict";

let array = [];
let message;
let valueOfElement;

const logItems = function (array) {
  for (const element of array) {
    valueOfElement = element;
  }

  for (let i = 1; i < array.length; i += 1) {
    message = `${i} - ${valueOfElement}`;
  }

  return;
};

console.log(message);

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
