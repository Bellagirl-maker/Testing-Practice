const  { Calculator, capitalize} = require('./calculator.js')


describe('Test the Calculator class', () => {
    const calculator = new Calculator();

    test('the sum', () => {
        expect(calculator.add(1, 2)).toBe(3)
    })

    test('the subtract', () => {
        expect(calculator.subtract(3, 2)).toBe(1)
    })

    test('the divide', () => {
        expect(calculator.divide(8, 2)).toBe(4)
    })

    test('the multiply', () => {
        expect(calculator.multiply(4, 3)).toBe(12)
    })

})

describe('Capitalized the first character', () => {
    const capitalizeFirstChar = capitalize;
    it('should capitalized the first char', () => {
        expect(capitalizeFirstChar('hello world')).toBe('Hello world')
    })
})