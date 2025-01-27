/*

  2724. Sort By    |    EASY
  https://leetcode.com/problems/sort-by/description/?envType=study-plan-v2&envId=30-days-of-javascript

  Given an array arr and a function fn, return a sorted array sortedArr. 
  You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. 
  sortedArr must be sorted in ascending order by fn output.

  You may assume that fn will never duplicate numbers for a given array.

*/


function sortBy(arr, fn) {
  const sortedArr = [];
  for (const item of arr) {
    let i = 0;
    while (i < sortedArr.length && fn(sortedArr[i]) <= fn(item)) i++;
    sortedArr.splice(i, 0, item);
  }
  return sortedArr;
}
