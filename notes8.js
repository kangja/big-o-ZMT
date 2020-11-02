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

//After we put break, once we found "nemo", we're done! We're not going to loop through the rest of the items. We just made our code a little bit more efficient. 

// Big o only cares about the worse case. What is the worse case here? The worse case is that Nemo, instead of being the 4th item, is at the end. So even if we have this break statement, we're still going to run 10 times because Nemo is at the end. The best case is when "Nemo" is at the very beginning and we only have to loop through it once. But, worse case we're still going to have to go through 10 loops. Still Big O(N)! 

// This is our first rule. We always care about what is the worse case scenario because when we talk about scalability we can't just assume things are going well. Even though the function might be O(1) if "Nemo" is at the very first item in the array, it doesn't matter. In the grand scheme of things because we can't be certain of what the input is going to be, we're going to assume that it's BIG O is O(N), which is linear time. 

// Even though the function is indeed more efficient when "nemo" is placed in the beginning of the array, when we talk about Big O at the end of the day, it doesn't matter because we're talking about the worse case. 

