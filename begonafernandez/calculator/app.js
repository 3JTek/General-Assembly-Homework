var userImput
var operation
var firstNumber

//What operation does the user want to do?
while(!operation) {
  userImput = prompt('What operation do you wish? Sum, Substraction, Divition or Multiplication')
  switch(userImput.toLowerCase()) {
    case 'sum':
      operation = '+'
      break
    case 'substraction':
      operation = '-'
      break
    case 'division':
      operation = '/'
      break
    case 'Multiplication':
      operation = '*'
      break
  }
  console.log(operation)
}

// what is the first number?
while(isNaN(firstNumber)) {
  userImput = prompt('What is the first number?')
  firstNumber = parseFloat(userImput)
  console.log(firstNumber)
}
// what is the second number?

// Add the three inputs together and show box with the answer and option to do another operation

// if yes start again

// if not close
