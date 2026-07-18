class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        console.log(s);
        let newStr = s.replaceAll(/[^A-Z0-9a-z]/g, "");;
        console.log("newStr",newStr);
        let leftPointer = 0;
        let rightPointer = newStr.length-1;
        while(leftPointer<rightPointer){
            if(newStr[rightPointer]>='A' || newStr[rightPointer]<='Z' || newStr[rightPointer]>='a' || newStr[rightPointer]<='z' || newStr[rightPointer]>=0|| newStr[rightPointer]<=9){
 if(newStr[rightPointer].toLowerCase()!=newStr[leftPointer].toLowerCase()){
                console.log("left",newStr[leftPointer],"right",newStr[rightPointer])
                return false
            }
            }
           
            leftPointer++;
            rightPointer--;
        }
        return true;


    }
}
