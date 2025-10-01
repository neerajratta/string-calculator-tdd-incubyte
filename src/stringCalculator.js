function add(numbers) {
  if (!numbers) return 0;

  // Extract delimiter and numbers part
  let delimiter = /,|\n/;
  if (numbers.startsWith('//')) {
    const [delimiterLine, numStr] = numbers.split('\n', 2);
    delimiter = new RegExp(delimiterLine.slice(2));
    numbers = numStr;
  }

  // Split numbers and calculate sum
  return numbers
    .split(delimiter)
    .map(Number)
    .reduce((sum, n) => sum + n, 0);
}

module.exports = { add };

module.exports = { add };
