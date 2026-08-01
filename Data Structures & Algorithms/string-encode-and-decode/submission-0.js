class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let newStr = '';
        for(let ele of strs){
            newStr+=`${ele.length}#${ele}`
        }
        return newStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let newArr = [];
        let i = 0;
        while(i<str.length){
            let pos = str.indexOf('#',i);
            let len = parseInt(str.slice(i,pos));
            i = pos+1;
            let newVal = str.slice(i,len+i);
            newArr.push(newVal);
            i+=len
        }
    return newArr
    }
}
