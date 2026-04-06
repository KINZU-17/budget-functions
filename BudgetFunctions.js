// calculateTax:Takes an amount and returns a 10% tax value.
function calculateTax(amount = 200) {
  return amount * 0.1;
}

// convertToUpperCase:Takes a string and returns it in all capital letters.
function convertToUpperCase(text = "hello garden") {
  return text.toUpperCase();
}

// findMaximum:Compares two numbers and returns the larger one.
function findMaximum(num1 = 12, num2 = 42) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// isPalindrome:Checks if a word reads the same forward and backward.
function isPalindrome(word = "radar") {
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

// calculateDiscountedPrice:Subtracts the discount percentage from the original price.
function calculateDiscountedPrice(originalPrice = 100, discountPercentage = 20) {
  const discountAmount = originalPrice * (discountPercentage / 100);
  return originalPrice - discountAmount;
}

module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice
};
