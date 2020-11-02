// When calculating BIG O, we always think about the worst case.
//What do we mean about this? Let's go back to "finding nemo" example. 

const nemo = ["nemo"];
const everyone = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel", "squirt", "darla", "hank"];
const large = new Array(100000).fill("nemo");

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("running");
    if (array[i] === "nemo") {
      console.log("Found NEMO!")
    }
  }
}

findNemo(everyone)
// You might say, "hey, this might be not efficient" because if you look at the function, we're looping through the "everyone" array to find Nemo. With "everyone" array, there were only 10 different chracters from finding nemo and "Nemo" was the fourth member in the array. But the funny thing is the function ran 10 times NOT 4 times!. If I do a console.log here and say "running", we see that this function ran 10 times! We already found Nemo and all these other 6 runs were pretty wasteful! 


// running
// running
// running
// running
// Found NEMO!
// running
// running
// running
// running
// running
// running


//We can make this function a little bit more efficient in Javascript. We can just have something called break! We are exiting out of a loop if our condition is met! In our case, if we find "nemo", just break out of this loop. 
const nemo = ["nemo"];
const everyone = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel", "squirt", "darla", "hank"];
const large = new Array(100000).fill("nemo");

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("running");
    if (array[i] === "nemo") {
      console.log("Found NEMO!")
      break;
    }
  }
}

findNemo(everyone)

// running
// running
// running
// running
// Found NEMO!

// 