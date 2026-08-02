class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
let right = heights.length-1;
let left = 0;
let maxArea = 0;
while(left<right){
    let width = right - left;
    let minHeight = Math.min(heights[right],heights[left]);
    let area = width * minHeight;
    maxArea = Math.max(area,maxArea);
    if(heights[left]<heights[right]){
        left++
    }
    else{
        right--
    }
}
return maxArea;


    }
}
