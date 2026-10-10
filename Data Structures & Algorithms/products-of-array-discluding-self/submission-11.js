class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        //[1,2,4,6]==[]
     let leftArr = new Array(nums.length);
     let rightArr = new Array(nums.length);
     let newArr = new Array(nums.length);
     leftArr[0] = 1;
     for(let i = 1; i < nums.length;i++){
        leftArr[i] = leftArr[i-1]*nums[i-1]
     }
rightArr[nums.length-1]= 1;
     for(let i = nums.length-2; i >=0;i--){
        rightArr[i] = rightArr[i+1]*nums[i+1]
     }
      for(let i = 0; i <nums.length;i++){
        newArr[i] = rightArr[i]*leftArr[i]
     }
     return newArr;
   
    }
}
