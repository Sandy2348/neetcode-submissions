class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let leftPointer = 0;
        let rightPointer = numbers.length-1;
        while(leftPointer<rightPointer ){
          if(numbers[rightPointer]+numbers[leftPointer]>target){
           rightPointer--;
            }
            else if(numbers[rightPointer]+numbers[leftPointer]<target){
                leftPointer++;
            }
            else if(numbers[rightPointer]+numbers[leftPointer]==target){
                return [leftPointer+1,rightPointer+1];
            }
        }
    }
}
