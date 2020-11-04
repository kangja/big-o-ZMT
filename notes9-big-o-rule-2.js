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

  for (let i = 0; i < 100; i++) {
    console.log("hi");
  }
}