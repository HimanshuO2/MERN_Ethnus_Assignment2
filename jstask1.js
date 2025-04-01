/**
 * Reverses a given number
 * @param {number} num - The number to be reversed
 * @returns {number} - The reversed number
 */
function reverseNumber(num) {
    // Handle invalid input
    if (typeof num !== 'number' || isNaN(num)) {
        console.error('Please provide a valid number');
        return NaN;
    }

    // Handle negative numbers
    const isNegative = num < 0;
    const absNum = Math.abs(num);

    // Convert to string, reverse it, and convert back to number
    const reversed = parseInt(absNum.toString().split('').reverse().join(''));

    // Return with original sign
    return isNegative ? -reversed : reversed;
}

// Test cases
console.log('Input: 32243');
console.log('Output:', reverseNumber(32243));

// Additional test cases
console.log('\nAdditional test cases:');
console.log('Input: -12345');
console.log('Output:', reverseNumber(-12345));
console.log('Input: 1000');
console.log('Output:', reverseNumber(1000));