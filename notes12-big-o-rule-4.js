function printAllNumbersThenAllParisSums(numbers) {

  console.log("these are the numbers:");
  numbers.forEach(function (number) {
    console.log(number);
  });

  console.log("and these are their sums:");
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    })
  })
}

printAllNumbersThenAllParisSums([1, 2, 3, 4, 5]);
// these are the numbers:
// 1
// 2
// 3
// 4
// 5
// and these are their sums:
// 2
// 3
// 4
// 5
// 6
// 3
// 4
// 5
// 6
// 7
// 4
// 5
// 6
// 7
// 8
// 5
// 6
// 7
// 8
// 9
// 6
// 7
// 8
// 9
// 10

// Big O is O(n + n^2). But Rule number 4 states that we want to drop the non-dominant terms. We just drop n and it's just O(n^2). 

// If the Big O were to be O(x^2 + 3x + 100 + x/2), it just becomes O(x^2). 
