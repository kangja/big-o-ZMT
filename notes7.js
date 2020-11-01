//It was kinda annoying where we had to add things up and have this 5+n etc. In interviews, you're never going to do this. But, now at least we understand how Big O gets calculated. When you go into interviews, there's the set of rules that you're going to follow. You don't have to go through all the steps and you can just take a look at functions and immediately say what type of BIG O it is.

// FOR INSTANCE
function anotherFunChallenge(input) {
  let a = 5; 
  let b = 10;
  let c = 50; 

  for (let i = 0; i < input; i++) { 
    let x = i + 1; 
    let y = i + 2;
    let z = i + 3; 

  }
  for (let j = 0; j < input; j++) { 
    let p = j * 2; 
    let q = j * 2; 
  }
  let whoAmI = "I don't know";
} 

// this function actually just turns into O(n) from O(4 + 5n). 

// ANOTHER EXAMPLE
function funChallenge(input) {
  let a = 10;
  a = 50 + 3;

  for (let i = 0; i < input.length; i++) {
    anotherFunction();
    let stranger = true;
    a++;
  }
  return a;
}
//THIS FUNCTION turns into O(n) from O(3 + 4n). This is a trick. In fact, when we talk about BIG-O, in interviews, most of the time, you're only going to give one of these answers on the graph. You're most likely never going to actually calculate preciesely O(3n+5) etc. 

// How did we know to simplify our examples? Luckily, there are just several rules that we can follow when it comes to Big O. By 

// And there's only FOUR of them. By following these 4 rules, instead of doing those small little calculations we've been doing up until this moment, we can just simplify our life so that Big O becomes really easy to calculate. 
// RULE BOOK 
// RULE 1: Worse case 
  // Rule 2: Remove Constants
    // Rule 3: Different terms for inputs
      // RULE 4: Drop Non Dominants. 
  