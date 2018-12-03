console.log('working')

// prompt user to enter a number
// prompt user to enter an action indicator of plus, minus, multiply or divide
// prompt user to enter a second number
// generate an alert displaying value of calculation

var action

var firstValue = parseFloat(prompt('Please enter an initial number'))
console.log(firstValue)

while(true) {
  action = prompt('Please enter a modifier of +, *, - or /')
  console.log(action)
  if (action === '+' || action === '*' || action === '-' || action === '/') {
    break
  } else{
    alert("Please enter a valid function")
  }
}




// while (action !== '+' || action !== '*' || action !== '-' || action !== '/') {
//   alert('Input not valid')
//   break
// }

var secondValue = parseFloat(prompt('Please enter a second number'))
console.log(secondValue)


switch (action) {
  case "+": alert(firstValue + secondValue)
  case "-": alert(firstValue - secondValue)
  case "*": alert(firstValue * secondValue)
  case "/": alert(firstValue / secondValue)
  default: alert('Not a correct operation')
}
