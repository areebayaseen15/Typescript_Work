#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.red(`***************Student Management System Project In Typescript**************`));
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: chalk.blueBright("Enter Student name:"),
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return chalk.blue("Please return a non-empty value.");
        },
    },
    {
        name: "Courses",
        type: "list",
        message: chalk.green("Select the course to enroll."),
        choices: ["Ms.Office", "HTML", "Javascript", "Typescript", "Python"],
    },
]);
const tutionFee = {
    "Ms.Office": 1800,
    HTML: 2000,
    Javascript: 5000,
    Typescript: 7000,
    Python: 10000,
};
console.log(chalk.greenBright(`\nTution Fee: ${tutionFee[answer.Courses]}`));
console.log(chalk.greenBright(`Balance: ${myBalance}\n`));
let paymentMethod = await inquirer.prompt([
    {
        name: "Payment",
        type: "list",
        message: chalk.blueBright("Selent PaymentMethod."),
        choices: ["Bank Transfer", "easypaisa", "JazzCash"],
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non empty value.";
        },
    },
]);
console.log(chalk.magenta(`\nYou selected payment method ${paymentMethod.Payment}\n`));
const tutionFees = tutionFee[answer.Courses];
const paymentAmount = parseFloat(paymentMethod.amount); //for converting user input from string to number we ll usearseFloat
if (tutionFees === paymentAmount) {
    console.log(chalk.yellow(`Congratulation, You have successfully enrolled in ${answer.Courses}`));
    let ans = await inquirer.prompt([
        {
            name: "Select",
            type: "list",
            Message: "Select Anyone.",
            choices: ["View status", "Exit"]
        }
    ]);
    if (ans.Select === "View status") {
        console.log(chalk.cyanBright("\n******Status******\n"));
        console.log(chalk.yellowBright(`Student Name: ${answer.student}`));
        console.log(chalk.yellowBright(`Student Id: ${randomNumber}`));
        console.log(chalk.yellowBright(`Course: ${answer.Courses}`));
        console.log(chalk.yellowBright(`Tution Fee Paid: ${paymentAmount}`));
        console.log(chalk.yellowBright(`Balance: ${(myBalance += paymentAmount)}`));
    }
    else {
        console.log(chalk.red("\nExiting Student Managent System\n"));
    }
}
else {
    console.log(chalk.red(`\nInvalid amount due to course\n`));
}
console.log(`..........................................................................................`);
