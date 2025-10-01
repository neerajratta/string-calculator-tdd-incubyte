# String Calculator

This is a TDD implementation of a String Calculator in JavaScript.

## Features

- Returns `0` for empty string
- Returns the number itself for a single number
- Returns sum of two or more numbers
- Supports unknown amount of numbers
- Handles new lines between numbers (`\n`)
- Supports custom single-character delimiter (`//;\n1;2`)
- Throws exception for negative numbers
- Ignores numbers greater than 1000
- Supports delimiters of any length (`//[***]\n1***2***3`)
- Supports multiple delimiters (`//[*][%]\n1*2%3`)
- Supports multiple delimiters with length longer than one character (`//[**][%%]\n1**2%%3`)

## Running Tests

Install dependencies:

```bash
npm install

npm test

