var userInput;
var userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
//unknown is better than using any but still avoid using unknown as much as possible.
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("An error occurred!", 500);
console.log(result);
