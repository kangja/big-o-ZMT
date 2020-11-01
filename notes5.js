// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; //O(1) because this is only running once when we run funChallenge. It doesn't matter how big the input is. 
  a = 50 + 3; //O(1) 

  for (let i = 0; i < input.length; i++) { //O(n) becuase it just reflects how big the input is. That's how long this "for loops" is going to take. 
    anotherFunction(); //anotherFunction that we don't know what function it is, but it's calling to the function outside of the funChallenge function. This functino runs how many times? Well, it depends on how big our input is. It's also O(n). 
    let stranger = true; //another random assignment here. 
    a++;
  }
  return a;
}

console.log(funChallenge(100));
// 53
console.log(funChallenge(9999999));
// 53






// O(1)