// Create a calculator that takes input from the browser. The calculator should display the results using alert.

// make a loop
var calc
var num1
var num2
while (calc !== 0) {
  // make a prompt where the user can decide what operator they want to use to calculate -> store the answer
  var typeOfCalc = prompt('Would you like a (b)asic or (a)dvanced calculator')
  if (typeOfCalc === 'b') {
    calc = prompt('Would you like to (a)dd, (s)ubtract, (m)ultiply or (d)ivide')
    num1 = parseInt(prompt('What is your first number'))
    num2 = parseInt(prompt('Enter the second number'))
    // Second prompt once the first is selected
    //Use stored value to alert an answer
    if (calc === 'a') {
      alert('The sum is ' + (num1 + num2))
    } else if (calc === 's') {
      alert('The diferrence is ' + (num1 - num2))
    } else if (calc === 'm') {
      alert('The diferrence is ' + (num1 * num2))
    } else if (calc === 'd') {
      alert('The diferrence is ' + (num1 / num2))
    }
  } else if (typeOfCalc === 'a') {
    calc = prompt('Would you like (p)ower or (s)quare root ')
    num1 = parseInt(prompt('What is your first number'))
  }
  if (calc === 'p') {
    num2 = parseInt(prompt('Enter the second number'))
    alert('The sum is ' + Math.pow(num1, num2))
  } else if (calc === 's') {
    alert('The sum is ' + Math.sqrt(num1))
  }
}