class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let leftPointer = 0;
        for(let rightPointer = 0 ; rightPointer<prices.length; rightPointer++){
            if(prices[leftPointer]>prices[rightPointer]){
                leftPointer = rightPointer
            }
            profit = Math.max(profit,prices[rightPointer]-prices[leftPointer])
        }
        return profit;
    }
}
