/**
 * 
 * PROBLEM STATEMENT
  
Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

Example 1:

Input: [-1, 0, 2, 3], target=3 
Output: 2
Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]
Example 2:

Input: [-1, 4, 2, 1, 3], target=5 
Output: 4
Explanation: There are four triplets whose sum is less than the target: 
[-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]

 */

const input = [-1, 0, 2, 3];
const target = 3;

function tripletsWithSmallerSum(input, target) {
  const n = input.length;
  input.sort((a, b) => a - b);

  let output = 0;

  for (let i = 0; i < n; i++) {
    let j = i + 1;
    let k = n - 1;

    while (j < k) {
      let sum = input[i] + input[j] + input[k];

      if (sum < target) {
        output += k - j;
        j++;
      } else {
        k--;
      }
    }
  }
  return output;
}

console.log(tripletsWithSmallerSum(input, target));
