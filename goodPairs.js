/**
 * 
 * PROBLEM STATEMENT
 Given an array of integers nums, return the number of good pairs in it.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs, here are the indices: (0,3), (0,4), (3,4), (2,5).
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array is a 'good pair'.
Example 3:

Input: words = nums = [1,2,3]
Output: 0
Explanation: No number is repeating.
 */


const nums = [1, 2, 3, 1, 1, 3];

const goodPairs = (nums) => {
  let count = 0;
  let obj = {};
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] === nums[j] && i < j) {
  //       count++;
  //     }
  //   }
  // }

  for (let num of nums) {
    obj[num] = obj[num] ? obj[num] + 1 : 1;
    count = count + (obj[num] - 1);
  }
  return count;
};

console.log(goodPairs(nums));
