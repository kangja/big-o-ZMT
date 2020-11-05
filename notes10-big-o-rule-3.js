// Rule #3: Different terms for inputs

// Here's an example
//We're using forEach syntax in Javascript, but it means the same as using 2 for loops over the same array. 
function compressBoxesTwice(boxes) {
  boxes.forEach(function(boxes) {
    console.log(boxes);
  });

  boxes.forEach(function(boxes) {
    console.log(boxes)
  });
}
//Big O is O(2n), but it becomes O(n) because we drop the constants.


// WHAT IF we had boxes as the first parameter and then we have boxes2 as a second parameter?
function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach(function(boxes) {
    console.log(boxes);
  });

  boxes2.forEach(function(boxes) { //and the second for loop loops over boxes2.
    console.log(boxes)
  });
}
// what is the Big O?
// Many people mess this up during the interview and say that this function's Big O is O(n) after dropping the constants on O(2n). Is this right?
// No because the third rule states that different terms for inputs and remember the boxes, the first one, and then the second one(boxes2) are 2 different inputs. The first one could be a hundred items long and the second one can just 1 item. 

//Therefore, the first for loop is going to depend on how big the first item or first input and the second for loop depends on how big the second input(boxes2) is. 

//n is just an arbitrary letter that we decided on. Therefore, in this case, the Big O would be something like O(a) for the first for loop, which is the first input, + b so in the end, it would be O(a + b) or O(n+m) or O(boxes1 + boxes2). 

// Keep in mind that just because you see 2 for loops one after another doesn't mean that they're looping over the same items. 

// What if the loops are nested? So far we've only worked with loops that are one after another. 