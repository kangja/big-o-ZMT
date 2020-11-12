// log all pairs of array
const boxes = ["a", "b", "c", "d", "e"];

function logAllParisOfArray(array) {
  for (let i = 0; i < array.length; i++) {  
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j])
    }
  }
}

logAllParisOfArray(boxes);
// a a
// a b
// a c
// a d
// a e
// b a
// b b
// b c
// b d
// b e
// c a
// c b
// c c
// c d
// c e
// d a
// d b
// d c
// d d
// d e
// e a
// e b
// e c
// e d
// e e

// Big O is O(n * n). O(n^2)/ 