//BIG O

//The official term is Big O asymtomatic analysis.

//Any coder when given enough time can solve a problem. But, what matter is how well the problem is solved and this is where Big-O can help us. It can tell us how well a problem is solved. 

//We use Big O and its different notation to distinguish the bad code from good code and good code from great code. 

//What is a good code?
//There are two main things we talk about when we say this is good code.
//1. Readable: is your code generally clean? Can others understand your code?
//2. Scalable: big-o notation is what allows us to measure this idea of scalable. Code that can scale.  
 
//There are efficient and inefficient ways to give instructions. 

const nemo = ["nemo"];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!")
    }
  }
}

// findNemo(nemo);
// Found NEMO!
