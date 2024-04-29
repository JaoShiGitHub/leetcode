/**
* 2667. Create Hello World Function  |  Easy

* Example 1:
*    Input: args = []
*    Output: "Hello World"
*    Explanation:
*    const f = createHelloWorld();
*    f(); // "Hello World"

*    The function returned by createHelloWorld should always return "Hello World".

*  Example 2:
*     Input: args = [{},null,42]
*     Output: "Hello World"
*     Explanation:
*     const f = createHelloWorld();
*     f({}, null, 42); // "Hello World"

*     Any arguments could be passed to the function but it should still always return "Hello World".

*/

/* BEFORE */

// var createHelloWorld = function() {
//     return function(...args) {       
//     }
// };

/* AFTER */

const createHelloWorld = function() {
    return function(...args) {
        return "Hello World"
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
