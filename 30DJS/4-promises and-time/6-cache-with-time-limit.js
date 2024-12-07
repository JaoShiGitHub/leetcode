/*
 
  2622. Cache With Time Limit    |    Medium
  https://leetcode.com/problems/cache-with-time-limit/description/?envType=study-plan-v2&envId=30-days-of-javascript


  Write a class that allows getting and setting key-value pairs, 
  however a time until expiration is associated with each key.

  The class has three public methods:

  set(key, value, duration): accepts an integer key, 
  an integer value, and a duration in milliseconds. 
  Once the duration has elapsed, the key should be inaccessible. 
  The method should return true if the same un-expired key already exists and false otherwise. 
  Both the value and duration should be overwritten if the key already exists.

  get(key): if an un-expired key exists, it should return the associated value. 
  Otherwise it should return -1.

  count(): returns the count of un-expired keys.

*/


const TimeLimitedCache = function() {
    this.storage = new Map()
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
    const currentKey = this.storage.get(key);

    if (currentKey) {
        clearTimeout(currentKey.timeoutID);
    }

    const expirationTime = Date.now() + duration;
    const timeoutID = setTimeout(() => {
        this.storage.delete(key);
    }, duration);

    this.storage.set(key, { value, expirationTime, timeoutID });

    return !!currentKey;
};


TimeLimitedCache.prototype.get = function (key) {
    const currentKey = this.storage.get(key);

    if (!currentKey || Date.now() >= currentKey.expirationTime) {
        this.storage.delete(key);
        return -1;
    }

    return currentKey.value;
};


TimeLimitedCache.prototype.count = function () {
    let count = 0;
    const now = Date.now();

    for (const [key, currentKey] of this.storage) {
        if (now < currentKey.expirationTime) {
            count++;
        } else {
            this.storage.delete(key); 
        }
    }

    return count;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
