class BankAccount {
    constructor(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.initialBalance = initialBalance;
    }

    Deposit(amount) {
        this.initialBalance += amount;
        document.getElementById("h1").innerText = `Successfully deposited. Current balance is ${this.initialBalance}`;
        document.getElementById("balance").innerText = this.initialBalance;
        console.log(`Successfully deposited. Current balance is ${this.initialBalance}`);
    }

    Withdraw(amount) {
        if (amount > this.initialBalance) {
            console.log(`Insufficient funds: ${amount} dinars`);
            document.getElementById("h1").innerText = `Insufficient funds: ${amount} dinars`;
        } else {
            this.initialBalance -= amount;
            document.getElementById("h1").innerText = `Successfully withdrew. Current balance is ${this.initialBalance}`;
            document.getElementById("balance").innerText = this.initialBalance;
            console.log(`Successfully withdrew. Current balance is ${this.initialBalance}`);
        }
    }

    displayBalance() {
        console.log(`Initial balance is ${this.initialBalance}`);
    }
}

let BankAcc = new BankAccount(123456789, 5000);

document.getElementById("balance").innerText = BankAcc.initialBalance;

document.getElementById("depositBtn").addEventListener("click", function () {
    let depositAmount = document.getElementById("amount").value;
    if (depositAmount) {
        BankAcc.Deposit(parseInt(depositAmount));
    }
});

document.getElementById("withdrawBtn").addEventListener("click", function () {
    let withdrawAmount = document.getElementById("amount").value;
    if (withdrawAmount) {
        BankAcc.Withdraw(parseInt(withdrawAmount));
    }
});
