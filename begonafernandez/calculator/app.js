
var typeOfCalculator
var operator
var firstNumber
var secondNumber
var result

// Does use want basic or advanced calculator
typeOfCalculator = prompt('Do you want the advanced calculator(a) or the basic calculator(b)')
console.log(typeOfCalculator)
// if basic
if(typeOfCalculator === 'a') {
  //What operation does the user want to do?
  while(!operator) {
    operator = prompt('What operation do you wish? Sum, Substraction, Division or Multiplication').toLowerCase()
  }

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
  confirm(result)
} else if (typeOfCalculator === 'b') {
  // if advanced
  confirm('advanced')
} else {
  confirm('not valid type of calculator')
}
