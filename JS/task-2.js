"use strict";

let wordOfEngraving;
let amountOfWord;
let total;

const calculateEngravingPrice = function (message, pricePerWord) {

    // разбила масив по пробелам, создался новый масив wordOfEngraving
  wordOfEngraving = message.split(" ");

//   перебираю масив чтоб узнать количество слов
  for (let i = 1; i < wordOfEngraving.length; i += 1) {
    amountOfWord = i;
  }

// сумма заказа=количество слов*цена за гравировку одного слова(pricePerWord)
  total = amountOfWord * pricePerWord;

  return total;
};

console.log(total);

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// ); // 240

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// ); // 120
