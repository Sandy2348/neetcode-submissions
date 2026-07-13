class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

let map = new Map();
for(let ele of nums){
    map.set(ele,(map.get(ele)||0)+1)
}
console.log(map)
const sortedMap = new Map(
  [...map].sort((a, b) => b[1] - a[1])
);

let arr = [...sortedMap].slice(0,k);
return arr.map((item)=>{
    return item[0]
})


        
    }
}
