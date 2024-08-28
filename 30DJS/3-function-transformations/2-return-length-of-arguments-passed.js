/*
    2703. Return Length of Arguments Passed    |    EASY
    https://leetcode.com/problems/return-length-of-arguments-passed/description/?envType=study-plan-v2&envId=30-days-of-javascript
    
    Write a function argumentsLength that returns the count of arguments passed to it.
    
*/

// • First Solution

// const argumentsLength = function(...args) {
//     return args.length;
// };

// • Second Solution

const argumentsLength = (...args) => args.length;
