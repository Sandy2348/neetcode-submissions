class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let leftPointer = 0;
        let maxLen = 0;
        let set = new Set();
        for(let rightPointer = 0; rightPointer<s.length; rightPointer++){
            while(set.has(s[rightPointer])){
set.delete(s[leftPointer]);
leftPointer++;
            }
            
                set.add(s[rightPointer]);
                maxLen = Math.max(maxLen,rightPointer-leftPointer+1);
            
        }
        return maxLen;
    }
}
