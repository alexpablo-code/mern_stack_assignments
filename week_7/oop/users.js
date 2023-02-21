class User {
    constructor(username, emailaddress) {
        this.name = username
        this.email = emailaddress
        this.accountBalance = 0
    }

    makeDeposit(amount){
        this.accountBalance += amount;
    }

    makeWithdrawal(amount){
        this.accountBalance -= amount;
    }
    displayBalance(){
        console.log(this.accountBalance)
    }

    tranfer(amount, user){
        this.makeWithdrawal(amount);
        user.makeDeposit(amount);
    }
}

const alex = new User("Alex P", "alex@email.com");
const stan = new User("Stan", "stan@email.com");
const john = new User("John", "john@email.com");

alex.makeDeposit(100);
alex.makeDeposit(100);
alex.makeDeposit(100);

alex.makeWithdrawal(48);
alex.displayBalance();


stan.makeDeposit(48);
stan.makeDeposit(94);
stan.makeWithdrawal(5);
stan.makeDeposit(32);
stan.displayBalance();


john.makeDeposit(348);
john.makeWithdrawal(21);
john.makeWithdrawal(8);
john.makeWithdrawal(48);
john.displayBalance()

alex.tranfer(30,john);
alex.displayBalance();
john.displayBalance();