#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";

console.log(chalk.yellow.italic.bold(`

********************************************************************************************************

                   Welcome to your digital currency convertor or exchanger!!

******************************************************************************************************`));
console.log(chalk.bgGrey.bgBlack(`This tool allows you to convert between different coins`));

const digitalCurrency: any = {
  USDT: 1, //BASE CURRENCY
  ETH: 0.0003,
  BNB: 0.0017,
  BTC: 0.000015,
  SOL: 0.0058,
  DOGE: 5.45,
};

let user_answer = await inquirer.prompt([
  {
    name: "from",
    message: (chalk.bold.magentaBright("Select the coin you want to covert from")),
    type: "list",
    choices:["USDT", "ETH", "BNB", "BTC", "SOL", "DOGE"],
  },
  {
    name: "to",
    message: chalk.bold.magentaBright("Select the coin you want to converted to"),
    type: "list",
    choices:["USDT", "ETH", "BNB", "BTC", "SOL", "DOGE"],
  },
  {
    name: "amount",
    message: chalk.bold.blue.italic("Enter your amount of coin"),
    type: "number",
  },
]);

let fromAmount = digitalCurrency[user_answer.from]; //exchange rate
let toAmount = digitalCurrency[user_answer.to]; //exchange rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // usd base currency
let convertedAmount = baseAmount * toAmount;
console.log(` ${convertedAmount}  \n Amount converted successfully!!!\n`);
console.log(chalk.yellow.italic.bold(`

*****************************************************************************************************
                     Thanks for using Crypto currency exchanger!!!

******************************************************************************************************
     
`));

