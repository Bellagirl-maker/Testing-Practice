
class Calculator {
  add = (a, b) => a + b
  subtract = (a, b) => a - b
  divide = (a, b) => a / b
  multiply = (a, b) => a * b
}

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

module.exports = {Calculator, capitalize}