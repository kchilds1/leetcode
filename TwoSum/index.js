const { create } = require("domain");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var twoSum = function(nums, target) {
    for(let i = 0; nums.length > i; i++){
        for(let j = i + 1; nums.length > j; j++){
            if(nums[i] + nums[j] === target){
                console.log([i,j]);
            }
        }
    }
      
  };

function prompt() {
    rl.question("What challenge are you working on?\n",(answer) => {
        if (answer == "twoSum"){
            twoSum([2,7,11,15],9);
        }
        rl.close();
    })
}

prompt();