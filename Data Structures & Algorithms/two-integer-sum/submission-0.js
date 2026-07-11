class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
     //   [3,4,5,6]//7
        let needed;
        let map = new Map();
        for(let i = 0; i<nums.length; i++){
            needed = target - nums[i];//4,3
           
            if(map.has(needed)){
                return [map.get(needed),i]
            }
             map.set(nums[i], i);///{3:4,3:4,}
            


        }
    }
}
