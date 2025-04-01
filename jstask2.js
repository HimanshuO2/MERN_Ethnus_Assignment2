/**
 * Sorts a string alphabetically
 * @param {string} str - The string to be sorted
 * @returns {string} - The sorted string
 */
function sortString(str) {
    // Handle invalid input
    if (typeof str !== 'string') {
        console.error('Please provide a valid string');
        return '';
    }

    // Convert string to array, sort it, and join back to string
    return str.split('').sort().join('');
}

// Test case with the example input
console.log('Input: "webmaster"');
console.log('Output:', sortString('webmaster'));

// Additional test cases
console.log('\nAdditional test cases:');
console.log('Input: "JavaScript"');
console.log('Output:', sortString('JavaScript'));
console.log('Input: ""');
console.log('Output:', sortString(''));