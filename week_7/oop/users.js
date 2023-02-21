class User {
    constructor(username, emailaddress) {
        this.name = username
        this.email = emailaddress
        this.accountBalance = 0
    }

    makeDeposit(amount){
        this.accountBalance += amount;
        return this;
    }

    makeWithdrawal(amount){
        this.accountBalance -= amount;
        return this;
    }
    displayBalance(){
        console.log(this.accountBalance)
        return this;
    }

    tranfer(amount, user){
        this.makeWithdrawal(amount);
        user.makeDeposit(amount);
        return this;
    }
}

const alex = new User("Alex P", "alex@email.com");
const stan = new User("Stan", "stan@email.com");
const john = new User("John", "john@email.com");

alex.makeDeposit(100).makeDeposit(100).makeDeposit(100).makeWithdrawal(48).displayBalance();


stan.makeDeposit(48).makeDeposit(94).makeWithdrawal(5).makeWithdrawal(32).displayBalance();


john.makeDeposit(348).makeWithdrawal(21).makeWithdrawal(8).makeWithdrawal(48).displayBalance();

alex.tranfer(30,john).displayBalance();
john.displayBalance();