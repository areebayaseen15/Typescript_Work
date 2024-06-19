#!usr/bin/env node
//        Project 10: object oriented programming Project
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
console.log(chalk.green(figlet.textSync("My OOP Project")));
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    console.log(chalk.magenta(`
          ************Welcome!!!!**********`));
    do {
        const ans = await inquirer.prompt({
            name: "Select",
            type: "list",
            message: chalk.cyanBright("Whom would you like to interact with?"),
            choices: ["Staff", "Students", "Exit"],
        });
        if (ans.Select == "Staff") {
            console.log(chalk.yellow("You appraoched the staff room.Please ask your question..."));
        }
        else if (ans.Select == "Students") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: chalk.bgMagenta("Enter the students name you want to engage with:"),
            });
            const student = persons.students.find((val) => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(chalk.yellow.bold.italic(`Hello, I am ${name.name}.Nice to meet you!`));
                console.log(chalk.bgGray("New student added"));
                console.log("Current student list");
                console.log(persons.students);
            }
            else {
                console.log(chalk.yellow.italic.bold(`Hello I am ${student.name}.Nice to see you again..`));
                console.log(chalk.bgGrey("Existing student list:"));
                console.log(persons.students);
            }
        }
        else if (ans.Select == "Exit") {
            console.log(chalk.red(`            Exiting the program....`));
            process.exit();
        }
    } while (true);
};
programStart(persons);
