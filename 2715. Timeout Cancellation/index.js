/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
//function where the parameters are a function, arguments, and a timeout
var cancellable = function(fn, args, t) {
    //cancelFn function is suppose to run if the timeout is before t, then  timer is cleared
    const cancelFn = function(){
        clearTimeout(timer)
    };
    //if cancelFn isn't invoked timer will run
    const timer = setTimeout(()=>{
        //fn is called with a span of arguments with a t delay
        fn(...args)
    }, t);
    return cancelFn;
};


  const result = [];

  const fn = (x) => x * 5;
  const args = [2], t = 20, cancelTimeMs = 50;

  const start = performance.now();

  const log = (...argsArr) => {
      const diff = Math.floor(performance.now() - start);
      result.push({"time": diff, "returned": fn(...argsArr)});
  }
       
  const cancel = cancellable(log, args, t);

  const maxT = Math.max(t, cancelTimeMs);
           
  setTimeout(cancel, cancelTimeMs);

  setTimeout(() => {
     console.log(result); // [{"time":20,"returned":10}]
  }, maxT + 15)
 
