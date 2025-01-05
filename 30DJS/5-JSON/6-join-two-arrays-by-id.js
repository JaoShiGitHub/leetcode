/*
   2722. Join Two Arrays by ID
   https://leetcode.com/problems/join-two-arrays-by-id/description/?envType=study-plan-v2&envId=30-days-of-javascript

   Given two arrays arr1 and arr2, return a new array joinedArray. 
   All the objects in each of the two inputs arrays will contain an id field that has an integer value. 

  joinedArray is an array formed by merging arr1 and arr2 based on their id key. 
  The length of joinedArray should be the length of unique values of id. 
  The returned array should be sorted in ascending order based on the id key.

  If a given id exists in one array but not the other, 
  the single object with that id should be included in the result array without modification.

  If two objects share an id, their properties should be merged into a single object:

  If a key only exists in one object, that single key-value pair should be included in the object.
  If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

*/

const join = function (arr1, arr2) {
    let joinedArray = [];
    const arrays = [...arr1, ...arr2];

    for (let i = 0; i < arrays.length; i++) {
        let item = arrays[i];
        if (joinedArray.length === 0) {
            joinedArray.push(item)
        } else {
            for (let j = 0; j < joinedArray.length; j++) {
                let jaItem = joinedArray[j]
                if (jaItem[Object.keys(jaItem)[0]] === item[Object.keys(item)[0]]) {
                    jaItem = item;
                } else {
                    joinedArray.push(item)
                }
            }
        }
    }

    return joinedArray;
};

join([{ "id": 1, "x": 1 }, { "id": 2, "x": 9 }], [{ "id": 3, "x": 5 }]);

// "joinedArray" has id value as the same as "arrays" id?


// ja = joinedArray[j]
// as = arrays[i]

// -> Get the key :      
// -> If J id === A id :  
// -> Use A id


// if ( Object.keys(joinedArray[j]) ) {...}
// joinedArray



