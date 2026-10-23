// Q3. Max Consecutive Ones
// Easy

// Topics
// premium lock icon
// Companies

// Hint
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.

const nums = [1,1,0,1,1,1]


var findMaxConsecutiveOnes = function(nums) {

    let maxCount = 0;
    let tempCount = 0;

    //loop over nums
    for(let i = 0; i < nums.length; i++){

    //if nums [i] === 1 increase temp count
    if(nums[i] === 1 ) tempCount++;

    //if tempCount is greater than maxCount, maxCount = tempCount
    if(tempCount > maxCount ) maxCount = tempCount
    
    //if nums [i] does not equal 1 tempCount = 0
    if (nums[i] !== 1 ) tempCount = 0;
        }
    
    return maxCount;
    
};


console.log(findMaxConsecutiveOnes(nums))
// Output: 3


// const beasts = ["ant", "bison", "camel", "duck", "bison"];

// console.log(beasts.indexOf("bison"));
// // Expected output: 1

var findMaxConsecutiveOnes2 = function(nums) {
    let idxStart = 0;
    let greatestConsecutiveOnes = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            greatestConsecutiveOnes = Math.max(greatestConsecutiveOnes, i - idxStart - 1);
            idxStart = i;
        }
    }
};


console.log(findMaxConsecutiveOnes2(nums))
// Output: 3