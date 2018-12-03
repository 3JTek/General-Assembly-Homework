var operation
var number1
//Make an indefinite loop
// while(true){
var calculatorMode = prompt('What type of calcul do you want (b)asic, (a)dvanced, (o)ther')
switch (calculatorMode){
  case 'b':
    operation = prompt('What operation do you want to execute "+", "-", "*", "/"')
    number1 = prompt('Enter the first number')
    var number2 = prompt('Enter the second number')
    alert(eval(number1+operation+number2))
    break
  case 'a':
    operation = prompt('What operation do you want to execute "(p)ow", "(s)quare root"')
    switch(operation){
      case 'p':
        number1 = prompt('Enter a number')
        number2 = prompt('Enter a power')
        alert(Math.pow(number1, number2))
        break
      case 's':
        number1 = prompt('Enter a number')
        alert(Math.sqrt(number1))
        break
    }
    break
}


// }
// switch(operation){
//   case '+':
//     alert(parseFloat(number1) + parseFloat(number2))
//     break
//   case '-':
//     alert(parseFloat(number1) - parseFloat(number2))
//     break
//   case '*':
//     alert(parseFloat(number1) * parseFloat(number2))
//     break
//   case '/':
//     alert(parseFloat(number1) / parseFloat(number2))
//     break
// }
