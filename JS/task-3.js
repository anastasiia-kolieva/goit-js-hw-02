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

  for (let i=0; i<list.length; i+=1){
    longestWord=list[0];
    // в начале перебора цикла самое длинное слово, это первое слово

    // если длина елемента масива меньше чем длина СЛЕДУЮЩЕНО елемента этого же масива
    if (lengthOfWord< lengthOfWord[i]) {
      // условие не могу адекватно выразить??????
    longestWord=list[i];
    break;
    }
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