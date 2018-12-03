console.log('working')

// prompt user to enter a number
// prompt user to enter an action indicator of plus, minus, multiply or divide
// prompt user to enter a second number
// generate an alert displaying value of calculation

var firstValue = prompt('Please enter an initial number')
console.log(firstValue)

var action = prompt('Please enter a modifier of +, *, - or /')
console.log(action)

var secondValue = prompt('Please enter a second number')
console.log(secondValue)

switch (action) {
  case "+": alert(parseInt(firstValue) + parseInt(secondValue))
  case "-": alert(parseInt(firstValue) - parseInt(secondValue))
  case "*": alert(parseInt(firstValue) * parseInt(secondValue))
  case "/": alert(parseInt(firstValue) / parseInt(secondValue))
}
