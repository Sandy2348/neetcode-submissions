class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
      let leftAr = new Array(nums.length);
      let rightAr = new Array(nums.length);
      let newAr = new Array(nums.length);
     leftAr[0] =1;
     for(let i = 1; i < nums.length; i++){
      leftAr[i]= leftAr[i-1]*nums[i-1]
     }
     
     rightAr[nums.length-1] = 1;
     for(let i = nums.length-2; i>-1; i--){
      rightAr[i] = rightAr[i+1]* nums[i+1]
     }
    
     for(let i = 0; i < nums.length; i++){
      newAr[i] = rightAr[i]*leftAr[i]
     }
     return newAr;
    }
}
