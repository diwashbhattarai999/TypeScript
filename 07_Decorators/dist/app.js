"use strict";
// //Decorators - Function that we apply to a something like a class in a certain way
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// // function Logger(constructor: Function) {
// //   console.log("Logging...");
// //   console.log(constructor);
// // }
function Logger(logString) {
    console.log("LOGGER FACTORY");
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    console.log("TEMPLATE FACTORY");
    return function (originalConstructor) {
        // console.log("Rendering template...");
        // const hookEl = document.getElementById(hookId);
        // const p = new originalConstructor();
        // if (hookEl) {
        //   hookEl.innerHTML = template;
        //   hookEl.querySelector("h1")!.textContent = p.name;
        // }
        return class extends originalConstructor {
            constructor(..._) {
                super();
                console.log("Rendering template...");
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h1").textContent = this.name;
                }
            }
        };
    };
}
let Person = 
//The decorator functions render bottom top i.e first withtemplate runs and logger runs but the decorators works normally as javascript i.e top-botton like console.log in logger runs first and then withtemplate runs
class Person {
    constructor() {
        this.name = "Diwash";
        console.log("Creating person object...");
    }
};
Person = __decorate([
    Logger("LOGGING - PERSON"),
    WithTemplate("<h1>My Person Object</h1>", "app")
    //The decorator functions render bottom top i.e first withtemplate runs and logger runs but the decorators works normally as javascript i.e top-botton like console.log in logger runs first and then withtemplate runs
], Person);
const per1 = new Person();
console.log(per1);
//---
function Log(target, propertyName) {
    console.log("Property decorator!");
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log("Accessor decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log("Method decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log("Parameter decorator!");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid price - should be positive!");
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
const p1 = new Product("Book", 19);
const p2 = new Product("Book 2", 29);
//Decorators only executes when a class is defined not when it's instance is created or its method or properties are used