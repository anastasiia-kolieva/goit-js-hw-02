"use strict";

let wordsOfEngraving = [];
let amountOfWord;
let total;

const calculateEngravingPrice = function (message, pricePerWord) {
  wordsOfEngraving = message.split(" ");
  amountOfWord = wordsOfEngraving.length;

  total = amountOfWord * pricePerWord;
  console.log("Стоимость гравировки", total);

  return;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
calculateEngravingPrice(
  "Proin sociis natoque et magnis parturient montes mus",
  10
); // 80

calculateEngravingPrice(
  "Proin sociis natoque et magnis parturient montes mus",
  20
); // 160

calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40); // 240

calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20); // 120
