function add(numbers) {
  if (!numbers) return 0;
    
    numbers = numbers.replace(/\n/g, ',');
    // single, two or multiple numbers handled in one line
    return numbers.split(',').reduce((sum, n) => sum + Number(n), 0);
}
module.exports = { add };
