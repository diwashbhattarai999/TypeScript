// const userName = "Diwash Bhattarai";
// console.log("This was easy...");

// console.log(userName);

//We have to manually compile the .ts file each time using:
//tsc filName.ts
//So, for making development easy, we can use watch mode using:
//tsc fileName.ts --watch or tsc fileName.ts -w
//With this watch mode, we don't have to compile each time

//The above method works for a single file. But, for a large project with multiple .ts file it may not work.So, we have to initialize typescript in the working folder with:
//tsc --init
//Now, this automatically compiles every .ts file in the working folder.
//Also, this can be combined with tsc -w. So, that all changes in any file inside the working folder can be watched automatically.

const button = document.querySelector("button")!;

function clickHandler(message: string) {
  // let userName = "Diwash";
  console.log("Clicked" + message);
}

if (button) {
  button.addEventListener("click", clickHandler.bind(null, "Hello"));
}

// if (button) {
//   button.addEventListener("click", () => {
//     console.log("Clicked");
//   });
// }

function add(n1: number, n2: number) {
  if(n1 + n2 > 0) {
    return n1 + n2
  } 
  return;
}

