class BankAccount {

    #balance = 0;

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.#balance = balance;
        this.accountNumber = Date.now();
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }

    setBalance(amount) {

        if (isNaN(amount)) {
            throw new Error("Amount must be a Number");
        }
        this.#balance = amount;
    }

    getBalance() {
        return this.#balance;
    }
}

class SavingsAccount extends BankAccount {

    transactionLimit = 50000;

    constructor(customerName, balance = 0) {
        super(customerName, balance);
    }

    #calculateInterest(amount) {
        console.log("The interest is this");
    }

    takeLoan(amount) {
        this.#calculateInterest(amount);

        console.log("Taking loan amount is", amount);
    }

}

class CurrentAccount extends BankAccount {

    transactionLimit = 100000;

    constructor(customerName, balance = 0) {
        super(customerName, balance)
    }

}

// let sajanAccnt = new BankAccount("SAAA", 10000);
let myAccount = new SavingsAccount("sajan", 10000);
console.log(myAccount.getBalance());
myAccount.takeLoan(9999);
// sajanAccnt.setBalance(5000);
// console.log(sajanAccnt);