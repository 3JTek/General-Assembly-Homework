//What operation does the user want to do?

var operation
while(!operation) {
  var userImput = prompt('What operation do you wish? Sum, Substraction, Divition or Multiplication')
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
    default:
      alert('Do not understand. please try again')
  }
}

console.log(operation)



// what is the first number?

// what is the second number?

// Add the three inputs together and show box with the answer and option to do another operation

// if yes start again

// if not close
