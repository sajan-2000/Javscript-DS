function BankAccount(custmorName, balance = 0) {
    this.custmorName = custmorName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = function (amount) {
        this.balance += amount;
    }

    this.withdraw = function (amount) {
        this.balance -= amount;
    }
}

let newAccount = new BankAccount("Sajan", 5000);
newAccount.deposit(3000);
console.log(newAccount);