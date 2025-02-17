/*
  2721. Execute Asynchronous Functions in Parallel    |    Medium
  https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description/?envType=study-plan-v2&envId=30-days-of-javascript

  Given an array of asynchronous functions functions, return a new promise promise. 
  Each function in the array accepts no arguments and returns a promise. 
  All the promises should be executed in parallel.

  promise resolves:

      When all the promises returned from functions were resolved successfully in parallel. 
      The resolved value of promise should be an array of all the resolved values of promises 
      in the same order as they were in the functions. The promise should resolve 
      when all the asynchronous functions in the array have completed execution in parallel.

  promise rejects:

      When any of the promises returned from functions were rejected. 
      promise should also reject with the reason of the first rejection.
      Please solve it without using the built-in Promise.all function.
*/

const promiseAll = function (functions) {
    let results = [];
    let completed = 0;

    return new Promise((resolve, reject) => {
        if (functions.length === 0) {
            return resolve([]);
        }

        for (let i = 0; i < functions.length; i++) {
            const promise = functions[i];

            promise()
                .then(value => {
                    results[i] = value;
                    completed++;
                    if (completed === functions.length) {
                        resolve(results)
                    }
                })
                .catch(reject);
        }
    });
};

