class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
let map = new Map();
for(let ele of strs){
    let newEle = ele.split('').sort().join('');
    if(!map.has(newEle)){
        map.set(newEle,[ele])
    }
    else{
        map.get(newEle).push(ele)
    }
}
return[...(map.values())]




    }
}
