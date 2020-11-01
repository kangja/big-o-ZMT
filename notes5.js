// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; //O(1) because this is only running once when we run funChallenge. It doesn't matter how big the input is. 
  a = 50 + 3; //O(1) 

  for (let i = 0; i < input.length; i++) { //O(n) becuase it just reflects how big the input is. That's how long this "for loops" is going to take. 
    anotherFunction(); //anotherFunction that we don't know what function it is, but it's calling to the function outside of the funChallenge function. This functino runs how many times? Well, it depends on how big our input is. It's also O(n). 
    let stranger = true; //another random assignment here. But, this runs as many times as this loop happens. If input was 5, it would run 5 times. Again, this would be O(n). 
    a++; //we're just incrementing the whatever the number is at the time. So 53 will become 54 and then as we loop through, it will keep increasing by 1. 54...55...56...etc. This will again run O(n) times. 
  }
  return a; //this run just once. Everytime funhallenge function is run, the return statement only runs once. O(1).

  // Now we are starting to think about how a function runs and how efficient a function is. If we total everything up we see, we have 3steps(O(1) + O(1) + O(1) ) + n + n + n + n. ====> Our 3 + 4n. 

  //Our Big O notation is 3 + 4n. When it comes to BIG O, don't get hung up on did I get this right? At the end, this function will be simplified into O(n)! 
}

console.log(funChallenge(100));
// 53
console.log(funChallenge(9999999));
// 53
