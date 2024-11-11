function countPositivesSumNegatives(input) {
  //Start coding here
  if (input == null || input.length === 0) {
    return [];
  }

  let positiveNum = 0;
  let sumOfNegativeNum = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      positiveNum += 1;
    } else if (input[i] < 0) {
      sumOfNegativeNum += input[i];
    }
  }

  return [positiveNum, sumOfNegativeNum];
}

let result1 = countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);
console.log(result1); // [10, -65]

let result2 = countPositivesSumNegatives("");
console.log(result2); // []
