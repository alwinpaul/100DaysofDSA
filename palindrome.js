/**
 * 
 PROBLEM STATEMENT: 
 A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: sentence = "A man, a plan, a canal, Panama!"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: sentence = "Was it a car or a cat I saw?"
Output: true
Explanation: Explanation: "wasitacaroracatisaw" is a palindrome.
Example 3:

Input: sentence = "race a car"
Output: false
Explanation: Explanation: "raceacar" is not a palindrome.
 
 *
 */

const str1 = 'A man, a plan, a canal, Panama!';
const str2 = 'Was it a car or a cat I saw?';
const str3 = 'race a car';

function isPalindrome(str) {
  let regex = new RegExp(/^[a-z0-9]+$/i);
  let first = 0;
  let last = str.length - 1;

  while (first < last) {
    while (first < last && !str[first].match(regex)) {
      first++;
    }
    while (first < last && !str[last].match(regex)) {
      last--;
    }

    if (str[first].toLowerCase() !== str[last].toLowerCase()) {
      return false;
    }

    first++;
    last--;
  }
  return true;
}

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
