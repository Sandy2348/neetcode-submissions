class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        //numbers=[1,2,3,4];target=3
        let leftPointer = 0;
        let rightPointer = numbers.length-1;
        while(leftPointer<rightPointer ){
          if(numbers[rightPointer]+numbers[leftPointer]>target){
           rightPointer--;
           console.log(rightPointer);

            }
            else if(numbers[rightPointer]+numbers[leftPointer]<target){
                leftPointer++;
                console.log(leftPointer);
            }
            else if(numbers[rightPointer]+numbers[leftPointer]==target){
                console.log("right",rightPointer,"left",leftPointer);
                return [leftPointer+1,rightPointer+1];
            }
          
        }

    }
}
