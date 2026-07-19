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
            let sum = numbers[rightPointer]+numbers[leftPointer]
          if(sum>target){
           rightPointer--;
            }
            else if(sum<target){
                leftPointer++;
            }
            else if(sum==target){
                return [leftPointer+1,rightPointer+1];
            }
        }
    }
}
