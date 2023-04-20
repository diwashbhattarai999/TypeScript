var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
//Note: The input.value property is always string no matter what type it is. Like, here inpu1 and input2 are of type number but the input1.value && input2.value always returns a string.
//So, they get concatenates.
