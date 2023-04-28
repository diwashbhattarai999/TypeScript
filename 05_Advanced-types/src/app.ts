// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type ElevatedEmployee = Admin & Employee;

// const e1: ElevatedEmployee = {
//   name: "Diwash",
//   privileges: ["create-server"],
//   startDate: new Date(),
// };

// The above example using types is same as below example using interface
interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee extends Employee, Admin {}

const e1: ElevatedEmployee = {
  name: "Diwash",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numberic = number | boolean;

type Universal = Combinable & Numberic;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// const reslult = add(1, 5);
// const reslult = add("Max", "Harry");
// const reslult = add(5, 5);
// const reslult = add("Max", 5);
// reslult.split(" ");

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInfo(emp: UnknownEmployee) {
//   console.log("Name: " + emp.name);
//   if ("privileges" in emp) {
//     console.log("Privileges: " + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("Start Date: " + emp.startDate);
//   }
// }
// printEmployeeInfo(e1);
// printEmployeeInfo({ name: "Ram", startDate: new Date() });

// class Car {
//   drive() {
//     console.log("Driving...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving a truck...");
//   }

//   loadCargo(amount: number) {
//     console.log("Loading carge..." + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   //   if ("loadCargo" in vehicle) {
//   //     vehicle.loadCargo(1000);
//   //   }
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// //Discriminated Unions:

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//   }
//   console.log("Moving with speed: " + speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 10 });

// //Type Casting
// // const paragraph = document.getElementById("message-output");
// // const userInput = <HTMLInputElement>document.getElementById("user-input")!;
// const userInput = document.getElementById("user-input");

// if (userInput) {
//   (userInput as HTMLInputElement).value = "Hi there!";
// }

// interface ErrorContainer {
//   //   {email: "Not a valid email", username: "Must start with the character"}
//   //   id: string;
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "Not a valid email",
//   username: "Must start with a capital character!",
// };

//Optional Chaining:

const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own Company" },
};

// console.log(fetchedUserData.job.title);
// console.log(fetchedUserData.job && fetchedUserData.job.title);
console.log(fetchedUserData?.job.title);

const userInput = null;

// const storedData = userInput || "DEFAULT";
const storedData = userInput ?? "DEFAULT";

console.log(storedData);
