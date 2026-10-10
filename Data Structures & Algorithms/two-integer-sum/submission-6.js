class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        for(let i = 0; i < nums.length; i++){//[3,4,5,6],t=7,m={3:0,}
            let needed = target-nums[i];
            if(map.has(needed)){
return [i,map.get(needed)]
            }
            else{
                map.set(nums[i],i)
            }
        }
    }
            
        }
    

