//*Generic type assign
// const person: object = {
//     name: "Diwash",
//     age: 21,
// }

//*Specific type assign
// const person: {
//     name: string;
//     age: number;
// } = {
//     name: "Diwash",
//     age: 21,
// };

//*Specific type assign(automatic)

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string],
// } = {
//   name: "Diwash",
//   age: 21,
//   hobbies: ["Coding", "Sports"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 100,
  AUTHOR = 200,
}

const person = {
  name: "Diwash",
  age: 21,
  hobbies: ["Coding", "Sports"],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("Is read only");
} else if (person.role === Role.AUTHOR) {
    console.log("Is author")
}

// const person = {
//   name: "Diwash",
//   age: 21,
//   hobbies: ["Coding", "Sports"],
//   role: [2, "author"],
// };

// person.role.push("admin");
// person.role[1] = 10;

// let favoriteActivities: string[];
// favoriteActivities = ["Sports"];

let favoriteActivities: any[];
favoriteActivities = ["Sports"];

console.log(person.name);

//*When we hover over person, we get:
// const person: {
//     name: string;
//     age: number;
// }
//?This is similar to object but it is not an object. This is the object type inferred by TypeScript

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map) //!Thorws an error since hobby is string not an array.
}
