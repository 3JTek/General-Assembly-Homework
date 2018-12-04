
var running = true

while (running) {

  var userInput = prompt('Would you like the (b) basic or (a) advanced calculator?')

  if(userInput === 'b') {
    var firstNumber = parseFloat(prompt('Enter the first number'))

    var operator = prompt('Enter operator (+ , - , * ,  or  /)')

    var secondNumber = parseFloat(prompt('Enter the second number'))

    switch(operator) {
      case '+' : (firstNumber + secondNumber); break
      case '-' : (firstNumber - secondNumber); break
      case '*' : (firstNumber * secondNumber); break
      case '/' : (firstNumber / secondNumber); break
      default : alert('Not a correct operation')
    }
    var answer = (firstNumber + secondNumber)
    alert(answer)

  } else if(userInput === 'a') {
    firstNumber = parseFloat(prompt('Enter the first number'))

    operator = prompt('Enter operator (s) square root or (p) power)')

  } if (userInput === 's') {

    switch(operator) {
      case 's' : Math.sqrt(firstNumber); break
    }

    answer = (firstNumber)

  }  else if (userInput === 'p') {

    secondNumber = parseFloat(prompt('Enter the second number'))

    switch(operator) {
      case 'p' : Math.pow(firstNumber, secondNumber); break
      default : alert('Not a correct operation')
    }

    answer = (firstNumber + secondNumber)
  }
  running = confirm('Your answer is ' + answer + '\nPress OK to use this wonderful calculator again, or press Cancel to quit.')
}
