class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let profit = 0;
        for(let right = 1; right< prices.length; right++){
if(prices[left]>prices[right]){
    left = right;
}
profit = Math.max(profit,prices[right]-prices[left])
        }
        return profit;
    }
}
