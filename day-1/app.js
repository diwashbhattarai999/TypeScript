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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Diwash",
    age: 21,
    hobbies: ["Coding", "Sports"],
    role: Role.ADMIN,
};
if (person.role === Role.ADMIN) {
    console.log("Is read only");
}
else if (person.role === Role.AUTHOR) {
    console.log("Is author");
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
console.log(person.name);
//*When we hover over person, we get:
// const person: {
//     name: string;
//     age: number;
// }
//?This is similar to object but it is not an object. This is the object type inferred by TypeScript
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    //   console.log(hobby.map) //!Thorws an error since hobby is string not an array.
}
