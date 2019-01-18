var calculatorMode, operation, number1, number2
var keepGoing = true

while(keepGoing){

  switch (calculatorMode = prompt('What type of calcul do you want (b)asic, (a)dvanced, (o)ther')){
    case 'b':
      operation = prompt('What operation do you want to execute "+", "-", "*", "/"')
      number1 = prompt('Enter the first number')
      number2 = prompt('Enter the second number')
      alert('The result is ' + eval(number1+operation+number2))
      break
    case 'a':
      switch(operation = prompt('What operation do you want to execute "(p)ow", "(s)quare root"')){
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

    case 'o':
      switch(operation = prompt('What operation do you want to execute "(l)oan", "(b)mi or (t)rip calculator')){
        case 'l':
          var p = prompt('Total amount of money borrowed?') //monthly mortgage payment
          var n = prompt('Number of years for the repayment ?') * 12 //number of payments months
          var i = prompt('Interest Rate per year?') / 100 / 12 //monthly interest rate
          alert(Math.floor(p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1)))
          break
        case 'b':
          var unit = prompt('Do you want to use (m)etric or (i)mperial?')
          if(unit === 'm'){
            bodyMassIndex('kg', 'cm', 1)
          } else if (unit === 'i') {
            bodyMassIndex('lb', 'in', 703)
          }
          break
        case 't':
          var distance = prompt('What is the distance?')
          var milePerGallon = prompt('What is the fuel efficiency?')
          var costPerGallon = prompt('What is the cost per gallon?')
          var speed = prompt('What is the distance the speed')
          var duration = distance / speed
          var adjustedMilePerGallon = speed > 60 ? milePerGallon -= 2:milePerGallon
          var cost = Math.floor((distance/ adjustedMilePerGallon) * costPerGallon)
          alert('Your trip will take ' + duration + ' hours and cost £' + cost + '.')
          break
      }
      break
  }
  keepGoing = confirm('Do you wish to continue using the calculator')
}

//Calculate Body
function bodyMassIndex(massUnit, heightUnit, conversion){
  var mass = prompt('What is your weight in ' + massUnit + '?') //mass to be calculated
  var height = prompt('What is your height in '+ heightUnit +'?')/(massUnit === 'kg'?100:1) //height to be calculated
  return alert(Math.floor(conversion * (mass / Math.pow(height,2))))
}
