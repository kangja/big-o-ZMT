// const nemo = ["nemo"];
const performance = require('perf_hooks').performance;

// function findNemo(array) {
//   let t0 = performance.now();
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "nemo") {
//       console.log("Found NEMO!")
//     }
//   }
//   let t1 = performance.now();
//   console.log("Call to find nem took " + (t1 - t0) + " miliseconds");
// }

// findNemo(nemo);
// Found NEMO!
// Call to find nem took 8.910448014736176 miliseconds

//lets measure the performance of this function. Javascript has a tool that comes built-in to the browser. We will use this example to measure how long it takes for this functino to run. We can do this by doing time0 is going to equal performance that comes built in to the browser and we just say now. And t0(timer0) will start the timer before the loop happens. And when the loop ends, I'm going to have anther timer called t1 and this is going to equal performance.now. So we have two timers, one at the beginning and one at the end after the function goes through the loop to find Nemo. 

//At tne end, we can just do a console.log to find the time the time that the function took to find Nemo and do t1-t0. 
//because we are only looping through this once, it's taking miliseconds. 



//BUT what if we had a bigger array?
// const nemo = ["nemo"];
const everyone = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel", "squirt", "darla", "hank"];

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!")
    }
  }
  let t1 = performance.now();
  console.log("Call to find nem took " + (t1 - t0) + " miliseconds");
}

findNemo(everyone);
// Found NEMO!
// Call to find nem took 9.921467006206512 miliseconds

//we have a lot more characters now. When we run it, we see that the time is still the same. Sometimes a little bit more and the time changes all the time. We don't see that much of a difference between the first example and this example. 


