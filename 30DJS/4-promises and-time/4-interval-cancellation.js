/*
    2725. Interval Cancellation  |  EASY
    https://leetcode.com/problems/interval-cancellation/description/?envType=study-plan-v2&envId=30-days-of-javascript

    
    Given a function fn, an array of arguments args, 
    and an interval time t, return a cancel function cancelFn.

    After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

          setTimeout(cancelFn, cancelTimeMs)
          
    The function fn should be called with args immediately and then called again every t milliseconds 
    until cancelFn is called at cancelTimeMs ms.
*/



const cancellable = function(fn, args, t) { 
	fn(...args);
	    const intervalID = setInterval(() => fn(...args), t)
	    const cancelFn = () => clearInterval(intervalID);
    return cancelFn;
}
