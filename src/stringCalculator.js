function add(numbers) {
  if (!numbers) return 0;
    return numbers.split(',').reduce((sum, n) => sum + Number(n), 0);
}
module.exports = { add };
