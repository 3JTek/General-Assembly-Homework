var calculatorMode, operation, number1, number2
//Make an indefinite loop
// while(true){
switch (calculatorMode = prompt('What type of calcul do you want (b)asic, (a)dvanced, (o)ther')){
  case 'b':
    alert(simpleOperation())
    break

  case 'a':
    operation = prompt('What operation do you want to execute "(p)ow", "(s)quare root"')
    number1 = prompt('Enter a number')
    switch(operation){
      case 'p':
        number2 = prompt('Enter a power')
        alert(Math.pow(number1, number2))
        break
      case 's':
        alert(Math.sqrt(number1))
        break
    }
    break

  case 'o':
    operation = prompt('What operation do you want to execute "(l)oan", "(b)mi or (t)rip calculator')
    switch(operation){
      case 'l':
        alert(monthlyPayment())
        break
      case 'b':
        alert(bodyMassIndex())
        break
      case 't':
        alert(tripCalculator())
        break
    }
    break
}

//Calculate simple operation +, -, /, *
function simpleOperation () {
  operation = prompt('What operation do you want to execute "+", "-", "*", "/"')
  number1 = prompt('Enter the first number')
  number2 = prompt('Enter the second number')
  return eval(number1+operation+number2)
}
//Calculate Monthly Loan Repayment
function monthlyPayment() {
  var p = prompt('Total amount of money borrowed?') //monthly mortgage payment
  var n = prompt('Number of years for the repayment ?') * 12 //number of payments months
  var i = prompt('Interest Rate per year?') / 100 / 12 //monthly interest rate
  return p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1)
}
//Calculate Body
function bodyMassIndex(){
  var mass, height
  var unit = prompt('Do you want to use (k)g or (l)b?') //Choose between kilos and pounds
  if(unit === 'k'){
    mass = prompt('What is your weight in kg?') //mass to be calculated
    height = prompt('What is your height in cm?')/100 //height to be calculated
    return mass / Math.pow(height,2)
  } else if(unit === 'l'){
    mass = prompt('What is your weight in lb?') //mass to be calculated
    height = prompt('What is your height in inches?') //height to be calculated
    return 703 * (mass / Math.pow(height,2))
  }
}

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
