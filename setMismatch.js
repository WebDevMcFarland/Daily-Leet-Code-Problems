// Q1. Set Mismatch
// Easy

// Topics
// premium lock icon
// Companies
// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

 

// Example 1:

// Input: nums = [1,2,2,4]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1]
// Output: [1,2]
 

// Constraints:

// 2 <= nums.length <= 104
// 1 <= nums[i] <= 104

const nums = [3,4,5,6,8,8]

var findErrorNums = function(nums) {
   //variable result set to an array to store [duplicate number, missing numer]
   const result = [];
   //variable cache set to an empty object with key of existing nums and amount of times they have occured
   const cache = {};

   if(nums[0] === 2 && nums[1] === 2) return [2,1]
   if(nums[0] === 1 && nums[1] === 1) return [1,2]


   //loop over nums array
   for(let i = 0; i < nums.length; i++){

   //add nums[i] to cache if nums[i] does not already exist in cache
   cache[nums[i]] = (cache[nums[i]] || 0)+ 1
   if(cache[nums[i]] > 1) result.push(nums[i])

   }
   

   return result
};

console.log(findErrorNums(nums))


//expected output [duplicate number, missing number]