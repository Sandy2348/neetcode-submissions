class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    //TC = o(n),SC = o(n)
    isPalindrome(s) {
        let newStr = s.replaceAll(/[^A-Z0-9a-z]/g, "");
        let leftPointer = 0;
        let rightPointer = newStr.length-1;
       
        while(leftPointer<rightPointer){
            if(newStr[leftPointer].toLowerCase()!=newStr[rightPointer].toLowerCase()){
                return false;
            }
            leftPointer++;
            rightPointer--;
        }
        return true;
    }
}
