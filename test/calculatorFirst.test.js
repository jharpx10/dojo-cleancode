
const calculator = require('../src/calculatorFirst');

const x = 13;
const y = 5;
const x2 = -3;
const y2 = -5;

test('Add numbers using the add method', () => {
    expect(calculator.calculate("+", x, y)).toBe(18)
});
test('Subtract numbers using the subtract method', () => {
    expect(calculator.calculate("-", x, y)).toBe(8)
});
test('Multiply numbers using the multiply method', () => {
    expect(calculator.calculate("*", x, y)).toBe(65)
});
test('Divide numbers using the divide method', () => {
    expect(calculator.calculate("/", x, y)).toBe(2.6)
});
test('Find the remainder of dividing numbers using the modulo method', () => {
    expect(calculator.calculate("%", x, y)).toBe(3)
});

test('Testing negative numbers', () => {
    expect(calculator.calculate("+", x2, y2)).toBe(-8),
        expect(calculator.calculate("-", x2, y2)).toBe(2),
        expect(calculator.calculate("*", x2, y2)).toBe(15),
        expect(calculator.calculate("/", x2, y2)).toBe(0.6),
        expect(calculator.calculate("%", x2, y2)).toBe(-3)
});


