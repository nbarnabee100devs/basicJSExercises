/* -  Exercise 1: Dogs */

class Dog {
  constructor(name, species, size) {
    this.name = name;
    this.species = species;
    this.size = size;
  }
  bark() {
    if (this.size > 60) return "Grr!  Grr!" 
    else return "Woof! Woof!";
  }
}

const fang = new Dog("Fang", "boarhound", 75);
const snowy = new Dog("Snowy", "terrier", 22);


/* - Exercise 2: Character inventory - */

class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = 0;
    this.gold = 10;
    this.keys = 1;
  }

  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(`${this.name} attacks ${target.name} and causes ${damage} damage points.`);
      target.health -= damage;
      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} healh points left.`);
      } else {
        target.health = 0;
        const bonusXP = 10;
        console.log(`${this.name} eliminated ${target.name} and wins ${bonusXP} XP, ${target.gold} gold and ${target.keys} keys.`);
        this.gold += target.gold;
        this.keys += target.keys;
        this.xp += bonusXP;
        target.gold = 0;
        target.keys = 0;
      }
    } else {
      console.log(`${this.name} has been eliminated and cannot attack.`);
    }
  }

  describe() {
    console.log(`${this.name} has ${this.health} health points, ${this.strength} strength, ${this.gold} gold pieces, ${this.keys} keys and ${this.xp} XP points.`);
  }
}

const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);
const monster = new Character("Spike", 40, 20);


/* -- Accounting -- */

class Account {
  constructor(name, balance) {
    this.name = name;
    this.balance = 0;
  }
  credit(amount) {
    this.balance += amount;
  }
  describe() {
    console.log(`Owner: ${this.name}, Balance: ${this.balance}`);
  }
}



const sean = new Account("Sean");
const brad = new Account("Brad");
const georges = new Account("Georges");

const accountList = [sean, brad, georges]

accountList.forEach(account => account.balance += 1000);
accountList.forEach(account => account.describe());


