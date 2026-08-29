class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       const freq = {};
       for(let ele of nums){
        freq[ele] = (freq[ele]||0)+1
       }
     
    const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
    let arr = []
    for(let i = 0; i < k; i++){
        arr.push(Number(sorted[i][0]));
    }


return arr;
    }
}
