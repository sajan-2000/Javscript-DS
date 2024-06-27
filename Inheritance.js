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

class SavingsAccount extends BankAccount {

    transactionLimit = 50000;

    constructor(customerName, balance = 0) {
        super(customerName, balance);
    }

}

class CurrentAccount extends BankAccount {

    transactionLimit = 100000;

    constructor(customerName, balance = 0) {
        super(customerName, balance)
    }

}

let myAccount = new SavingsAccount("Sajan", 10000);
myAccount.deposit(3000);
console.log(myAccount);

let myCurrentAccnt = new CurrentAccount("Salaman", 50000);
myCurrentAccnt.withdraw(500);
console.log(myCurrentAccnt);