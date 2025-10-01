function add(numbers) {
    if (!numbers) return 0;

    // Extract delimiter and numbers part
    let delimiter = /,|\n/;
    if (numbers.startsWith('//')) {
        const [delimiterLine, numStr] = numbers.split('\n', 2);
        delimiter = new RegExp(delimiterLine.slice(2));
        numbers = numStr;
    }

    // Convert to numbers
    const nums = numbers.split(delimiter).map(Number);

    // Check for negatives
    const negatives = nums.filter(n => n < 0);
    if (negatives.length) {
        throw new Error(`negatives not allowed: ${negatives.join(',')}`);
    }

    // Sum ignoring > 1000
    return nums
        .filter(n => n <= 1000)
        .reduce((sum, n) => sum + n, 0);
}

module.exports = { add };
