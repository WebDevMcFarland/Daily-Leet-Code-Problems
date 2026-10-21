// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].


// Example 2:

// Input: nums = [1,2,3,4,4,3,2,1], n = 4
// Output: [1,4,2,3,3,2,4,1]
// Example 3:

// Input: nums = [1,1,2,2], n = 2
// Output: [1,2,1,2]


const nums = [2,5,1,3,4,7];
const n = 3;


var shuffle = function(nums, n) {

    const result = [];

    for(let i = 0; i < nums.length / 2; i++){
        result.push(nums[i]);
        result.push(nums[i + n]);
    }
    
    return result
};


console.log(shuffle(nums, n))
// Output: [2,3,5,4,1,7] 







// jules solution
/*

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
// var shuffle = function(nums, n) {
//     const leftDeck = nums.slice(0, n);
//     const rightDeck = nums.slice(n);

//     const result = [];
//     while (leftDeck.length || rightDeck.length) {
//         const leftCard = leftDeck.shift();
//         const rightCard = rightDeck.shift();
//         result.push(leftCard);
//         result.push(rightCard);
//     }
//     return result;
// };

