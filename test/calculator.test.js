
const calculator = require('../src/calculator');

const NUMBER_13 = 13;
const NUMBER_5 = 5;
const NUMBER_MINUS_3 = -3;
const NUMBER_8 = 8;
const NUMBER_MINUS_5 = -5;

test('Add numbers using the add method', () => {
    expect(calculator.add(NUMBER_13, NUMBER_5)).toBe(18)
});
test('Subtract numbers using the subtract method', () => {
    expect(calculator.subtract(NUMBER_13, NUMBER_5)).toBe(8)
});
test('Multiply numbers using the multiply method', () => {
    expect(calculator.multiply(NUMBER_13, NUMBER_5)).toBe(65)
});
test('Divide numbers using the divide method', () => {
    expect(calculator.divide(NUMBER_13, NUMBER_5)).toBe(2.6)
});
test('Find the remainder of dividing numbers using the modulo method', () => {
    expect(calculator.modulo(NUMBER_13, NUMBER_5)).toBe(3)
});

test('Testing negative numbers', () => {
        expect(calculator.add(NUMBER_MINUS_3, NUMBER_MINUS_5)).toBe(-8),
        expect(calculator.subtract(NUMBER_MINUS_3, NUMBER_MINUS_5)).toBe(2),
        expect(calculator.multiply(NUMBER_MINUS_3, NUMBER_MINUS_5)).toBe(15),
        expect(calculator.divide(NUMBER_MINUS_3, NUMBER_MINUS_5)).toBe(0.6),
        expect(calculator.modulo(NUMBER_MINUS_3, NUMBER_MINUS_5)).toBe(-3)
});


