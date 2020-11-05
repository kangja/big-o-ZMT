// RULE NUMBER 2
// Remove constants

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]); //O(1) because we are logging the first iem. 

  let middleIndex = Math.floor(items.length / 2); //we have half of whatever the items is. In this case, it will be O(n/2). Because even though we have a loop or a while loop, we're only logging half the items every time. 

  let index = 0; 

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (let i = 0; i < 100; i++) { //We're not looping over the "items" array. We just have 100 no matter how big the items array is. We are logging "hi" 100 times. This is always going to be 100. This is O(100). 
    console.log("hi");
  }
}


//BIG O of this function is O(1 + n/2 + 100). But, rule number 2 states that we DROP the constants. We are simply saying that we don't really care that this BIG O is O(n/2 + 101). In the interview, we only care about the things that we saw on the chart. Nothing specific like this. Therefore O(101) turns into O(1).

// O(n / 2), although it's divided by half, in the grand scheme of things, we only are about when it scales, when the inputs are getting larger and larger. As n gets bigger and bigger, we don't care about adding an extra 100 because if n is a million, adding an extra 100 steps doesn't really matter. And same with dividng by 2. As n gets larger and larger, dividing 2 has a decreasingly significant affect. So we drop the constants like this so this becomes O(n + 1). 

// Because 1 from O(n+1) is insignificant if n was a million, we can just drop it as well. This function just becomes O(n).  

// What if we had another function that had O(a + 50) or O(a + 50000000000)? It doesn't really matter. We drop the constants. It's gonna be O(a). 



// Here's another situation!
// This function has 2 for loops. 
function compressBoxesTwice(boxes) {
  boxes.forEach(function(boxes) {
    console.log(boxes); //O(n)
  });

  boxes.forEach(function(boxes) {
    console.log(boxes) //O(n)
  });
}

//When we add these two steps, we get O(2n). Again, in an interview, this doesn't really matter because we DROP the ocnstants. If we drop the constant, it just becomes O(n). If we look at the function on the graph, we see that as the elements increase, we have two operations because we have 2 for loops. If we have 2 elements, we have 4 operations. If we have 3 elements, we have 6 operations. The way the line increases is linear and it's the key here. With the Big O, we don't really care about how steep the line is. We care about HOW the line moves as our inputs increase.  

// DROP the constants and you'll never going to see numbers in Big O notation. In fact, the only time you'll see numbers is when it's O(1), O(n^2), or O(2^n). 