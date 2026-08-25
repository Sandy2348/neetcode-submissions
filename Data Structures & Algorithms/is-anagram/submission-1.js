class Solution {
    isAnagram(s, t) {
        if(s.length!=t.length){
            return false;
        }
        let sHash = new Map();
        let tHash = new Map();
        for(let ele of s){
            sHash[ele] = (sHash[ele]||0)+1;
        }
         for(let ele of t){
            tHash[ele] = (tHash[ele]||0)+1;
        }
        console.log("sHash",sHash,"tHash",tHash);
        for(let ele of s){
            if(sHash[ele]!=tHash[ele]){
                return false
            }
        }
        return true;
       
}
}
