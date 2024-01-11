/**
 * PROBLEM STATEMENT
 * 
 Given an array, find the average of each subarray of ‘K’ contiguous elements in it.
 */

 const arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
 const k = 5;
 
 function contigiousAvg(arr, k) {
   const n = arr.length;
   let sum = 0;
   let start = 0;
   let output = [];
 
   for (let end = 0; end < n; end++) {
     sum += arr[end];
     if (end >= k - 1) {
       output.push(sum / k);
       sum -= arr[start];
       start++;
     }
   }
 
   return output;
 }
 
 console.log(contigiousAvg(arr, k));
 