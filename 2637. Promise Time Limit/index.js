/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        //Return a promise
        return new Promise(async(resolve, reject)=> {
        //I'm going to set a timeout that will timeout at t
        setTimeout(()=> reject ("Time Limit Exceeded"), t);
        try{
            //want a result with the actual values instead of a promise so I added await instead of just fn(...args)
            const res = await fn(...args);
            resolve(res);
        } catch (err) {
           reject(err);
        }
    })
    }
};

 function fn(t) { 
     return new Promise(res => setTimeout(res, t));
 }
  const limited = timeLimit(fn, 100);
  limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 