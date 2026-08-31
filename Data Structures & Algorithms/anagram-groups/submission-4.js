class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
let map = new Map();
for(let ele of strs){
    const newVal = ele.split('').sort().join('');
    if(!map.has(newVal)){
        map.set(newVal,[ele]);
    }
    else{
 map.get(newVal).push(ele)
    }
}
   return [...map.values()];
    }
}
