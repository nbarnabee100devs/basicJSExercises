// Async/Await

console.log("sync 1");

setTimeout(_ => console.log("Timeout 2"), 0);

Promise.resolve().then(_ => console.log("promise"));

console.log("sync 2");

// synch 1 will be executed first
// Timeout and promise queued, but the promise will fire first because microtasks take precedence
// sync 2 is executed on the second loop, promise follows after, and then timeout

const promise = fetch(`https://www.dnd5eapi.co/api/spells/acid-arrow`)

promise
  .then(res => res.json())
  .then(data => console.log(data.name));


console.log("sync 3");

// now this is interesting: when I run it, all three of the synchs appear, then the first promise, then the timeout, and then the second promise

setTimeout(_ => console.log("TImeout 3"), 0);

// timeout 3 also appears before the promise is resolved; I guess it's just taking a long time to return the data