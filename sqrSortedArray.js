/**
 * PROBLEM STATEMENT

Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]
Example 2:

Input: [-3, -1, 0, 1, 2]
Output: [0, 1, 1, 4, 9]
 */

const input = [-2, -1, 0, 2, 3, 4];

function sqrOfArray(input) {
  // Easy way: but time complexity of O(n log n)
  // let sqrArray = input.map((elem) => elem * elem);
  // return sqrArray.sort();

  // better solution
  let left = 0;
  let right = input.length - 1;
  let sqrArray = new Array(input.length);
  let index = input.length - 1;

  while (left <= right) {
    let leftSqr = input[left] * input[left];
    let rightSqr = input[right] * input[right];

    if (leftSqr > rightSqr) {
      sqrArray[index] = leftSqr;
      left++;
    } else {
      sqrArray[index] = rightSqr;
      right--;
    }
    index--;
  }
  return sqrArray;
}

console.log(sqrOfArray(input));
