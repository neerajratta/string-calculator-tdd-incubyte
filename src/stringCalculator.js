function add(numbers) {
  if (!numbers) return 0;
    
    let delimiter = /,|\n/;
    if (numbers.startsWith('//')) {
        const parts = numbers.split('\n');
        delimiter = new RegExp(parts[0].substring(2));
        numbers = parts[1];
    }
    // single, two or multiple numbers handled in one line
    return numbers.split(delimiter).reduce((sum, n) => sum + Number(n), 0);
}
module.exports = { add };
