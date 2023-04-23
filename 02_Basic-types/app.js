"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "Max";
// userName = userInput;
// console.log(userName)
if (typeof userInput === "string") {
    userName = userInput;
}
//unknown is better than using any but still avoid using unknown as much as possible.
function generateError(message, code) {
    throw { message: message, errorCode: code };
    //   while (true) {}
}
const result = generateError("An error occurred!", 500);
console.log(result);
