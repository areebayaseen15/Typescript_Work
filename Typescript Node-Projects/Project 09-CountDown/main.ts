#!/usr/bin/env node
//               PROJECT 09: COUNTDOWN TIMER

import inquirer from "inquirer";
import {differenceInSeconds} from "date-fns";
import chalk from "chalk";

console.log(chalk.redBright.italic.bold(`
    ************************CountDown Timer***********************
    `));

const usrInput = await inquirer.prompt({
    name : "userresponse",
    type : "number",
    message :chalk.bgCyan("please enter the amount of seconds"),
    validate : (input)=>{
        if(isNaN(input)){
            return "Please enter a valid number"
        }else if (input > 60) {
               return "seconds must be in 60"
        }else{
            return true
        }
    }
});
let response = usrInput.userresponse

function startTimer (value : number){
    const inialTime = new Date().setSeconds(new Date().getSeconds() + value);
    const intervalTime = new Date(inialTime);
 setInterval((()=>{
    const currentTime = new Date()
    const timeDiff = differenceInSeconds(intervalTime , currentTime);
    if(timeDiff <= 0){
        console.log(chalk.bold.green("Timer has expired"));
        process.exit()
    }
    const min = Math.floor((timeDiff%(3600*24))/3600)
    const sec = Math.floor(timeDiff%60)
    console.log(chalk.yellow(`${min.toString().padStart(2,"0")}: ${sec.toString().padStart(2,"0")}`));
    
 }),1000)
}
startTimer(response)
