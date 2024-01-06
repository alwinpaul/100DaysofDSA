/**
 * 
 * PROBLEM STATEMENT 
 Given an array of sorted numbers, move all non-duplicate number instances at the beginning of the array in-place. The relative order of the elements should be kept the same and you should not use any extra space so that the solution has constant space complexity i.e., .

Move all the unique number instances at the beginning of the array and after moving return the length of the subarray that has no duplicate in it.

Example 1:

Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after moving element will be [2, 3, 6, 9].
Example 2:

Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after moving elements will be [2, 11].
 */
const input = [2, 3, 3, 3, 6, 9, 9];

const nonDuplicateNumber = (input) => {
  let left = 0;
  let right = left + 1;
  let count = 1;
  let movePosition = 1;

  if (!input || input.length <= 0) {
    return 0;
  }

  while (input[right] && left < right) {
    if (input[left] !== input[right]) {
      input[movePosition] = input[right];
      movePosition += 1;
      left++;
      right++;
      count++;
    } else {
      right++;
    }
  }
  return count;
};

console.log(nonDuplicateNumber(input));
