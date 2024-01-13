/** 
 * PROBLEM STATEMENT
Given a string, find the length of the longest substring in it with no more than K distinct characters.

You can assume that K is less than or equal to the length of the given string.

Example 1:

Input: String="araaci", K=2  
Output: 4  
Explanation: The longest substring with no more than '2' distinct characters is "araa".
Example 2:

Input: String="araaci", K=1  
Output: 2  
Explanation: The longest substring with no more than '1' distinct characters is "aa".
Example 3:

Input: String="cbbebi", K=3  
Output: 5  
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
*/

const k = 1;
const str = 'araaci';

function findLength(str, k) {
  let start = 0;
  let maxLength = 0;
  const n = str.length;
  const charFrequency = {};

  for (let end = 0; end < n; end++) {
    let c = str[end];

    charFrequency[c] = charFrequency[c] ? charFrequency[c] + 1 : 1;

    while (Object.keys(charFrequency).length > k) {
      charFrequency[str[start]] -= 1;
      if (charFrequency[str[start]] === 0) {
        delete charFrequency[str[start]];
      }
      start += 1;
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

console.log(findLength(str, k));

/**
 * 
 * str = araaci, k=2
 * 
 * 1. increment each element till we have k unique elements - araa
 *    increment charFrequency values - {"a": 3, "r": 1}
 * 2. set maxlength to end - start - 4
 *    start shrinking the array from start until charFrequency length < k
 * 3. decrement the value of the first item in window from charFrequency - 
 *    {"a":2, "r":1}
 * 4. If value is zero remove item from object
 * 
 * 

 */
