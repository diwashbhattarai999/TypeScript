"use strict";
function add(n1, n2, showResult, phrase) {
    // console.log(typeof number1);
    // if(typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error("Incorrect input!")
    //  }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const number1 = 5; //5.0 is same as 5 in js
const number2 = 2.8;
let number3 = 5;
//This is type inference that means TS automatically knows that the number3 is a number by looking at value assigned at it i.e 5 and also the type i.e let which can be any number.
let number4;
// number4 = '6'; //This throws an error since TS knows that number4 is of type number and string can't be assigned to it.
const printRestult = true;
let resultPhrase = 'Result is: ';
// resultPhrase = 0 //This throws an error since TS knows that resultPhrase is a string which was known by its initialization and cannot be assigned a number
resultPhrase = 'The Result is: '; //This is valid
add(number1, number2, printRestult, resultPhrase);
// console.log(result);
