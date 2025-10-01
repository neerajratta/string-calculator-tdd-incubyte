const { add } = require('../src/stringCalculator');

describe('String Calculator', () => {
    test('returns 0 for empty string', () => {
        expect(add('')).toBe(0);
    });

    // New test case for single number
    test('returns number itself for single number', () => {
        expect(add('5')).toBe(5);
    });

    // New test case for two numbers separated by comma
    test('returns sum of two numbers', () => {
        expect(add('1,2')).toBe(3);
    });

    // New test case for unknown amount of numbers
    test('returns sum of unknown amount of numbers', () => {
        expect(add('1,2,3,4')).toBe(10);
    });

    // New test case for handling new lines between numbers
    test('handles new lines between numbers', () => {
        expect(add('1\n2,3')).toBe(6);
    });

    // New test case for custom delimiter
    test('supports custom single-character delimiter', () => {
        expect(add('//;\n1;2')).toBe(3);
    });

});