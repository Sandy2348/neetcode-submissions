class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
       let leftPointer = 0;
       let profit = 0;
       for(let rightPointer = 1; rightPointer<prices.length; rightPointer++){
        if(prices[rightPointer]<prices[leftPointer]){
            leftPointer = rightPointer;
        }
        else{
            profit = Math.max(profit, prices[rightPointer]-prices[leftPointer]);
        }
       }
       return profit;
    }
}
