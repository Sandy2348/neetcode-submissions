class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = height.length-1;
        let leftMax= 0;
        let rightMax= 0;
        let water = 0;
        while(left<right){
            if(height[left]<height[right]){
if(height[left]>=leftMax){
                leftMax = height[left]
            }
            else{
                water = water - height[left] + leftMax
            }
            left++
            }
            else{
                if(height[right]>=rightMax){
                    rightMax = height[right]
                }
                else{
                    water = water-height[right] + rightMax
                }
                right--
            }
            
            
        }
        return water;
    }
}
