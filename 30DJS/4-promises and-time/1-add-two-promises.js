/*

2723 Add Two Promises
https://leetcode.com/problems/add-two-promises/description/?envType=study-plan-v2&envId=30-days-of-javascript

Given two promises promise1 and promise2, return a new promise. 
promise1 and promise2 will both resolve with a number.
The returned promise should resolve with the sum of the two numbers.

*/

const addTwoPromises = (promise1, promise2) => Promise.all([promise1, promise2]).then(([value1, value2]) => value1 + value2);
