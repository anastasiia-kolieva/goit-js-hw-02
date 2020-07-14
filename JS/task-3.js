"use strict";

let list;
let lengthOfWord;
let longestWord;

const findLongestWord = function (string) {
  // разбила строку по пробелам на слова. в результате получила масив listOfWords
  list = string.split(" ");

  for (const word of list) {
    lengthOfWord = word.length;
  }
  longestWord = list[0];

  for (let i = 0; i < list.length; i += 1) {
    // в начале перебора цикла самое длинное слово, это первое слово

    // если длина елемента масива меньше чем длина СЛЕДУЮЩЕНО елемента этого же масива
    if (lengthOfWord < lengthOfWord[i]) {
      longestWord = list[i];
      break;
    }

    // в console выводится 9 штук первого слова. я так понимаю что условие IF не срабатывает.
    console.log(longestWord);
  }

  return;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

findLongestWord("The quick brown fox jumped over the lazy dog"); // 'jumped'

// findLongestWord("Google do a roll"); // 'Google'

// findLongestWord("May the force be with you"); // 'force'
