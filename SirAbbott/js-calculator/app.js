// Create a calculator that takes input from the browser. The calculator should display the results using alert.

var calculating = true
var num1
var num2
var operator

while (calculating) {

  var calcType = prompt('(a)dvanced or (b)asic')

  if (calcType === 'b') {

    operator = prompt('What would you like to do? +, -, *, / ')
    var firstNumber = parseInt(prompt('Enter the first number you would like to use'))
    var secondNumber = parseInt(prompt('Enter the second number you would like to use'))
    var answer = eval((firstNumber + operator + secondNumber))

    alert('Your answer is ' + answer)
  } else if (calcType === 'a') {

    operator = prompt('(s)quare root or (p)ower')
    num1 = parseInt(prompt('What is your first number'))
  }
  if (operator === 's') {
    alert(Math.sqrt(num1))
  } else if (operator === 'p') {
    num2 = parseInt(prompt('What is your second number'))
  }
  alert(Math.pow(num1, num2))

}