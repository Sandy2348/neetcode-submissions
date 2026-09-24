class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
let map = new Map();
for(let ele of strs){
    let eleVal = ele.split('').sort().join('');
    if(!map.has(eleVal)){
        map.set(eleVal,[ele])
    }
    else{
        map.get(eleVal).push(ele)
    }
    
}
return [...map.values()];
    }
}
