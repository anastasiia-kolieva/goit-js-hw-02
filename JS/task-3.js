"use strict";

let listOfWords;
let lengthOfWord;

const findLongestWord = function (string) {
  // разбила строку по пробелам на слова. в результате получила масив listOfWords
  listOfWords = string.split(" ");

  for (const word of listOfWords) {
    // console.log(word);

    for (let i = 0; i < word.length; i += 1) {
      lengthOfWord = word.length[i];

      if(lengthOfWord)
    }
  }

  return;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

findLongestWord("The quick brown fox jumped over the lazy dog"); // 'jumped'

// findLongestWord("Google do a roll"); // 'Google'

// findLongestWord("May the force be with you"); // 'force'
