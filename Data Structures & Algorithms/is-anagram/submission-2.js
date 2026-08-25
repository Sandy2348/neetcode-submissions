class Solution {
    isAnagram(s, t) {
        if(s.length!=t.length){
            return false;
        }
        let sHash = new Map();
        let tHash = new Map();
        for(let ele of s){
            sHash.set(ele,(sHash.get(ele)||0)+1);
        }
         for(let ele of t){
            tHash.set(ele,(tHash.get(ele)||0)+1);
        }
        for(let ele of s){
            if(sHash.get(ele)!=tHash.get(ele)){
                return false
            }
        }
        return true;
       
}
}
