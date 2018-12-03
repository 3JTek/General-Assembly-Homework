
var running = true

while (running) {

  var userInput = prompt('Would you like the (b)asic or (a)dvanced calculator?')

  if(userInput === 'b') {
    var firstNumber = parseFloat(prompt('Enter the first number'))
    console.log(firstNumber)

    var operator = prompt('Enter operator (+ , - , * ,  or  /)')
    console.log(operator)

    var secondNumber = parseFloat(prompt('Enter the second number'))
    console.log(secondNumber)

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
    console.log(firstNumber)

    operator = prompt('Enter operator (s) square root or (p) power)')
    console.log(operator)

    secondNumber = parseFloat(prompt('Enter the second number'))
    console.log(secondNumber)

    switch(operator) {
      case 's' : Math.sqrt(firstNumber); break
      case 'p' : Math.pow(firstNumber, secondNumber); break
      default : alert('Not a correct operation')
    }

    answer = (firstNumber + secondNumber)
  }
  running = confirm('Your answer is ' + answer + '\nPress ok to start this wonderful calculator')
}
