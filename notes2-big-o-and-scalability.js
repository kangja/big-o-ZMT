const nemo = ["nemo"];
const performance = require('perf_hooks').performance;

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

// findNemo(nemo);
// Found NEMO!
// Call to find nem took 8.910448014736176 miliseconds

//lets measure the performance of this function. Javascript has a tool that comes built-in to the browser. We will use this example to measure how long it takes for this function to run. We can do this by doing time0 is going to equal performance that comes built in to the browser and we just say now. And t0(timer0) will start the timer before the loop happens. And when the loop ends, I'm going to have anther timer called t1 and this is going to equal performance.now. So we have two timers, one at the beginning and one at the end after the function goes through the loop to find Nemo. 

//At the end, we can just do a console.log to find the time the time that the function took to find Nemo and do t1-t0. 
//because we are only looping through this once, it's taking miliseconds. 



//BUT what if we had a bigger array?
const nemo = ["nemo"];
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

// findNemo(everyone);
// Found NEMO!
// Call to find nem took 9.921467006206512 miliseconds

//we have a lot more characters now. When we run it, we see that the time is still the same. Sometimes a little bit more and the time changes all the time. We don't see that much of a difference between the first example and this example. 
//We went from one loop to now 10 loops, but it's till super super fast. The difference between one loop and 10 loops is not that big. 



//LET'S DO A FUN LITTLE TRICK HERE IN JAVASCRIPT. 
const nemo = ["nemo"];
const everyone = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel", "squirt", "darla", "hank"];
const large = new Array(100).fill("nemo");
// console.log(large)
// [
//   'nemo', 'nemo', 'nemo', 'nemo', 'nemo', 'nemo', 'nemo',
//   'nemo', 'nemo', 'nemo', 'nemo', 'nemo', 'nemo', 'nemo',
//   'nemo', 'nemo', 'nemo', 'nemo', 'nemo', 'nemo', 'nemo',
//   'nemo', 'nemo', 'nemo', 'nemo', 'nemo', 'nemo', 'nemo',
//   'nemo', 'nemo', 'nemo', 'nemo', 'nemo', 'nemo', 'nemo',
//   'nemo', 'nemo', 'nemo', 'nemo', 'nemo', 'nemo', 'nemo',
//   'nemo', 'nemo', 'nemo', 'nemo', 'nemo', 'nemo', 'nemo',
//   'nemo', 'nemo', 'nemo', 'nemo', 'nemo', 'nemo', 'nemo',
//   'nemo', 'nemo', 'nemo', 'nemo', 'nemo', 'nemo', 'nemo',
//   'nemo', 'nemo', 'nemo', 'nemo', 'nemo', 'nemo', 'nemo',
//   'nemo', 'nemo', 'nemo', 'nemo', 'nemo', 'nemo', 'nemo',
//   'nemo', 'nemo', 'nemo', 'nemo', 'nemo', 'nemo', 'nemo',
//   'nemo', 'nemo', 'nemo', 'nemo', 'nemo', 'nemo', 'nemo',
//   'nemo', 'nemo', 'nemo', 'nemo', 'nemo', 'nemo', 'nemo',
//   'nemo', 'nemo'
// ]
//we can create a large array and we can create a meassive array by just saying new Array. And we will give it a hundred items and this hundred items in the array, we will fill it with "nemo" a hundred times. This will create an array that has Nemo a hundred times. 

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

// findNemo(large);
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Found NEMO!
// Call to find nem took 10.363197982311249 miliseconds

//it has found Nemo a hundred times because we just filled it with Nemo and it took miliseconds. 


const large = new Array(1000).fill("nemo");

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

// findNemo(large);
// Call to find nem took 101.40273702144623 miliseconds
//let's do a thousand. It took longer than before.




//What if we do something BIGGER?
//what if we had a massive array of 10,000. 
const large = new Array(10000).fill("nemo");

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

// findNemo(large);
// Call to find nem took 451.6171290278435 miliseconds. It's pretty fast. 


// Let's do One last one for fun!
const large = new Array(100000).fill("nemo");

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

// findNemo(large);
// Call to find nem took 2246.377018034458 miliseconds
//you saw that delay and how long that took. 



//What did we just see here?
//we see that as our input grew, our function find Nemo became slower, slower, and slower. Our runtime how long it takes to run a certain problem through a function increased.
//here's a problem. if you take this code and run it on your computer, your time will be different than mine. You are going to get frustrated because every time you're on this code, we get different time results. It might be a lot faster or a lot slower. The speed depends on how powerful the CPU in the computer is; what other programs are running on your computer, what programming languages you are using, and many other factors. So there is all these factors who play here in our run time. 

//How can we determine who has a better code?
//this is very common in the computing world. We code on our laptops/computers, but that code doesn't necessarily run on those devices. If we have something like a server, we may have that code run somewhere else on a different computer around the world. So how can we make sure that there is a way for us to measure in terms of efficiency what is a good code and what is bad code. And what is a code that can scale that as the number of arrays or inputs increases, it doesn't constantly slow down more and more.

//Big o notation is the language we use for talking about how long an algorithm takes to run. 

//we can compare two different algorithms or in this case, functions. Using Big O, which one is better than the other when it comes to scale regardless of our computer differences. 

//And we can measure big o like the image(refer to the image). 

//when we talk about big o and scalability of code, we simply mean when we grow bigger and bigger with our input, how much does the algorithm or function slow down? The graph is saying that as more elements(example: arrays, characters, strings) increase, how many more operations do we have to do? That's all it is

//This is what we call algorithmic efficiency. Big-O allows us to explain this concept.
//Remember how in our function, we initially had an array of just one, which was "nemo" so that is the number of elements(inputs) in a function. But then as we increase that array to have more characters and then we created that massive array of 100,000 nemos, so as that increases you saw that the number of operations or the number of things we DO in the loop increased over and over. And different functions have different big-o complexities. That is these number of operations can increase really really fast like O(n!), which is not good. It's horrible. Things that are quite good actually don't increase as much. 

//Again, when we talk about Big O and scalability of code, we simply mean when we grow bigger and bigger with our input, how much does the algorithm slow down. The less it slows down or the slower it slows down, the better it is. 

//Therefore, instead of using performance.now and using time to measure the efficiency of our function, we could just calculate how many operations a computer has to perform because each operation takes time on a computer. So Big O allows us and concerns us with how many steps it takes in a function. 


