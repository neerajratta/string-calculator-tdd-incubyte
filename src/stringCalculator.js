function add(numbers) {
    if (!numbers) return 0;

    // Default delimiters
    let delimiter = /,|\n/;

    if (numbers.startsWith('//')) {
        const [delimiterLine, numStr] = numbers.split('\n', 2);
        numbers = numStr;

        // Match all delimiters inside []
        const matches = delimiterLine.match(/\[(.*?)\]/g);

        if (matches) {
            // Extract actual delimiters without [ ]
            const delimiters = matches.map(d => d.slice(1, -1));

            // Escape regex special characters
            const escaped = delimiters.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

            // Combine into regex
            delimiter = new RegExp(escaped.join('|'));
        } else {
            // Single char delimiter like //;\n
            delimiter = new RegExp(delimiterLine.slice(2));
        }
    }

    // Convert to numbers
    const nums = numbers.split(delimiter).map(Number);

    // Check for negatives
    const negatives = nums.filter(n => n < 0);
    if (negatives.length) {
        throw new Error(`negatives not allowed: ${negatives.join(',')}`);
    }

    // Sum numbers ignoring >1000
    return ignoreBigNumbers(nums).reduce((sum, n) => sum + n, 0);
}


// Helper function to filter out numbers greater than 1000
function ignoreBigNumbers(nums) {
    return nums.filter(n => n <= 1000);
}

module.exports = { add };
