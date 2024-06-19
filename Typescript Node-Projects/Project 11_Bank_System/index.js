#! /usr/bin/env node
//      Project 12 :  MyBank console app
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
console.log(chalk.red(figlet.textSync("MyBank console App")));
// Bank Account Class
class BankAccount {
    accountNumber;
    balance;
    //constructur initialize class object
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    // DEBIT money
    withdarw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(chalk.yellow(`withdrawl of $${amount} successful. Remainning balance : $${this.balance}`));
        }
        else {
            console.log(chalk.blue("Insufficient Balance."));
        }
    }
    // Credit money
    deposit(amount) {
        if (amount > 100) {
            amount -= 1; //1$ fee charged if more than 100 dollar deposited
        }
        this.balance += amount;
        console.log(chalk.yellow(`Deposite ${amount} successful. New balance is $${this.balance}`));
    }
    // Check Balance
    checkBalance() {
        console.log(chalk.green(`Current Balnce: $${this.balance}`));
    }
}
class Customer {
    firstName;
    lastName;
    gender;
    age;
    contact;
    account;
    constructor(firstName, lastName, gender, age, contact, account) {
        (this.firstName = firstName),
            (this.lastName = lastName),
            (this.gender = gender),
            (this.age = age),
            (this.contact = contact),
            (this.account = account);
    }
}
// Create Bank Accounts
const accounts = [
    new BankAccount(123, 1000),
    new BankAccount(456, 2000),
    new BankAccount(789, 3000),
];
// Create customers
const customers = [
    new Customer("Areeba", "Quraishi", "female", 24, 313456789, accounts[0]),
    new Customer("Ayesha", "Quraishi", "female", 25, 323456741, accounts[1]),
    new Customer("Huzaifa", "Quraishi", "male", 20, 343456789, accounts[2]),
];
// Function to interact with bankAccount
async function service() {
    do {
        const usrInput = await inquirer.prompt({
            name: "accountNumber",
            type: "number",
            message: chalk.bgBlueBright("Enter your Bank Accoount Number."),
        });
        const customer = customers.find((customer) => customer.account.accountNumber === usrInput.accountNumber);
        if (customer) {
            console.log(chalk.magenta(`Welcome, ${customer.firstName} ${customer.lastName}!\n`));
            const ans = await inquirer.prompt({
                name: "Select",
                type: "list",
                message: chalk.bgGreen("Select an operation"),
                choices: ["Deposit", "Withdraw", "Check Balance", "Exit"],
            });
            switch (ans.Select) {
                case "Deposit":
                    const depositAmount = await inquirer.prompt({
                        name: "amount",
                        type: "number",
                        message: chalk.bgGray("Enter the amount to deposite:"),
                    });
                    customer.account.deposit(depositAmount.amount);
                    break;
                case "Withdraw":
                    const withdarwAmount = await inquirer.prompt({
                        name: "amount",
                        type: "number",
                        message: chalk.bgBlue("Enter the amount to withDraw:"),
                    });
                    customer.account.withdarw(withdarwAmount.amount);
                    break;
                case "Check Balance":
                    customer.account.checkBalance();
                    break;
                case "Exit":
                    console.log(chalk.red("Exiting Bank program..."));
                    console.log(chalk.bgCyanBright(`         Thank You for using our bank services.`));
                    return;
                default:
                    break;
            }
        }
        else {
            console.log(chalk.red("Invalid Account Number. Please try again"));
        }
    } while (true);
}
service();
