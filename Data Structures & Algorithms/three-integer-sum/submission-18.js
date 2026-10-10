class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
       let sortedArr = nums.sort((a,b)=>{
        return a - b;
       })
       let numsArr = [];
       for(let i = 0; i < sortedArr.length-2; i++){
        if(i>0 && sortedArr[i]==sortedArr[i-1]){
            continue
        }
        let leftPointer = i+1;
        let rightPointer = sortedArr.length - 1; 
        while(leftPointer<rightPointer){
            if(sortedArr[leftPointer]+sortedArr[rightPointer]+sortedArr[i]==0){
                 numsArr.push([ sortedArr[i],
    sortedArr[leftPointer],
    sortedArr[rightPointer]]);
                
                 while(leftPointer<rightPointer && sortedArr[leftPointer]==sortedArr[leftPointer+1]){
                    leftPointer++;
                 }
                  while(leftPointer<rightPointer && sortedArr[rightPointer]==sortedArr[rightPointer-1]){
                    rightPointer--;
                 }
                  leftPointer++;
                 rightPointer--;

             
            }
            else if(sortedArr[leftPointer]+sortedArr[rightPointer]+sortedArr[i]>0){
                rightPointer--
            }
            else{
                leftPointer++;
            }
        }
       }
       return numsArr;
    }

}
