#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green.bold.italic(`
                WELCOME TO MY CLI-SIMPLE-CALCULATOR
`));
const answer = await inquirer.prompt([
    { message: chalk.yellowBright("Enter first number"),
        type: "number",
        name: "firstNumber"
    },
    { message: chalk.yellow("Enter second number"),
        type: "number",
        name: "secondNumber" },
    {
        message: chalk.bgGray("Select any one of the operators to perform action"),
        type: "list",
        name: "operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exit"],
    },
]);
if (answer.operators === "Addition") {
    console.log(chalk.cyanBright(answer.firstNumber + answer.secondNumber));
}
else if (answer.operators === "Subtraction") {
    console.log(chalk.yellow(answer.firstNumber - answer.secondNumber));
}
else if (answer.operators === "Multiplication") {
    console.log(chalk.blue(answer.firstNumber * answer.secondNumber));
}
else if (answer.operators === "Division") {
    console.log(chalk.magenta(answer.firstNumber / answer.secondNumber));
}
else if (answer.operator === "Exit") {
    console.log(chalk.green(`        Exiting..... `));
}
else
    console.log(chalk.red("please select a valid operator"));
