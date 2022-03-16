// Aurora

const aurora = {
  name: "Aurora",
  health: 150,
  strength: 25,
  xp: 0,
  describe() {
    return `${this.name} has ${this.health} hp, ${this.strength} strength, and ${this.xp} experience points.`;
  } 
};

console.log(aurora.describe());

aurora.health -= 20;
aurora.strength += 10;
aurora.xp += 15;

console.log(aurora.describe());


// Dog

const dog = {
  name: "Leo",
  species: "English Cocker Spaniel",
  size: 32,
  bark() {
    return "Wuff wuff!"
  }
}

console.log(`${dog.name} is an ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

let r;

const circle = {
  getRadius() {
    r = Number(prompt("Enter the circle radius:"));
  },
  circumference() { 
    return 2 * r * Math.PI; 
  },
  area() { 
    return r * r * Math.PI;
  },
  describe() {
    return `Its circumference is ${this.circumference} and its radius is ${this.radius}.`
  }
};

const account = {
  name: "Alex",
  balance: 0,
  credit(val) {
    this.balance += val;
    return this.balance;
  },
  describe() {
    return `Owner: ${this.name}, balance ${this.balance}`;
  }
};