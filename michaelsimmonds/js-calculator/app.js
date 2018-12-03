console.log('working')

// prompt user to enter a number
// if not number, prompt user to input valid number
// prompt user to enter an action indicator of plus, minus, multiply or divide
// if not valid action indicator, promt user to input valid action indictor
// prompt user to enter a second number
// if not number, prompt user to input valid number
// generate an alert displaying value of calculation

var action
var firstValue
var secondValue

while (true) {
  firstValue = parseFloat(prompt('Please enter an initial number'))
  console.log(firstValue)
  if (isNaN(firstValue) != true) {
    break
  } else {
    alert('Please enter a valid number')
  }
}

while (true) {
  action = prompt('Please enter a modifier of +, *, - or /')
  console.log(action)
  if (action === '+' || action === '*' || action === '-' || action === '/') {
    break
  } else {
    alert('Please enter a valid function')
  }
}

while (true) {
  secondValue = parseFloat(prompt('Please enter a second number'))
  console.log(firstValue)
  if (isNaN(secondValue) != true) {
    break
  } else {
    alert('Please enter a valid number')
  }
}

switch (action) {
  case '+': alert(firstValue + secondValue)
    break
  case '-': alert(firstValue - secondValue)
    break
  case '*': alert(firstValue * secondValue)
    break
  case '/': alert(firstValue / secondValue)
    break
  default: alert('Not a correct operation')
    break
}
