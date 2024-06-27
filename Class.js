class BankAccount {

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.balance = balance;
        this.accountNumber = Date.now();
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}

let myaccnt = new BankAccount("Sajan", 20000);
myaccnt.deposit(5001);
myaccnt.withdraw(3000);
console.log(myaccnt);