/*

    2666. Allow One Function Call    |     EASY
    https://leetcode.com/problems/allow-one-function-call/description/?envType=study-plan-v2&envId=30-days-of-javascript

    Given a function fn, return a new function that is identical 
    to the original function except that it ensures fn is called at most once.

    •  The first time the returned function is called, it should return the same result as fn.

    •  Every subsequent time it is called, it should return undefined.
    
*/

const once = function(fn) {
    let isCalled = false;
    return function(...args){
        if (!isCalled) {
            isCalled = true;
            return fn(...args);
        }
        return undefined;
    };
};

