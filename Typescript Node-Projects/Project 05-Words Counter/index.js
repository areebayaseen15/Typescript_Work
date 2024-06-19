#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.blue(`
***************************************************************************************************
                             WELCOME TO THE WORDS COUNTER APP
**************************************************************************************************;`));
//Declear a constant "answers" and assign it to the result of inquirer.promp function
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.redBright.italic("Enter your sentences to count the word:")
    }
]);
const words = answers.sentence.trim().split(" ");
// print the array to the console
console.log(words);
// print the word count of the sentences to the consoe
console.log(chalk.bold.italic.yellowBright `Your sentence words count is ${words.length}`);
