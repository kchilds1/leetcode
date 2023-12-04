/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {// this is created to remember the answer of fn
    const cache = {};// this is where the answer is going to be saved
    return function(...args) {//this is returning a function 
        const key = JSON.stringify(args);
        if (key in cache){
            return cache[key];//if the answer exists I'm just returning what the key is
        } else {
            const result = fn(...args);//Answer doesn't exist and it needs to call memoizedFn and store the result in a variable called result
            cache[key] = result;//result is then stored in memory so it can remember it for next time
            return result;
    }
    };
}

 
   let callCount = 0; //This keeps track of how many times it has been called  to solve a problem
   const memoizedFn = memoize(function (a, b) {
  	callCount += 1;//counting the amount of times asked to solve problem
     return a + b; //return the math
   })
   console.log(memoizedFn(2, 3)) // 5
   console.log(memoizedFn(7, 3)) // 5
   
   console.log(callCount) // 1 
 
