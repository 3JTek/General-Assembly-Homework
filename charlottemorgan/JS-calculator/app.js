console.log('JS loaded')

var calculating = true
var operator, firstNumber, secondNumber, answer

while (calculating) {

  var calcType = prompt('(a)dvanced or (b)asic')

  if (calcType === 'b') {

    operator = prompt('What would you like to do? +, -, *, / ')
    firstNumber = parseFloat(prompt('Enter the first number you would like to use'))
    secondNumber = parseFloat(prompt('Enter the second number you would like to use'))
    answer = eval((firstNumber + operator + secondNumber))

  } else if (calcType === 'a') {

    operator = prompt('(s)quare root or (p)ower')
    firstNumber = parseFloat(prompt('What is your first number'))
    console.log(firstNumber)
  }
  if (operator === 's') {

    answer = Math.sqrt(firstNumber)
    console.log(firstNumber)
  } else if (operator === 'p'){
    secondNumber = parseFloat(prompt('What is your second number'))
    answer = (Math.pow(firstNumber, secondNumber))
  }

  calculating = confirm('Your answer is ' + answer + '\nPress ok to calculate again or cancel to exit')
}



























//create a prompt that asks which variable (+ - * /) the user wants to use
//create a prompt for the first number - use a variable to store
//create a prompt for the second number - use a variable to store
//create an alert for the answer of the equation. output of the variables
//create a loop to ask user if they need to do another calculation
//if yes then loop back to the beginning
//if no then alert saying thanks for using
//use break to allow quit?
