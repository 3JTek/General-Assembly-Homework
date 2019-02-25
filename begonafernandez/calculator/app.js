
var typeOfCalculator
var operator
var firstNumber
var secondNumber
var result

// Does use want basic or advanced calculator
typeOfCalculator = prompt('Do you want the advanced calculator(a) or the basic calculator(b)')
// if basic
if(typeOfCalculator === 'b') {
  //What operation does the user want to do?
  operator = prompt('What operation do you wish? Sum, Substraction, Division or Multiplication').toLowerCase()

  // what is the first number?
  firstNumber = parseFloat(prompt('What is the first number?'))

  // what is the second number?
  secondNumber = parseFloat(prompt('What is the second number?'))

  // Add the three inputs together
  switch(operator.toLowerCase()) {
    case 'sum':
      result = firstNumber + secondNumber
      console.log(result)
      break
    case 'substraction':
      result = firstNumber - secondNumber
      break
    case 'division':
      result = firstNumber / secondNumber
      break
    case 'multiplication':
      result = firstNumber * secondNumber
      break
    default:
      result = 'not a valid math operation'
  }

} else if (typeOfCalculator === 'a') {
  // if advanced
  operator = prompt('Do you want to square root or power a number?')
  if(operator === 'square root') {
    firstNumber = prompt('What number do you want to square root?')
    result = Math.sqrt(firstNumber)
  } else if (operator === 'power') {
    firstNumber = prompt('What number do you want to square?')
    result = Math.pow(firstNumber, 2)
  } else {
    confirm('not valid type of operation')
  }
  //if invalid
} else {
  confirm('not valid type of calculator')
}
//  show box with the answer
confirm(result)
