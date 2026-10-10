class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    //TC = o(n),SC = o(n)
    isPalindrome(s) {
       let newStr = s.replaceAll(/[^a-zA-Z0-9]/g,'').toLowerCase();
      let leftPointer =0;
      let rightPointer = newStr.length-1;
      while(leftPointer<rightPointer){
        if(newStr[leftPointer]!=newStr[rightPointer]){
            return false
        }
        leftPointer++;
        rightPointer--;
      }
      return true
    }
}
