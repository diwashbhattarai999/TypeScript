"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        //   private readonly id: string;
        //   public name: string;
        this.employees = [];
        // this.id = id;
        // this.name = n;
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        // this.id = '23';
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.fiscalYear = 2020;
    return Department;
}());
// const accounting = new Department("d1", "Accounting");
// console.log(accounting);
// accounting.describe();
// accounting.addEmployee("Ram");
// accounting.addEmployee("Sita");
// accounting.employees[2] = "Hari"; //error due to private properties
// accounting.name = "Programming"; //not error since it is public.
//Note: public is defalut
// accounting.describe();
// accounting.printEmployeeInfo();
// const accountingCopy = { name: "Programming", describe: accounting.describe };
// accountingCopy.describe();
//Inheritance:
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log("IT Department - ID: " + this.id);
    };
    return ITDepartment;
}(Department));
var programming = new ITDepartment("D1", ["Max"]);
programming.addEmployee("Ram");
programming.addEmployee("Sita");
programming.describe();
// programming.printEmployeeInfo();
// console.log(programming);
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("No report found.");
        },
        set: function (value) {
            if (!value) {
                throw new Error("Please pass in a valid value!");
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.getInstance = function () {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;
    };
    AccountingDepartment.prototype.describe = function () {
        console.log("Accounting Department - ID: " + this.id);
    };
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === "Shyam") {
            return;
        }
        this.employees.push(name);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
// const accounting = new AccountingDepartment("D1", []);
var accounting = AccountingDepartment.getInstance();
var accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
accounting.mostRecentReport = "Year End Report";
accounting.addEmployee("Shyam");
accounting.addEmployee("Ryam");
accounting.addReport("Something went wrong...");
// accounting.printReports();
// console.log(accounting.mostRecentReport);
accounting.describe();
// accounting.printEmployeeInfo();
// console.log(accounting);
// class Person {
//   constructor(private firstName: string, private lastName: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   getFullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   describe(): string {
//     return `This is ${this.firstName} ${this.lastName}. `;
//   }
// }
// class Employee extends Person {
//   constructor(firstName: string, lastName: string, private jobTitle: string) {
//     super(firstName, lastName);
//   }
//   describe(): string {
//     return super.describe() + `I'm a ${this.jobTitle}.`;
//   }
// }
// let employee = new Employee("Diwash", "Bhattarai", "Web Developer");
// console.log(employee.describe());
// const employee1 = Department.createEmployee("Hari");
// console.log(employee1, Department.fiscalYear);
