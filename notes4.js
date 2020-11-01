//What happens if we have a function like this?

function comporessFirstBox(boxes) {
  console.log(boxes[0]);
}
//it's logging out just the first item in the box. 
//How many steps or operations does this function take if the boxes increase from 0 to maybe 10 to maybe 100,000?

//This is what we call constant time. 
// O(1) - Constant Time. 
// It's O(1). No matter how many times the boxes increase or how many boxes we have, we're always just grabbing the first item in the array. The number of operations is one no matter how big the number of boxes are. We are only doing one thing. So it's a constant time. 

//If we look at this on a graph, if we have one element or one box, we do one operation. It's not linear time it was where it increases with the number of operations. With this functino, the number of operations just stays flat. 


//NEXT EXAMPLE
//if we have the function below, what is the BIG O notation of the function?
const boxes = [0,1,2,3,4,5]
function logFirstTwoBxes(boxes) {
  console.log(boxes[0]); //O(1). We have one operation here. 
  console.log(boxes[1]); //O(1) again. 
}

// logFirstTwoBxes(boxes)
// 0
// 1

//Each time this function runs, two operations. So this function in total is actually running O(2) operation every time. No matter how big the boxes get, the number of operations here is going to be 2!. When it comes to constant time, we don't care if it's O(1), O(2), O(3), or even O(100). We round this down to simply saying O(1). That is we have constant time. 