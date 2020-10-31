//What happens if we have a function like this?

function comporessFirstBox(boxes) {
  console.log(boxes[0]);
}
//it's logging out just the first item in the box. 
//How many steps or operations does this function take if the boxes increase from 0 to maybe 10 to maybe 100,000?

//This is what we call constant time. 
// O(1) - Constant Time. 
// It's O(1). No matter how many times the boxes increase or how many boxes we have, we're always just grabbing the first item in the array. 

