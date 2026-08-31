class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let leftPointer = 0;
        let rightPointer = numbers.length-1;
        while(leftPointer<rightPointer){
            let value = numbers[leftPointer] + numbers[rightPointer]
            if(value == target){
                return [leftPointer+1,rightPointer+1];
            }
            else if(value>target){
               rightPointer-- 
            }
            else{
                leftPointer++
            }
        }

    }}