// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; //O(1)
  let b = 10; //O(1)
  let c = 50; //O(1)
  //it's all O(1) because we are assigning variables

  for (let i = 0; i < input; i++) { //we have a for loop that is running based on the input. We don't know what the input is, but we can just assume that we're looping based on however long this input is. In which case, we're running each one of these O(n) times. 
    let x = i + 1; //O(n)
    let y = i + 2; //O(n)
    let z = i + 3; //O(n)

  }
  for (let j = 0; j < input; j++) { //we can include this as O(n) as well if we would like. We don't know what the input is, but but there are being run O(n) times. 
    let p = j * 2; //O(n)
    let q = j * 2; //O(n)
  }
  let whoAmI = "I don't know"; //O(1)
} 

//Our BIG O is O(4 + 5n). We have 4 constant times and then 5 things that we are doing n times! Let's start to figure out how we can simplify things for us so that we're not doing this mathematical step by step count. 