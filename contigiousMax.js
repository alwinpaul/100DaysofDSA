/**
 * PROBLEM STATEMENT
 * 
Given an array of positive numbers and a positive number 'k,' find the maximum sum of any contiguous subarray of size 'k'.

Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
Example 2:

Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].
 */

const arr = [2, 1, 5, 1, 3, 2];
const k = 3;

function contigiousMax(arr, k) {
  const n = arr.length;
  let sum = 0;
  let start = 0;
  let max = 0;

  for (let end = 0; end < n; end++) {
    sum += arr[end];
    if (end >= k - 1) {
      max = Math.max(max, sum);
      sum -= arr[start];
      start++;
    }
  }

  return max;
}

console.log(contigiousMax(arr, k));
