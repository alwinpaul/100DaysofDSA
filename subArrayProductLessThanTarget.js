/**
 * 
 * PROBLEM STATEMENT
 
Given an array with positive numbers and a positive target number, find all of its contiguous subarrays whose product is less than the target number.

Example 1:

Input: [2, 5, 3, 10], target=30                                              
Output: [2], [5], [2, 5], [3], [5, 3], [10]                           
Explanation: There are six contiguous subarrays whose product is less than the target.
Example 2:

Input: [8, 2, 6, 5], target=50                                              
Output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5]                         
Explanation: There are seven contiguous subarrays whose product is less than the target.

 */

const input = [8, 2, 6, 5];
const target = 50;

// function subArrayProductLessThanTarget(input, target) {
//   const n = input.length;
//   let output = [];
//   // let windowStart = 0;
//   // let windowSum = 0;

//   for (let i = 0; i < n; i++) {
//     let arr = [];
//     let j = i;
//     let product = input[j];
//     while (j < n && product < target) {
//       arr.push(input[j]);
//       output.push([...arr]);
//       j++;
//       if (input[j]) product *= input[j];
//     }
//     output.push([...arr]); //[2], [2,5], [5], [5,3], [3], [10]
//   }
// }

// const input = [8, 2, 6, 5];
// const target = 50;

function subArrayProductLessThanTarget(input, target) {
  const n = input.length;
  let output = [];
  let windowStart = 0;
  let windowProduct = input[0];
  let windowEnd = 0;
  let w = [];

  while (windowStart < n) {
    if (windowProduct < target) {
      w.push(input[windowEnd]);
      output.push([...w]);
      windowEnd++;
      windowProduct *= input[windowEnd];
    } else {
      windowStart++;
      w = [];
      windowEnd = windowStart;
      windowProduct = input[windowStart];
    }
  }
  return output;
}

console.log(subArrayProductLessThanTarget(input, target));
