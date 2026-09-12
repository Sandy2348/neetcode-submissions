class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let left = 0;
        let count1 = {};
        let count2 = {};

        for (let ch of s1) {
            count1[ch] = (count1[ch] || 0) + 1;
        }

        for (let right = 0; right < s2.length; right++) {
            let ch = s2[right];

            count2[ch] = (count2[ch] || 0) + 1;

            // Remove left character if window is too large
            if (right - left + 1 > s1.length) {
                let removeChar = s2[left];

                count2[removeChar]--;

                if (count2[removeChar] === 0) {
                    delete count2[removeChar];
                }

                left++;
            }

            // Check when window size equals s1
            if (right - left + 1 === s1.length) {

                let same = true;

                for (let ch in count1) {
                    if (count1[ch] !== count2[ch]) {
                        same = false;
                        break;
                    }
                }

                // Also make sure count2 doesn't have extra characters
                if (same && Object.keys(count1).length === Object.keys(count2).length) {
                    return true;
                }
            }
        }

        return false;
    }
}