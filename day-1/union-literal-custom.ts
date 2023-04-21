//Union Types, Literal Types & Custom Types

//Custom Types:
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;

  //   if (resultConversion === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
}

const combinedAges = combine(30, 45, "as-number");
console.log(combinedAges);

const combinedStrigAges = combine("30", "45", "as-number");
console.log(combinedStrigAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
