"use strict";

let listOfWords;
let index;

const findLongestWord = function (string) {
  // разбила строку по пробелам на слова. в результате получила масив listOfWords
  listOfWords = string.split(" ");

  for (const oneWord of listOfWords) {
    // если индекс последнего символа слова равен длинне слова тогда вывести это слово?????
    if (oneWord.lastIndexOf() - 1 === oneWord.length) {
      console.log(oneWord);
    }
  }
  return;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
