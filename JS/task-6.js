"use strict";

let input;
const numbers = [];
let total = 0;

input = prompt("Введите число");
numbers.push(input);

const addNumber = function(numbers){

    for (let i=0; i<numbers.length; i+=1){

    if (input === null) {
        console.log("Отменено пользователем!");
        break;
      }
    
      if (Number.isNaN(Number(input))) {
        alert("Было введено не число, попробуйте еще раз");
        continue;
      } else {
        total += Number(input);
        console.log(total);
        break;
      }
    }

    return;
}

console.log (`Общая сумма чисел равна ${total}`);





// do {

//   if (input === null) {
//     console.log("Отменено пользователем!");
//     break;
//   }

//   if (Number.isNaN(Number(input))) {
//     alert("Было введено не число, попробуйте еще раз");
//     continue;
//   } else {
//     total += Number(input);
//     console.log(total);
//     break;
//   }
// } while (true);
