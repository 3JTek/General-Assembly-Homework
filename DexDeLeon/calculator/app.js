var calc = true

// calculator loops until cancel is selected at the end of a calculation
while(calc){
  var type = ''
  var op = ''
  var num1 = NaN
  var num2 = NaN
  var num3 = NaN
  var num4 = NaN
  var time, cost
  var result = 0

  // INITIAL PROMPT

  // prompt the user to select basic or advanced calculator
  while (!(type==='a'||type==='b')){
    type = prompt('Select the (b)asic or (a)dvanced calculator')
  }

  // BASIC CALCULATOR

  // if basic calculator is selected...
  if (type==='b'){

    // ...prompt the user to select a basic operation
    while (!(op==='+'||op==='-'||op==='/'||op==='*')){
      op = prompt('Select an operation: addition(+), subtraction(-), division(/), or multiplication(*)')
    }

    //ask for the first number in the operation
    while (isNaN(num1)){
      num1 = prompt('Enter the first number')
    }

    //then ask the second number in the operation
    while (isNaN(num2)){
      num2 = prompt('Enter the second number')
    }

    // given the operator selected, calculate the appropriate result and store
    result = eval(num1 + op + num2)

  // otherwise...
  }else {

    // ADVANCED CALCULATOR

    // ...prompt the user to select an advanced operation
    while (!(op==='p'||op==='s'||op==='m'||op==='b'||op==='t')){
      op = prompt('Select an operation: (p)ower, (s)quare-root, (m)ortgage, (b)mi or (t)rip calculator')
    }

    // check user input
    switch(op){

      // POWER
      // if power is selected...
      case 'p':

        // prompt the user for base and exponent numbers
        while(isNaN(num1)){
          num1 = parseFloat(prompt('Please enter the base number'))
        }
        while(isNaN(num2)){
          num2 = parseFloat(prompt('Please enter the exponent'))
        }

        // calculate the power and store in result
        result = Math.pow(num1, num2)
        break


      // SQUARE ROOT
      // if square root is selected...
      case 's':

        // prompt the user for the number to be calculated
        while(isNaN(num1)){
          num1 = parseFloat(prompt('Please enter a number (radicant)'))
        }

        // store the square root in result
        result = Math.sqrt(num1)
        break

      // MORTGAGE
      // if mortgage is selected...
      case 'm':
        while(isNaN(num1)){

          // prompt user for principal loan
          num1 = parseFloat(prompt('Please enter the principal of the loan'))
        }
        while(isNaN(num2)){

          // prompt user for yearly interest rate in % and divide by 1200 for the monthly rate as a decimal
          num2 = parseFloat(prompt('Please enter the yearly interest rate in %')/1200)
        }
        while(isNaN(num3)){

          // prompt user for number of payments
          num3 = parseFloat(prompt('Please enter the number of payments'))
        }

        // calculate monthly payment and store in result
        result = (num1*((num2*Math.pow(1+num2, num3))/(Math.pow(1+num2, num3)-1))).toFixed(2)

        // reassign result as a string that will make sense in the result message
        result = '£' + result + ' per month'
        break


      // BMI
      // if bmi is selected...
      case 'b':
        while(isNaN(num1)){

          // prompt user to select metric or imperial units
          num1 = parseInt(prompt('Select 1 for metric and 2 for imperial units'))
        }
        if (num1===1){
          while(isNaN(num2)){

            // if metric is selected, prompt for metric input
            num2 = parseFloat(prompt('Please enter your weight in kilograms'))
          }
          while(isNaN(num3)){
            num3 = parseFloat(prompt('Please enter your height in metres'))
          }

          // calculate the bmi and store in result
          result = num2/Math.pow(num3, 2)

        // otherwise, if imperial has been selected...
        }else {

          while(isNaN(num2)){

            // prompt the user for imperial input
            num2 = parseFloat(prompt('Please enter your weight in pounds'))
          }
          while(isNaN(num3)){
            num3 = parseFloat(prompt('Please enter your height in inches'))
          }

          // calculate the bmi and store in result
          result = 703*(num2/Math.pow(num3, 2))
        }
        break

      // TRIP CALCULATOR
      // if trip is selected
      case 't':
        while(isNaN(num1)){
          num1 = parseFloat(prompt('Please enter the trip distance'))
        }
        while(isNaN(num2)){
          num2 = parseFloat(prompt('Please enter the fuel efficiency (mpg)'))
        }
        while(isNaN(num3)){
          num3 = parseFloat(prompt('Please enter the cost of fuel per gallon'))
        }
        while(isNaN(num4)){
          num4 = parseFloat(prompt('Please enter the driving speed (mph)'))
        }

        if (num4>60){
          num3 -= 2*(num4-60)
          if (num3<=0){
            break
          }
        }
        time = (num1/num4).toFixed(1)
        cost = (num1*(num3/num2)).toFixed(2)

        break

      // Since all prompts are checking for valid inputs, this should never run
      default:
        alert('Calculation Error')
    }
  }

  // if the trip calculator was selected and the speed is acceptable...
  if (op==='t' && num3>0){

    // ...return the result and ask if another calculation will be made
    calc = confirm('Your trip will take ' + time + ' hours and cost £' + cost + '\nSelect OK to calculate again, or cancel to end calculation')

  // otherwise, if the speed was too high...
  }else if (op==='t'){
    // ...return the error message and prompt user to start again or quit
    calc = confirm('Speed is too high! Select OK start again, or cancel to quit.')

  // otherwise, for all other calculations...
  }else {
    // ...return the result and ask if another calculation will be made
    console.log('The answer is ' + result)
    calc = confirm('The answer is ' + result + '\nSelect OK to calculate again, or cancel to end calculation')
  }
}
