/**
 * PROBLEM STATEMENT
We are given an unsorted array containing n numbers taken from the range 1 to n. The array has some numbers appearing twice, find all these duplicate numbers using constant space.

Example 1:

Input: [3, 4, 4, 5, 5]
Output: [4, 5]
Example 2:

Input: [5, 4, 7, 2, 3, 5, 3]
Output: [3, 5]

 */

const input = [5, 4, 7, 2, 3, 5, 3];

function findAllDuplicate(input) {
  let i = 0;
  let result = [];

  while (i < input.length) {
    let swap = input[i] - 1;

    if (i + 1 != input[i] && result.indexOf(input[i]) <= -1) {
      if (input[i] === input[swap]) {
        result.push(input[i]);
        i++;
      } else {
        input[i] = input[swap];
        input[swap] = swap + 1;
      }
    } else {
      i++;
    }
  }
  return result;
}

console.log(findAllDuplicate(input));
