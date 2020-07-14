"use strict";

let list;
let longestWord;

const findLongestWord = function (string) {
  list = string.split(" ");
  longestWord = list[0];

  for (let i = 1; i < list.length; i += 1) {
    if (list[i].length > longestWord.length) {
      longestWord = list[i];
    }
  }
  console.log(longestWord);
  return longestWord;
};


/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

findLongestWord("The quick brown fox jumped over the lazy dog"); // 'jumped'

findLongestWord("Google do a roll"); // 'Google'

findLongestWord("May the force be with you"); // 'force'
