/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // We need to buy before we can sell, so profit can't be negative.
  let maxProfit = 0;
  
  // Set the initial minimum price to the highest possible value.
  // This ensures the first price in the array will become our first `minPrice`.
  let minPrice = Infinity;

  // Loop through the array of prices just once.
  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];

    // If the current price is lower than our stored minimum, we have a new best day to buy.
    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    } 
    // Otherwise, check if selling today would give us a new maximum profit.
    else if (currentPrice - minPrice > maxProfit) {
      maxProfit = currentPrice - minPrice;
    }
  }

  return maxProfit;
};