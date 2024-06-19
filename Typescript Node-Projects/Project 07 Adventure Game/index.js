#!/usr/bin/env node
// Adventure Game:-
import * as readline from "readline";
import chalk from "chalk";
console.log(chalk.magentaBright.bold(`***********************WELCOME TO "THE WILD DRAGONAPPEARS" ADVENTURE GAME**************************`));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Define a class representing a player
class Player {
    name;
    health;
    energy;
    constructor(name) {
        this.name = name;
        this.health = 100; //initial health
        this.energy = 100; //initial energy
    }
    // Method to get Player's Name
    getName() {
        return this.name;
    }
    // Method to get Player's health
    getHealth() {
        return this.health;
    }
    //   Method to get Player's energy
    getEnergy() {
        return this.energy;
    }
    // Method to decrease Player's health
    decreaseHealth(amount) {
        this.health -= amount;
        if (this.health <= 0) {
            console.log(chalk.bgGreenBright(`${this.name} has been defeated! Game Over...`));
            rl.close();
        }
        else {
            console.log(`${this.name} has ${this.health} health remaining.`);
        }
    }
    // Method to decrease Player's Energy
    decreaseEnergy(amount) {
        this.energy -= amount;
        if (this.health <= 0) {
            console.log(`${this.name} has run out of the energy! Game Over...`);
            rl.close();
        }
        else {
            console.log(`${this.name} has ${this.health} health remaining.`);
        }
    }
}
// Define a class representing a Monster
class Monster {
    name;
    health;
    constructor(name) {
        this.name = name;
        this.health = 50;
    }
    //  Method to get Monster's Name
    getName() {
        return this.name;
    }
    // Method to get Monster's health
    getHealth() {
        return this.health;
    }
    // Method representing the Monster's Attack
    attack(player) {
        const damage = Math.floor(Math.random() * 10) + 1;
        console.log(`${this.name} attacks ${player.getName()} for damage.`);
        player.decreaseHealth(damage);
    }
}
// Create instant of payer and Monster
const player = new Player("Hero");
const monster = new Monster("Dragon");
// Stimulate a battle
console.log(chalk.red(`              ******************A wild ${monster.getName()}appears!**************`));
function battle() {
    rl.question(chalk.bgCyanBright("Press enter to attack: "), () => {
        const playerAttack = Math.floor(Math.random() * 20) + 1; //Random attack between 1 and 20
        const energyConsumption = Math.floor(Math.random() * 10) + 1; //Random energy consumption between 1 and 20
        player.decreaseEnergy(energyConsumption);
        console.log(`${player.getName()} attacks ${monster.getName()} for ${playerAttack} damage.`);
        monster.attack(player);
        if (player.getHealth() > 0 && player.getEnergy() > 0) {
            console.log(chalk.cyanBright(`===================`));
            console.log(chalk.bgYellowBright(`Next Round:`));
            console.log(chalk.yellow(`Player's Health: ${player.getHealth()}`));
            console.log(chalk.redBright(`Monster's Health: ${monster.getHealth()}`));
            console.log(chalk.cyanBright(`======================`));
            battle();
        }
        else {
            rl.close();
        }
    });
}
battle();
