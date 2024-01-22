/**
 * PROBLEM STATEMENT
We are given an array containing n distinct numbers taken from the range 0 to n. Since the array has only n numbers out of the total n+1 numbers, find the missing number.

Example 1:

Input: [4, 0, 3, 1]
Output: 2
Example 2:

Input: [8, 3, 5, 2, 4, 6, 0, 1]
Output: 7
 */

const input = [4, 0, 3, 1]; //[0431] [0413] [0143]

function sortNUmberInPlace(input) {
  let i = 0;

  while (i < input.length) {
    if (i != input[i] && input[i] < input.length) {
      let swap = input[i];
      input[i] = input[swap];
      input[swap] = swap;
    } else {
      i++;
    }
  }
}

function findMissingNumber(input) {
  sortNUmberInPlace(input);

  for (let i = 0; i < input.length; i++) {
    if (i != input[i]) {
      return i;
    }
  }
}

console.log(findMissingNumber(input));
