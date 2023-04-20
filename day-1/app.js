//Generic type assign
// const person: object = {
//     name: "Diwash",
//     age: 21,
// }
//Specific type assign
// const person: {
//     name: string;
//     age: number;
// } = {
//     name: "Diwash",
//     age: 21,
// };
//Specific type assign(automatic)
var person = {
    name: "Diwash",
    age: 21,
    hobbies: ["Coding", "Sports"],
};
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
//When we hover over person, we get:
// const person: {
//     name: string;
//     age: number;
// }
//This is similar to object but it is not an object. This is the object type inferred by TypeScript
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
