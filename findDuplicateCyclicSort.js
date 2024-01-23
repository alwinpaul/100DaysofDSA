/**
 * PROBLEM STATEMENT
We are given an unsorted array containing n+1 numbers taken from the range 1 to n. The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.

Example 1:

Input: [1, 4, 4, 3, 2]
Output: 4
Example 2:

Input: [2, 1, 3, 3, 5, 4]
Output: 3
Example 3:

Input: [2, 4, 1, 4, 4]
Output: 4

 */

const input = [2, 4, 1, 4, 4];

function findDuplicate(input) {
  let i = 0; //1

  while (i < input.length) {
    let swap = input[i] - 1; //3
    if (i + 1 != input[i]) {
      if (input[i] === input[swap]) {
        return input[i];
      }

      input[i] = input[swap];
      input[swap] = swap + 1;
    } else {
      i++;
    }
  }
}

console.log(findDuplicate(input));
