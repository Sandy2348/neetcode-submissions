class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      let map = new Map();
      for(let ele of strs){
        let sorted = ele.split('').sort().join('');
        if(!map.has(sorted)){
            map.set(sorted,[])
        }
        map.get(sorted).push(ele)
      }
      return Array.from(map.values());

    }
}
