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
    if (array[i] === "nemo") { //array[i] equals array[1], which equals array[0] because it's 0<array.length. (array.length=1). 
    //if array[0] == "nemo".
      console.log("Found NEMO!")
    }
  }
}

// findNemo(nemo);
// Found NEMO!

//this is our instruction we're giving our computer to find Nemo.
//runtime = how long it takes to fun a certain problem through a function or a task.  
//how can we measure the big o or the efficiency of this code?
//big o allows use to measure scalability.

