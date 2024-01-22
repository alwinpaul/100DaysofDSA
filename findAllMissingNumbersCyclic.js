/**
 * PROBLEM STATEMENT
We are given an unsorted array containing numbers taken from the range 1 to ‘n’. The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.

Example 1:

Input: [2, 3, 1, 8, 2, 3, 5, 1]
Output: 4, 6, 7
Explanation: The array should have all numbers from 1 to 8, due to duplicates 4, 6, and 7 are missing.
Example 2:

Input: [2, 4, 1, 2]
Output: 3
Example 3:

Input: [2, 3, 2, 1]
Output: 4
 */

const input = [2, 4, 1, 2];

function sortNUmberInPlace(input) {
  let i = 0;

  while (i < input.length) {
    let swap = input[i] - 1;
    if (i + 1 != input[i] && input[i] != input[swap]) {
      input[i] = input[swap];
      input[swap] = swap + 1;
    } else {
      i++;
    }
  }
}

function findMissingNumber(input) {
  sortNUmberInPlace(input);
  let result = [];
  input.forEach((num, index) => {
    if (num !== index + 1) {
      result.push(index + 1);
    }
  });
  return result;
}

console.log(findMissingNumber(input));
