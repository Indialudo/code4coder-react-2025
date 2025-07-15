export const getSubString = (text, subStringEnd) => {
    return text?.length > subStringEnd ? `${text?.substring(0, subStringEnd)}...` : text;
};

// discountHelper.js

export const calculateDiscountedPrice = (totalValue, discountPercent) => {
    // Convert string inputs to integers
    const totalValueNum = parseInt(totalValue, 10);
    const discountPercentNum = parseInt(discountPercent, 10);
  
    // Check if conversion is successful
    if (isNaN(totalValueNum) || isNaN(discountPercentNum)) {
      throw new Error('Invalid input. Both totalValue and discountPercent must be valid numbers or convertible strings.');
    }
  
    // Ensure that the discountPercent is within a valid range (0 to 100)
    if (discountPercentNum < 0 || discountPercentNum > 100) {
      throw new Error('Invalid discount percentage. It must be between 0 and 100.');
    }
  
    // Calculate the discounted price
    const discountAmount = (totalValueNum * discountPercentNum) / 100;
    const discountedPrice = totalValueNum - discountAmount;
  
    return discountedPrice;
  };
  
  // numberFormatterHelper.js

export const formatLargeNumber = (value) => {
    const numericValue = parseInt(value, 10);
  
    if (isNaN(numericValue)) {
      throw new Error('Invalid input. Must be a valid number or convertible string.');
    }
  
    if (numericValue < 1000) {
      return `${(numericValue).toFixed(0)}+`;
    } else if (numericValue < 100000) {
      return `${(numericValue / 1000).toFixed(0)}k+`;
    } else if (numericValue < 10000000) {
      return `${(numericValue / 100000).toFixed(0)} lac+`;
    } else if (numericValue < 1000000000) {
      return `${(numericValue / 10000000).toFixed(0)} million+`;
    } else if (numericValue < 10000000000) {
      return `${(numericValue / 1000000000).toFixed(0)} crore+`;
    } else {
      return `${(numericValue / 10000000000).toFixed(0)} billion+`;
    }
  };
  