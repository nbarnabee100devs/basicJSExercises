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
  let defaultLocation = { x: 0, y: 0};

 Object.defineProperty(this, "defaultLocation", {
   get: function() {
     return defaultLocation
   },
   set: function(value) {
     if (!value.x || !value.y)
      throw new Error("Invalid location");
     defaultLocation = value;
    }
  })
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








/* Stopwatch project

needs the following: 

duration (which counts the time elapsed between start being called and stop being called)

reset (resets duration to 0)

start (which we can't call twice in a row, so need some sort of boolean to indicate that it's started throw new Error("Stopwatch has already started") 

stop (which will flip the boolean switch; it can only be called after start has been called, and otherwise returns the following error: throw new Error("Stopwatch is not started)"

start time -> startTime = new Date();
stop time -> endTime = new Date()

elapsed time = endTime - startTime (in milliseconds)

duration = Number.parseFloat((endTime - startTime) / 1000).toFixed(3); 


 Object.defineProperty(this, "defaultLocation", {
   get: function() {
     return defaultLocation
   },
   set: function(value) {
     if (!value.x || !value.y)
      throw new Error("Invalid location");
     defaultLocation = value;
    }
  })

*/

function Stopwatch() {
let isRunning;
let startTime;
let stopTime;

this.duration = () => (startTime && stopTime) ? Number.parseFloat((stopTime - startTime)/1000).toFixed(3) : 0;

 this.start = function() {
   if (isRunning) 
   throw new Error("Stopwatch has already started");
   else {
    startTime = new Date();
    isRunning = true;
    console.log("Stopwatch is running");
   }
 };

 this.stop = function() {
   if (!isRunning) 
   throw new Error("Stopwatch is not started");
   else {
    stopTime = new Date();
    isRunning = false;
    console.log("Stopwatch has stopped");
   }
 }; 

 this.reset = () => {
  startTime = 0; 
  stopTime = 0; 
  console.log("Stopwatch has been reset");
  };
}

const sw = new Stopwatch()

// This was my first attempt, which worked except that it didn't involve a getter function, which was what he wanted, and it reset the duration count after every run.


function Stopwatch2() {
  let isRunning, startTime, stopTime, duration = 0;
  
   this.start = function() {
     if (isRunning) 
     throw new Error("Stopwatch has already started");
     else {
      startTime = new Date();
      isRunning = true;
      console.log("Stopwatch is running");
     }
   };
  
   this.stop = function() {
     if (!isRunning) 
     throw new Error("Stopwatch is not started");
     else {
      stopTime = new Date();
      isRunning = false;
      console.log("Stopwatch has stopped");
      const seconds = (stopTime.getTime() - startTime.getTime())/1000;
      duration += seconds;
     }
   }; 
  
   this.reset = () => {
    startTime = 0; 
    stopTime = 0; 
    duration = 0;
    console.log("Stopwatch has been reset");
    };

    Object.defineProperty(this, "duration", {
      get: function() { 
        return duration;
      }});
  }

const sw2 = new Stopwatch2()

//This was my second attempt, which failed because -- as I later discovered -- I hadn't put a colon after get.  But I didn't spot that and went mad after a while.



function Stopwatch3() {

  let startTime, endTime, running, duration = 0;

  this.start = function() {
    if (running)
    throw new Error("The stopwatch is already running");
    running = true;
    startTime = new Date();
  };

this.stop = function() {
  if (!running)
    throw new Error("The stopwatch is not running");
  running = false;
  endTime = new Date();
  const seconds = (endTime.getTime() - startTime.getTime())/1000;
  duration += seconds;
};

  this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function() { return duration;}
  })
}

const sw3 = new Stopwatch3()

// This was just me copying Mosh's code directly to try and figure out why his worked and mine didn't.  Eventually I spotted my error.  Argh!