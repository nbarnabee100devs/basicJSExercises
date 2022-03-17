const aurora = {
  name: "Aurora",
  health: 150,
  strength: 50,
  xp: 0,
  describe() {
    console.log(`${this.name} has ${this.health} hp, ${this.strength} strength, and ${this.xp} experience.`);
  },
  battlecry(m) {
    alert(m);
  }
}

const dog = {
  name: "Leo",
  breed: "English Cocker Spaniel",
  size: 32,
  bark() {
    return "Wuff!  Wuff!"
  },
  introduction() {
    console.log(`My ${this.breed}, ${this.name}, is ${this.size} cm at the shoulder.`);
  },
  catAlarm() {
    console.log(`Look, a cat!  ${this.name} barks: ${this.bark()}`);
  }
}

let r;

const circle = {
  radius() {
    r = Number(prompt("Enter the circle radius."));
  },
  area() {
    if (!r) 
      this.area(this.radius());
    else console.log(r * r * Math.PI);
  },
  circumference() {
    return 2 * Math.PI * r;
  }
}


const account = {
  name: "Alex",
  balance: 0,
  credit(amount) {
    this.balance += amount;
  },
  describe() {
    console.log(`Owner: ${this.name}, Balance ${this.balance}`);
  }
}