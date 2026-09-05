class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let leftTraversal = 0;
        let countObj = {};
        let maxLen = 0;
        let maxFreq = 0;
        for(let rightTraversal = 0; rightTraversal<s.length; rightTraversal++){
            countObj[s[rightTraversal]] = (  countObj[s[rightTraversal]] || 0)+1;
            maxFreq = Math.max(maxFreq,countObj[s[rightTraversal]]);
            
            while(((rightTraversal - leftTraversal +1)-maxFreq) > k){
countObj[s[leftTraversal]]--;
leftTraversal++;
            }
            maxLen = Math.max(maxLen,(rightTraversal - leftTraversal) +1)
        }
        return maxLen;

        
    }
}
