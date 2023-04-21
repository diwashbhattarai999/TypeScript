// function add(n1: number, n2: number) {
//     return n1 + n2;
// }
//When we hover over add, it shows:
// function add(n1: number, n2: number): number
//which means the functions return type is a number
// function add(n1: number, n2: number) {
//     return n1.toString() + n2.toString();
// }
//Now the return type of function became string
// function add(n1: number, n2: number): string {
//     return n1 + n2;
// }
//This gives error since n1 & n2 are of type numbe and we explicitly changed it's return type of number
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
//This function has no return. So, this function's return type became void which is identified by TypeScript.
// printResult(add(5, 12));
console.log(printResult(add(5, 12)));
