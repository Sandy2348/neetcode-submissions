class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = {};
        let newArr = [];
        for(let ele of nums){
            freq[ele] = (freq[ele]||0)+1;
        }
        const newFreq = Object.entries(freq).sort((a,b)=>{
            return b[1] - a[1]
        });
        for(let i = 0; i<k; i++){
            newArr.push(Number(newFreq[i][0]))
        }
        return newArr;
    }
}
