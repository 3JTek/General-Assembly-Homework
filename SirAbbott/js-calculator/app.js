// Create a calculator that takes input from the browser. The calculator should display the results using alert.

// make a prompt where the user can decide what operator they want to use to calculate
while (calc !== 0) {

  var calc = prompt('Would you like to (a)dd, (s)ubtract, (m)ultiply or (d)ivide')
  var num1 = parseInt(prompt('What is your first number'))
  var num2 = parseInt(prompt('Enter the second number'))

  if (calc === 'a') {
    alert('The sum is ' + (num1 + num2))
  } else if (calc === 's') {
    alert('The diferrence is ' + (num1 - num2))
  } else if (calc === 'm') {
    alert('The diferrence is ' + (num1 * num2))
  } else if (calc === 'd') {
    alert('The diferrence is ' + (num1 / num2))
  }
}

// Must be able to +, -, / and *
// Must take user input using prompt
// Must be able display the result using alert
// Should use a loop!
// Should handle floats