"use strict";
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
//The above example using types is same as below example using interface
// interface Admin {
//   name: string;
//   privileges: string[];
// }
// interface Employee {
//   name: string;
//   startDate: Date;
// }
// interface ElevatedEmployee extends Employee, Admin {}
// const e1: ElevatedEmployee = {
//   name: "Diwash",
//   privileges: ["create-server"],
//   startDate: new Date(),
// };
// type Combinable = string | number;
// type Numberic = number | boolean;
// type Universal = Combinable & Numberic;
// function add(a: Combinable, b: Combinable) {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }
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
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log("Loading carge..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    //   if ("loadCargo" in vehicle) {
    //     vehicle.loadCargo(1000);
    //   }
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
