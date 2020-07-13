"use strict";

let inputmessage;
let outputMessage;

const checkForSpam = function (message) {
  inputmessage = message.toLowerCase();

  if (inputmessage.includes("spam") || inputmessage.includes("sale")) {
    outputMessage = "true";
  } else {
    outputMessage = "false";
  }
  console.log(outputMessage);
  return;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
checkForSpam("Latest technology news"); // false

checkForSpam("JavaScript weekly newsletter"); // false

checkForSpam("Get best sale offers now!"); // true

checkForSpam("[SPAM] How to earn fast money?"); // true
