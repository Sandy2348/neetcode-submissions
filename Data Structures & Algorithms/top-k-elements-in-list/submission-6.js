class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = {};
        let newArrRes = [];
        for(let ele of nums){
            freq[ele] = (freq[ele]||0)+1
        }
    
        let newArr = Object.entries(freq).sort((a,b)=>{return b[1]-a[1]});
    
        for(let i=0;i<k;i++){
         
            newArrRes.push(newArr[i][0])
        }
        return newArrRes;


    }
}
