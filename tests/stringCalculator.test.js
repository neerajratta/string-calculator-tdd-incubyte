const { add } = require('../src/stringCalculator');

describe('String Calculator', () => {
    test('returns 0 for empty string', () => {
        expect(add('')).toBe(0);
    });

    // New test case for single number
    test('returns number itself for single number', () => {
        expect(add('5')).toBe(5);
    });

});