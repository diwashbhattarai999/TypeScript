// interface Person {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// let user1: Person;

// user1 = {
//   name: "Diwash",
//   age: 21,

//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };

// user1.greet("Hi there, I am");

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  //   readonly name: string;

  greet(phrase: string): void;
}

// type Greetable = {
//   readonly name: string;

//   greet(phrase: string): void;
// };

class Person implements Greetable {
  name?: string;
  age = 21;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } 
    else {
      console.log("Hi");
    }
  }
}

let user1: Greetable;

user1 = new Person();

// user1.name = "Hari"; //error
user1.greet("Hello I'm ");
console.log(user1);

// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
