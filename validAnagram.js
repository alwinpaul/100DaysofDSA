/**
 * 
 * PROBLEM STATEMENT
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "listen", t = "silent"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Example 3:

Input: s = "hello", t = "world"
Output: false
 */

const str1 = 'listen';
const str2 = 'silent';

function validAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  let charMap = new Map();

  [...str1].forEach((item) => {
    charMap.set(item, true);
  });

  for (let i = 0; i < str2.length; i++) {
    if (!charMap.get(str2[i])) {
      return false;
    }
  }
  return true;
}
console.log(validAnagram(str1, str2));
