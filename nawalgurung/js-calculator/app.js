/*

Create a calculator that takes input from the browser. The calculator should display the results using alert.

### Basic Calculator

1. Must be able to +, -, / and *
2. Must take user input using prompt
3. Must be able display the result using alert
4. Should use a loop!
5. Should handle floats
*/

var calcAgain = true

while(calcAgain){

  var input = prompt('what would you like to do (m)Multiply, (d)Divide, (a)Addition, (s)Subtraction, (sqr)Square Root, (pow)Power?')

  //check if input is pow & prompt for baseNum/expoNum
  if(input==='pow'){
    var baseNum = parseInt(prompt('Please enter the base number'))
    var expoNum = parseInt(prompt('Please enter the exponent number'))
    alert(Math.pow(baseNum, expoNum))
  //check if input is not sqr & pow and prompt for first num & second num
  }if(input !== 'sqr' && input !=='pow'){
    var num1 = parseInt(prompt('Please enter the first number'))
    var num2 = parseInt(prompt('Please enter the second number'))
  //if input = sqr then prompt for only 1 num
  }if(input==='sqr'){
    var squareNum = parseInt(prompt('Please enter the number you want to square'))
    alert(Math.sqrt(squareNum))
  } else if(input==='m'){
    alert(num1 * num2)
  } else if(input==='d'){
    alert(num1 / num2)
  } else if(input==='a'){
    alert(num1 + num2)
  } else if(input==='s'){
    alert(num1 - num2)
  } else{
    alert('please choose m, d, a, s, sqr or pow')
  }
  calcAgain = confirm('do you want to calcuate again?')
}
