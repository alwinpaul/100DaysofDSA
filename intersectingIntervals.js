/**
 * PROBLEM STATEMENT
Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.

Example 1:

Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
Output: [2, 3], [5, 6], [7, 7]
Explanation: The output list contains the common intervals between the two lists.
Example 2:

Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]]
Output: [5, 7], [9, 10]
Explanation: The output list contains the common intervals between the two lists.

 */

const arr1 = [
    [1, 3],
    [5, 6],
    [7, 9],
  ];
  const arr2 = [
    [2, 3],
    [5, 7],
  ];
  
  function intersectingIntervals(arr1, arr2) {
    const result = [];
    let i = 0;
    let j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (
        (arr2[j][0] <= arr1[i][1] && arr2[j][0] >= arr1[i][0]) ||
        (arr1[i][0] <= arr2[j][1] && arr1[i][0] >= arr2[j][0])
      ) {
        let start = Math.max(arr1[i][0], arr2[j][0]);
        let end = Math.min(arr1[i][1], arr2[j][1]);
        result.push([start, end]);
      }
  
      if (arr1[i][1] < arr2[j][1]) {
        i++;
      } else {
        j++;
      }
    }
  
    return result;
  }
  
  console.log(intersectingIntervals(arr1, arr2));
  