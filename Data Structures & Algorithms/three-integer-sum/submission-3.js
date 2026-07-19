class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let sorted = nums.sort((a, b) => {
            return a - b;
        });
        let results = [];
        for (let i = 0; i < sorted.length ; i++) {
            let present = sorted[i];
            let leftPointer = i + 1;
            let rightPointer = sorted.length - 1;
            if (i > 0 && sorted[i] == sorted[i - 1]) {
                continue;
            }
            while (leftPointer < rightPointer) {
                let sum = present + sorted[leftPointer] + sorted[rightPointer];
                if (sum > 0) {
                    rightPointer--;
                } else if (sum < 0) {
                    leftPointer++;
                } else {
                    results.push([sorted[i], sorted[leftPointer], sorted[rightPointer]]);
                    leftPointer++;
                    rightPointer--;
                    while (
                        leftPointer < rightPointer &&
                        sorted[leftPointer] == sorted[leftPointer - 1]
                    ) {
                        leftPointer++;
                    }
                    while (
                        leftPointer < rightPointer &&
                        sorted[rightPointer] == sorted[rightPointer + 1]
                    ) {
                        rightPointer--;
                    }
                }
            }
        }
        return results;
    }
}
