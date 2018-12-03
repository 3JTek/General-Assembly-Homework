var userImput
var operator
var firstNumber
var secondNumber
var result

//What operation does the user want to do?
while(!operator) {
  userImput = prompt('What operation do you wish? Sum, Substraction, Division or Multiplication')
  operator = userImput.toLowerCase()
}

// what is the first number?
while(isNaN(firstNumber)) {
  userImput = prompt('What is the first number?')
  firstNumber = parseFloat(userImput)
}
// what is the second number?
while(isNaN(secondNumber)) {
  userImput = prompt('What is the second number?')
  secondNumber = parseFloat(userImput)
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
}
confirm(result)
