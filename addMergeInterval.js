/** 
 * PROLEM STATEMENT
Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.

Example 1:

Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
Output: [[1,3], [4,7], [8,12]]
Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7].
Example 2:

Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,10]
Output: [[1,3], [4,12]]
Explanation: After insertion, since [4,10] overlaps with [5,7] & [8,12], we merged them into [4,12].
Example 3:

Input: Intervals=[[2,3],[5,7]], New Interval=[1,4]
Output: [[1,4], [5,7]]
Explanation: After insertion, since [1,4] overlaps with [2,3], we merged them into one [1,4].
*/

const intervals = [
    [2, 3],
    [5, 7],
  ];
  const newInterval = [1, 4];
  
  function mergeOverlappingInterval(intervals, newInterval) {
    let i = 0;
    let merged = [];
    while (i < intervals.length) {
      if (newInterval && newInterval[0] <= intervals[i][1]) {
        let start = Math.min(newInterval[0], intervals[i][0]);
        let end = Math.max(newInterval[1], intervals[i][1]);
        merged.push([start, end]);
        newInterval = null;
      } else {
        merged.push(intervals[i]);
      }
      i++;
    }
  
    let start = merged[0][0];
    let end = merged[0][1];
    let result = [];
  
    for (let i = 1; i < merged.length; i++) {
      if (merged[i][0] <= end) {
        end = Math.max(end, merged[i][1]);
      } else {
        result.push([start, end]);
        start = merged[i][0]; //4
        end = merged[i][1]; //10
      }
    }
    result.push([start, end]);
    return result;
  }
  
  console.log(mergeOverlappingInterval(intervals, newInterval));
  