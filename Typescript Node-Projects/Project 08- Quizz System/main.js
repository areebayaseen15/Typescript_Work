#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright(`******************************QUIZ SYSTEM****************************************`));
console.log(chalk.magenta(`*************************)Check YOUR ISLAMIC GERNAL KNOWLEDGE****************************************************`));
const quiz = await inquirer.prompt([
    {
        name: "question_01",
        type: "list",
        message: "Pillars of Islam are called:",
        choices: ["A:Arkan-e-Islam", "B:Qadr-ul-Islam", "C:Fi Amanillah"]
    },
    {
        name: "question_02",
        type: "list",
        message: "Muslims are Monotheists",
        choices: ["A:True", "B:False"]
    },
    {
        name: "question_03",
        type: "list",
        message: "What are the companions of the Prophet called?",
        choices: ["A:Sahabah", "B:Friends", "C:Ansar"]
    },
    {
        name: "question_04",
        type: "list",
        message: "What was Adam (AS) created from?",
        choices: ["A:Water", "B:Bones", "C:Clay"]
    },
    {
        name: "question_05",
        type: "list",
        message: "In which Islamic month did the Miraj take place?",
        choices: ["A:Muharram", "B:Rajab", "C:ZilHajj"]
    },
    {
        name: "question_06",
        type: "list",
        message: "How old was the Prophet ﷺ when he got married to Khadijah (RA)?",
        choices: ["A:20", "B:25", "C:30"]
    },
    {
        name: "question_07",
        type: "list",
        message: "What was the name of Khadija (RA)'s cousin who was a priest?",
        choices: ["A:Baheera", "B:Warqa", "C:Jahal"]
    },
    {
        name: "question_08",
        type: "list",
        message: "Who purchased and freed Bilal (RA)?",
        choices: ["A:Abu Bakr R.z", "B:Umer R.z", "C:Ali R.z"]
    },
    {
        name: "question_09",
        type: "list",
        message: "What is the title given to Umar (RA)?",
        choices: ["A:As Siddique", "B:Al Farooq", "C:Shere khuda"]
    },
    {
        name: "question_10",
        type: "list",
        message: "Which woman is mentioned by name in the Qur'an?",
        choices: ["A:Ayesha", "B:Khadija", "C:Maryam"]
    }
]);
let score = 0;
const answers = {
    question_01: "A:Arkan-e-Islam",
    question_02: "A:True",
    question_03: "A:Sahabah",
    question_04: "C:Clay",
    question_05: "B:Rajab",
    question_06: "B:25",
    question_07: "B:Warqa",
    question_08: "A:Abu Bakr R.z",
    question_09: "B:Al Farooq",
    question_10: "C:Maryam"
};
Object.keys(answers).forEach((key, index) => {
    if (quiz[key] === answers[key]) {
        console.log(chalk.green(`${index + 1}. Correct!`));
        ++score;
    }
    else {
        console.log(chalk.red(`${index + 1}. Incorrect!`));
    }
});
console.log(chalk.blue(`Your score is ${score}`));
console.log(chalk.yellow(`**************Thanks For Using My Quiz System***********8`));
