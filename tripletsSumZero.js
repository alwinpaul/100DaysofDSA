/**
 * PROBLEM STATEMENT 
 
Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

Example 1:

Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
Explanation: There are four unique triplets whose sum is equal to zero. smallest sum.'
Example 2:

Input: [-5, 2, -1, -2, 3]
Output: [[-5, 2, 3], [-2, -1, 3]]
Explanation: There are two unique triplets whose sum is equal to zero.

 */

const input = [-3, 0, 1, 2, -1, 1, -2];

function tripletSumZero(input) {
  let n = input.length;
  let output = new Set();
  //easy way - O(n^3)
  // for (let i = 0; i < n; i++) {
  //   for (let j = i + 1; j < n; j++) {
  //     for (let k = j + 1; k < n; k++) {
  //       if (input[i] + input[j] + input[k] === 0) {
  //         output.add([input[i], input[j], input[k]]);
  //       }
  //     }
  //   }
  // }

  // better way
  input = input.sort((a, b) => a - b);
  let i = 0;

  while (i < n) {
    let j = i + 1;
    let k = n - 1;

    while (j < k) {
      let sum = input[i] + input[j] + input[k];
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        output.add([input[i], input[j], input[k]]);
        j++;
        k--;
      }
    }
    i++;
  }
  return output;
}

console.log(tripletSumZero(input));
