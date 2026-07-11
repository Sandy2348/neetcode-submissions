class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false;
        }

        const shashMap = new Map();
        const thashMap = new Map();

        for (let ele of s) {
            shashMap.set(ele, (shashMap.get(ele) || 0) + 1)
        }
        for (let ele of t) {
            thashMap.set(ele, (thashMap.get(ele) || 0) + 1)
        }

        for (let [key, value] of shashMap) {
            console.log(key)
            if (shashMap.get(key) != thashMap.get(key)) {
                return false
            }
           

        }
         return true;

    }
}
