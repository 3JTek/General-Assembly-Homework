
var typeOfCalculator
var operator
var advancedOperator
var firstNumber
var secondNumber
var result

// Does use want basic or advanced calculator
typeOfCalculator = prompt('Do you want the advanced calculator(a) or the basic calculator(b)')
// if basic
if(typeOfCalculator === 'b') {
  //What operation does the user want to do?
  operator = prompt('What operation do you wish? Sum(s), Substraction, Division or Multiplication').toLowerCase()


  // what is the first number?
  while(isNaN(firstNumber)) {
    firstNumber = parseFloat(prompt('What is the first number?'))
    // firstNumber = parseFloat(userImput)
  }
  // what is the second number?
  while(isNaN(secondNumber)) {
    secondNumber = parseFloat(prompt('What is the second number?'))
  }

  // Add the three inputs together and show box with the answer
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
  advancedOperator = prompt('Do you want to square root or power a number?')
  if(advancedOperator === 'square root') {
    firstNumber = prompt('What number do you want to square root?')
    result = Math.sqrt(firstNumber)
  } else {
    firstNumber = prompt('What number do you want to square?')
    result = Math.pow(firstNumber, 2)
  }


} else {
  confirm('not valid type of calculator')
}

confirm(result)
