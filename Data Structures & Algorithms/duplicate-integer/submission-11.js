class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = new Set();
        for(let ele of nums){
            if(set.has(ele)){
return true;
            }
            else{
                set.add(ele)
            }
        }
        return false;
         
    }
}
