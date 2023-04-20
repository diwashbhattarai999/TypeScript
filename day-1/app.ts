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
const person = {
    name: "Diwash",
    age: 21,
}
 
console.log(person.name);

//When we hover over person, we get:
// const person: {
//     name: string;
//     age: number;
// }
//This is similar to object but it is not an object. This is the object type inferred by TypeScript