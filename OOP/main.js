// Object literal notation.  Everything entered by hand.
// But the object is actually being created by the global Object() constructor function....

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw() {
    console.log("draw");
  }
};


// A factory function
// Returns an object with the given arguments returned as property values, and the function auto-generated

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    }
  } 
};

const factoryCircle = createCircle(2);


// A constructor function
// Uses "this" + dot notation to reference the object that will be created, and passes the arguments as property values

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  }
}

const anotherCircle = new Circle(3);

// Using the "new" operator in this context creates an empty object, points the "this" keyword to it, and returns the new object with its properties and methods.  (This is why we don't need a "return" statement, as we did with the factory function.  It is implicit in constructor functions.)

let number = 10;

function increase(number) {
  number++;
  return number;
}

let obj = {value: 10}
function increaseObj(obj) {
  obj.value++;
  return obj.value;
}

increaseObj(obj) //11
console.log