"use strict";
//Generics
function countAndDescribe(element) {
    let descriptionText = "Got no value";
    if (element.length === 1) {
        descriptionText = "Got 1 element";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("Hi, there!"));
console.log(countAndDescribe([]));
console.log(countAndDescribe(["Sports", "Cooking"]));
// console.log(countAndDescribe(10)); //error
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
console.log(extractAndConvert({ name: "Diwash" }, "name"));
