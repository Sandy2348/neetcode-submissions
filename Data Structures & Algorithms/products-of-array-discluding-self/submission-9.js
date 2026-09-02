class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
      let product = new Array(nums.length);
      let leftProduct = 1;
      for(let i= 0; i < nums.length; i++){
        product[i] = leftProduct;
        leftProduct = leftProduct * nums[i]
      }
      let rightProduct = 1;
      for(let i = nums.length-1; i>=0; i--){
        product[i] = product[i]*rightProduct;
        rightProduct = rightProduct * nums[i]
      }
      return product;
    }
}
