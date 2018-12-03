console.log('JavaScript Loaded')

var running = true
var answer

while(running) {
  var calcType = prompt('What would you like to calculate? Choose (s)imple maths, (a)dvanced maths, (m)ortgage, (bmi) or (trip)')

  //Simple Math Calculator
  if (calcType === 's') {
    var operator = prompt('What would you like to do? Choose (a)dd, (s)ubtract, (m)ultiply or (d)ivide?')

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

  //Advanced Math Calculator
  } else if (calcType === 'a') {
    var advancedOperator = prompt('What would you like to calculate? Choose square (root) or (pow)er?')

    //Square Root Calculator
    if (advancedOperator === 'root') {
      firstNumber = prompt('What would you like to caculate the square root of? Enter a number.')

      firstNumber= parseFloat(firstNumber)

      answer = Math.sqrt(firstNumber)

      alert('The square root of ' + firstNumber + ' is ' + answer)


    //Power Calculator
    } else if (advancedOperator === 'pow') {
      firstNumber = prompt('What is your first number?')

      firstNumber= parseFloat(firstNumber)

      secondNumber = prompt('What would you like to calculate ' + firstNumber + ' to the power of?')

      secondNumber= parseFloat(secondNumber)


      answer = Math.pow(firstNumber, secondNumber)
      alert(firstNumber + ' to the power of ' + secondNumber + ' is ' + answer)
    }

  // Mortgage Calculator ***Not sure that the calculation itself works, but the calculator does***
  } else if (calcType === 'm'){
    var loanAmount = prompt('How much do you need to borrow? Exclude currency symbols.')

    loanAmount = parseFloat(loanAmount)

    var interestRate = prompt('What is your interest rate? Exclude the % symbol')

    interestRate = parseFloat(interestRate)
    interestRate = interestRate/100


    var length = prompt('How many months would you like to pay back the mortgage over?')

    length = parseInt(length)

    answer = (loanAmount + (loanAmount*interestRate)) / length

    alert('Your monthly mortgage repayemnts will be £' + answer.toFixed(2))

  //BMI Calculator
  } else if(calcType === 'bmi') {

    var weight = prompt('What is your weight in kilograms? Exclude kg at the end of your weight.')

    weight = parseFloat(weight)

    var height = prompt('What is your height in meters? Exclude m at the end of your height.')

    height = parseFloat(height)

    answer = weight/(Math.sqrt(height))

    alert('Your Body Mass Index is ' + answer.toFixed(1) + 'kg/m^2')

  //Trip Calculator
  } else if(calcType === 'trip') {

    var distance = prompt('How far are you travelling in miles? Enter only a number.')

    distance = parseFloat(distance)

    var speed = prompt('How fast will you be driving in miles per hour? Enter only a number.')

    speed = parseFloat(speed)

    var mpg = prompt('What milage in mpg does your car get? Enter only a number.')

    mpg = parseFloat(mpg)

    var cost = prompt('What is the current price of a gallon petrol? Exclude any currency symbols.')

    cost = parseFloat(cost)

    for(var i = 60; i < speed; i++) {
      mpg = mpg-2
    }

    if (mpg <=0) {
      alert('You are driving too fast. Please operate your vehicle with care!')
    }

    var journeyTime = distance/speed
    var journeyCost = distance*(cost*mpg)

    alert('Your journey will take ' + journeyTime.toFixed(1) + ' hours and will cost £' + journeyCost.toFixed(2) + '.')
  }
}
