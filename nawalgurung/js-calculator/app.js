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
  var input = prompt('what would you like to do(m)Multiply, (d)Divide, (a)Addition, (s)Subtraction?')
  var num1 = parseInt(prompt('Please enter the first number'))
  var num2 = parseInt(prompt('Please enter the first number'))

  if(input==='m'){
    alert(num1 * num2)
  }else if(input==='d'){
    alert(num1 / num2)
  }else if(input==='a'){
    alert(num1 + num2)
  }else if(input==='s'){
    alert(num1 - num2)
  } else{
    alert('please choose m, d, a or s')
  }
  calcAgain = confirm('do you want to calcuate again?')
}
