/*

  2724. Sort By    |    EASY
  https://leetcode.com/problems/sort-by/description/?envType=study-plan-v2&envId=30-days-of-javascript

  Given an array arr and a function fn, return a sorted array sortedArr. 
  You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. 
  sortedArr must be sorted in ascending order by fn output.

  You may assume that fn will never duplicate numbers for a given array.

*/


const sortBy = function(arr, fn) {
    if (arr.length === 0) {
        return [];
    }
    
    let sortedArr = [];
    let fnResult = []

    for (let item of arr) {
        fnResult.push(fn(item))
    }


    return sortedArr
};
