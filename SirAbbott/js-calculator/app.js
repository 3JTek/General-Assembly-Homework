// Create a calculator that takes input from the browser. The calculator should display the results using alert.

var calculating = true
var operator, firstNumber, secondNumber, answer


while (calculating) {

  var calcType = prompt('(a)dvanced, (b)asic or (o)ther')

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
  } else if (calcType === 'o') {
    operator = prompt('(b)mi or (l)oan')
  }

  if (operator === 'b') {
    var height = parseFloat(prompt('Your height in cm'))
    var weight = parseFloat(prompt('Your weight in kg'))
    answer = (weight / Math.pow(height, 2)) * 10000

  } else if (operator === 'l') {
    var principle = parseFloat(prompt('Loan amount'))
    var apr = parseFloat(prompt('Your APR terms') / 100 / 12)
    var months = parseFloat(prompt('how many years') * 12)
    var x = Math.pow(1 + apr, months)
    answer = (principle * x * apr) / (x - 1)

  }

  calculating = confirm('Your answer is ' + answer + '\nPress ok to calculate again or cancel to exit')

}