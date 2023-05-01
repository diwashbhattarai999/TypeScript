//Decorators - Function that we apply to a something like a class in a certain way

// function Logger(constructor: Function) {
//   console.log("Logging...");
//   console.log(constructor);
// }

function Logger(logString: string) {
  console.log("LOGGER FACTORY");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");

  return function (constructor: any) {
    console.log("Rendering template...");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

@Logger("LOGGING - PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app")
//The decorator functions render bottom top i.e first withtemplate runs and logger runs but the decorators works normally as javascript i.e top-botton like console.log in logger runs first and then withtemplate runs
class Person {
  name = "Diwash";

  constructor() {
    console.log("Creating person object...");
  }
}

const per1 = new Person();
console.log(per1);
