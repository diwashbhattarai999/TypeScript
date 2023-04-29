//Generics

//Generic type is the type which is kind of connected with some other type & is really flexible regarding which exact type that other type is

// const names = ["Ram", "Hari"];
// const names: any[] = []
// const names: string[] = []; //This is similar to Array<String> below
// const names: Array<string> = [];
// names[0].split(" ");

// const promise: Promise<string> = new Promise((resolve, rejejct) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// console.log(merge({ name: "Diwash" }, { age: 21 })); //this works
// const mergedObj = merge({ name: "Diwash" }, { age: 21 });
// const mergedObj2 = merge({ name: "Diwash", hobbies: "Coding" }, { age: 21 });
// console.log(mergedObj.age);

// function identity<T>(arg: T): T {
//   console.log(arg.length); //Error since arg is of type which don't have length property
//   return arg;
// }
// let output = identity<string>("Hello World!");
// console.log(output);

// function identity<T>(arg: T[]): T[] {
//   console.log(arg.length); //Now, since the type is array type, it has length property
//   return arg;
// }

// let output = identity<string>(["Hello World!", "Hi"]);
// console.log(output);

// function identity<Type>(arg: Type): Type {
//   return arg;
// }
// let myIdentity: <Type>(arg: Type) => Type = identity;
// let myIdentity: <Input>(arg: Input) => Input = identity;
// let myIdentity: { <Input>(arg: Input): Input } = identity;

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi, there!"));
console.log(countAndDescribe([]));
console.log(countAndDescribe(["Sports", "Cooking"]));
// console.log(countAndDescribe(10)); //error

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({name: "Diwash"}, "name"));
