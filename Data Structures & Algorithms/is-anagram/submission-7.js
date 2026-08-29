class Solution {
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false;
        }
        let sHash = new Map();
        let tHash = new Map();
        for (let ele of s) {
            sHash.set(ele, (sHash.get(ele) || 0) + 1);
        }
        for (let ele of t) {
            tHash.set(ele, (tHash.get(ele) || 0) + 1);
        }
        for (let [key] of sHash) {
            if (sHash.get(key) != tHash.get(key)) {
                return false
            }
        }
        return true;

    }
}
