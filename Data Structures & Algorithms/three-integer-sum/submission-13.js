class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
      let sortedArr = nums.sort((a,b)=>{
        return a -b;
      });
      let arr = [];
      for(let i = 0 ;i < sortedArr.length; i++){
      if(i>0 && sortedArr[i]==sortedArr[i-1]){
        continue;
      }
        let firstPointer = sortedArr[i];
        let leftPointer = i+1;
        let rightPointer = sortedArr.length-1;
        while(leftPointer<rightPointer){
            if(firstPointer + sortedArr[leftPointer]+sortedArr[rightPointer] === 0){
                arr.push([firstPointer,sortedArr[leftPointer],sortedArr[rightPointer]]);
                leftPointer++;
                rightPointer--;
                while(leftPointer < rightPointer && sortedArr[leftPointer]== sortedArr[leftPointer-1]){
                    leftPointer++;
                }
            }
            else if(firstPointer + sortedArr[leftPointer]+sortedArr[rightPointer]>0){
                rightPointer--;
                   while(leftPointer < rightPointer && sortedArr[rightPointer]== sortedArr[rightPointer+1]){
                    rightPointer--;
                }
            }
            else{
                leftPointer++;
            }
        }
      }
      return arr;
    }
}
