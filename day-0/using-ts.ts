const button = document.querySelector("button")! as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
    return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

//Note: The input.value property is always string no matter what type it is. Like, here inpu1 and input2 are of type number but the input1.value && input2.value always returns a string.
//So, they get concatenates.
