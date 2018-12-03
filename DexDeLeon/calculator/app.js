var calc = true

while(calc){
  var type = ''
  var op = ''
  var num1 = NaN
  var num2 = NaN
  var num3 = NaN
  var result = 0

  // prompt the user to select basic or advanced calculator
  while (!(type==='a'||type==='b')){
    type = prompt('Select the (b)asic or (a)dvanced calculator')
  }

  //prompt the user to select a basic operation
  if (type==='b'){
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

  }else {
    // prompt the user to select an advanced operation
    while (!(op==='p'||op==='s'||op==='m')){
      op = prompt('Select an operation: (p)ower, (s)quare-root or (m)ortgage')
    }
    switch(op){
      // if power is selected
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

      // if square root is selected
      case 's':
        // prompt the user for the number to be calculated
        while(isNaN(num1)){
          num1 = parseFloat(prompt('Please enter a number (radicant)'))
        }
        // store the square root in result
        result = Math.sqrt(num1)
        break

      // if mortgage is selected
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
        result = num1*((num2*Math.pow(1+num2, num3))/(Math.pow(1+num2, num3)-1))
        break
    }
  }

  console.log('The answer is ' + result)

  // return the result and ask if another calculation will be made
  calc = confirm('The answer is ' + result + '\nSelect OK to calculate again, or cancel to end calculation')
}
