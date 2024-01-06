/** 
 * PROBLEM STATEMENT
 Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator. For example, do not use pow(x, 0.5) in C++ or x ** 0.5 in Python.

Example 1:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.8284, and since we need to return the floor of the square root (integer), hence we returned 2.  
Example 2:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2.
Example 3:

Input: x = 2
Output: 1
Explanation: The square root of 2 is 1.414, and since we need to return the floor of the square root (integer), hence we returned 1.  

*/
const nums = 9;

const findNearestSqrt = (num) => {
  let left = 0;
  let right = Math.floor(num / 2);
  let middle;

  while (left <= right) {
    middle = Math.floor((right + left) / 2);
    const sqt = middle * middle;

    if (sqt < num) {
      left++;
    } else if (sqt > num) {
      right--;
    } else {
      return middle;
    }
  }
  return right;
};

console.log(findNearestSqrt(nums));
