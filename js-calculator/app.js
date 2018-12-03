console.log('JavaScript Loaded')

var running = true
var answer

while(running) {
  var calcType = prompt('What would you like to calculate? Choose (m)ath or (mort)gage')

  if (calcType === 'm') {
    var operator = prompt('What would you like to do? Choose (a)dd, (s)ubtract, (m)ultiply or (d)ivide? Enter a, s, m or d.')
    var firstNumber = prompt('What is your first number?')
    firstNumber= parseFloat(firstNumber)
    var secondNumber = prompt('What is your second number?')
    secondNumber= parseFloat(secondNumber)
    if (operator === 'a') {
      answer = firstNumber + secondNumber
    } else if (operator === 's') {
      answer = firstNumber - secondNumber
    } else if (operator === 'm') {
      answer = firstNumber * secondNumber
    } else if (operator === 'd') {
      answer = firstNumber / secondNumber
    }
    alert('Your answer is ' + answer)
  } else

  if (calcType === 'mort'){
    alert('Congrats, you are in debt for 30 years')
  }
}
