"use strict";
// interface Person {
//   name: string;
//   age: number;
// type Greetable = {
//   readonly name: string;
//   greet(phrase: string): void;
// };
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 21;
        if (n) {
            this.name = n;
        }
    }
    Person.prototype.greet = function (phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log("Hi");
        }
    };
    return Person;
}());
var user1;
user1 = new Person();
// user1.name = "Hari"; //error
user1.greet("Hello I'm ");
console.log(user1);
var add;
add = function (n1, n2) {
    return n1 + n2;
};
