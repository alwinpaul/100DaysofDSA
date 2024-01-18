/** 
 * PROLEM STATEMENT
Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

Example 1:

Intervals: [[1,4], [2,5], [7,9]]
Output: [[1,5], [7,9]]
Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into one [1,5].

Example 2:

Intervals: [[6,7], [2,4], [5,9]]
Output: [[2,4], [5,9]]
Explanation: Since the intervals [6,7] and [5,9] overlap, we merged them into one [5,9].
Example 3:

Intervals: [[1,4], [2,6], [3,5]]
Output: [[1,6]]
Explanation: Since all the given intervals overlap, we merged them into one.
*/

const intervals = [
    [1, 4],
    [2, 6],
    [3, 5],
  ];
  
  function mergeOverlappingInterval(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
  
    let result = [];
    let start = intervals[0][0];
    let end = intervals[0][1];
  
    for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] <= end) {
        end = Math.max(end, intervals[i][1]);
      } else {
        result.push([start, end]);
        start = intervals[i][0];
        end = intervals[i][1];
      }
    }
    result.push([start, end]);
    return result;
  }
  
  console.log(mergeOverlappingInterval(intervals));
  