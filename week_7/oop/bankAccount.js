class BankAccount{
    constructor(intRate = 0.01, balance = 0){
        this.balance = balance
        this.intRate = intRate
    }

    deposit(amount){
        this.balance += amount;
        return this;
    }
    withdraw(amount){
        this.balance -= amount;
        return this;
    }
    displayAccountInfo(){
        console.log(`Balance: ${this.balance}`);
        return this;
    }
    yieldInterest(){
        if(this.balance > 0){
            this.balance *= this.intRate;
        }
        return this;
    }
}