function add(n1, n2, showResult, phrase) {
    // console.log(typeof number1);
    // if(typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error("Incorrect input!")
    //  }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5; //5.0 is same as 5 in js
var number2 = 2.8;
var printRestult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printRestult, resultPhrase);
// console.log(result);
