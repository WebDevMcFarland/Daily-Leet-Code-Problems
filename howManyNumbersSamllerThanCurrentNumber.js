

// Code

// Testcase
// Testcase

// Test Result
// Q2. How Many Numbers Are Smaller Than the Current Number
// Easy

// Topics
// premium lock icon
// Companies

// Hint
// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

 

// Example 1:

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation: 
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1). 
// For nums[3]=2 there exist one smaller number than it (1). 
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

// Example 2:

// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]
// Example 3:

// Input: nums = [7,7,7,7]
// Output: [0,0,0,0]
 

// Constraints:

// 2 <= nums.length <= 500
// 0 <= nums[i] <= 100

const nums = [8,1,2,2,3]
// [1,2,2,3,8]
// length of 5
// last index of 4

// var smallerNumbersThanCurrent = function(nums) {
//     const result = [];


//     //loop over the passed in nums array
//     for(let i = 0; i < nums.length; i++){
//     //create a variable set to the current nums[i]
//     let currentValue = nums[i] 
//     //decalre a variable to hold the count
//     let count = 0;
//         //loop over the nums array again and check if nums[j] < nums[i]
//         for(let j = 0; j < nums.length; j++){
//         //if nums[j] < nums[i] increase the count
//         if (nums[j] < currentValue) count++ ;
        
//         //if j === nums.length - 1  push count to result
//         if(j === nums.length - 1){
//             result.push(count) 
//             count = 0
//         } 
//         }
//     }

//     return result;

// };

// console.log(smallerNumbersThanCurrent(nums))
//expected output: // Output: [4,0,1,1,3]



// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]

// runningTotal = [0, 1, 3, 4, 5]

var smallerNumbersThanCurrent = function(nums) {
    const result = [];
    const cache = {};

    for(let i = 0; i < nums.length; i++){
        cache[nums[i]] = (cache[nums[i]] || 0) + 1
    }


    for(let j = 0; j < nums.length; j++){
        
    }
    

    return result;

};

console.log(smallerNumbersThanCurrent(nums))






// ------------------_AI SOLUTION_-----------------------

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]

var smallerNumbersThanCurrent3 = function(nums) {
    const result = [];
    const cache = {};

    // Step 1: Count frequency of each number
    for (let i = 0; i < nums.length; i++) {
        cache[nums[i]] = (cache[nums[i]] || 0) + 1;
    }

    // Step 2: Convert frequencies into smaller-number counts
    let count = 0;

    //cache {1:1, 2:2, 3:1, 8:1}

    for (let key = 0; key <= 100; key++) {
        if (cache[key]) {
            const frequency = cache[key];//2
            cache[key] = count;//cache[key] = 1
            count += frequency;//count = 2 
        }
    }
    {
    // 1: 0,
    // 2: 1,
    // 3: 3,
    // 8: 4
}

    // Step 3: Build result using the cache
    for (let j = 0; j < nums.length; j++) {
        result.push(cache[nums[j]]);
    }

    return result;
};

console.log(smallerNumbersThanCurrent3(nums))



















// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    // 
    // 2-pass
    // first pass: create freq object
    // second pass: iterate, count smaller numbers
    //

    const frequency = {};
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        frequency[value] = (frequency[value] + 1) || 1;
    }
    
    const frequencyKeys = Object.keys(frequency).map(Number);
    frequencyKeys.sort();
    //frequency {1:1, 2:2, 3:1, 8:1}
    // frequencyKeys = [1, 2, 3, 8]

    
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i]; // 8
        let smallerCount = 0; // 0 -> 1 -> 3
        for (let j = 0; j < frequencyKeys.length; j++) {
            let comparisonValue = frequencyKeys[j]; // 2
            if (value > comparisonValue) {
                smallerCount += frequency[comparisonValue];
            }
        }
        // Push count
        result.push(smallerCount);
    }
    return result;
};

// const nums = [8,1,2,2,3];
// console.log(smallerNumbersThanCurrent(nums));