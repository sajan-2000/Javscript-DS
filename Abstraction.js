class Employee {

    name;
    basicSalary;
    age;
    bonus;
    finalSal;

    constructor(name, age, basicSalary) {
        this.name = name;
        this.age = age;
        this.basicSalary = basicSalary;
        this.bonus = 3000;
    }

    calFinalSal() {
        this.finalSal = this.basicSalary + this.bonus;
        console.log("Your Final Salary is" + this.finalSal);
    }

    displayInfo() {
        console.log(`Name: ${this.name} Age: ${this.age} Bonus: ${this.bonus}`);
    }
}

let newEmp = new Employee("Sajan", 24, 5000);
newEmp.displayInfo();
newEmp.calFinalSal();