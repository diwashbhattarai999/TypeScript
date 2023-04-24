class Department {
  //   private readonly id: string;
  //   public name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = '23';
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

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
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

const programming = new ITDepartment("D1", ["Max"]);

programming.addEmployee("Ram");
programming.addEmployee("Sita");

programming.describe();
programming.printEmployeeInfo();

console.log(programming);

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === "Shyam") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment("D1", []);

accounting.mostRecentReport = "Year End Report";

accounting.addEmployee("Shyam");
accounting.addEmployee("Ryam");

accounting.addReport("Something went wrong...");
accounting.printReports();

console.log(accounting.mostRecentReport);

accounting.describe();
accounting.printEmployeeInfo();

console.log(accounting);
