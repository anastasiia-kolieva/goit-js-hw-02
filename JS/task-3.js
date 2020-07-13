"use strict";

let listOfWords;
let lengthOfWord;
let longestWord;

const findLongestWord = function (string) {

  // разбила строку по пробелам на слова. в результате получила масив listOfWords
  listOfWords = string.split(" ");
  longestWord = listOfWords[0];

  for (const word of listOfWords) {
    lengthOfWord = word.length;
    console.log(lengthOfWord);
}

  for (let i=1; i<lengthOfWord; i+=1){
    console.log(word[i]);
  }
  // Запуталась!!


  return;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

findLongestWord("The quick brown fox jumped over the lazy dog"); // 'jumped'

// findLongestWord("Google do a roll"); // 'Google'

// findLongestWord("May the force be with you"); // 'force'
