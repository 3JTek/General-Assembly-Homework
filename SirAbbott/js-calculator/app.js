// Create a calculator that takes input from the browser. The calculator should display the results using alert.

var calculating = true
var operator, firstNumber, secondNumber, answer


while (calculating) {

  var calcType = prompt('(a)dvanced or (b)asic')

  if (calcType === 'b') {

    operator = prompt('+, -, * or / ')
    firstNumber = parseInt(prompt('Enter the first number you would like to use'))
    secondNumber = parseInt(prompt('Enter the second number you would like to use'))

    answer = eval((firstNumber + operator + secondNumber))
    // alert('Your answer is ' + answer)

  } else if (calcType === 'a') {

    operator = prompt('(s)quare root or (p)ower')
    firstNumber = parseInt(prompt('What is your first number'))

  }

  if (operator === 's') {
    answer = Math.sqrt(firstNumber)
  } else if (operator === 'p') {
    secondNumber = parseInt(prompt('What is your second number'))
    answer = Math.pow(firstNumber, secondNumber)
  }

  calculating = confirm('Your answer is ' + answer + '\nPress ok to calculate again or cancel to exit')

}