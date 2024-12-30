/*

2677. Chunk Array   |    Easy
https://leetcode.com/problems/chunk-array/description/?envType=study-plan-v2&envId=30-days-of-javascript

  Given an array arr and a chunk size size, return a chunked array.

  A chunked array contains the original elements in arr, but consists of subarrays each of length size. 
  The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

  You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

  Please solve it without using lodash's _.chunk function.

*/

function chunk(arr, size) {
    let santaBag = [];
    let santaGifts = [];
    let count = arr.length;

    for (let i = 0; i < arr.length; i++) {
        santaGifts.push(arr[i])
        if (santaGifts.length === size) {
            santaBag.push(santaGifts);
            santaGifts = [];
        } else if (santaGifts.length < size && i === arr.length - 1) {
            santaBag.push(santaGifts);
            santaGifts = [];
        }
        count--
    }
    return santaBag
}


