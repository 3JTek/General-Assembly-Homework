var calc = true

while(calc){
  var type = ''
  var op = ''
  var num1 = NaN
  var num2 = NaN
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
    // given the operator selected, calculate the appropriate result
    result = eval(num1 + op + num2)

  }else {
    // prompt the user to select an advanced operation
    while (!(op==='p'||op==='s')){
      op = prompt('Select an operation: (p)ower or (s)quare-root')
    }
    switch(op){
      case 'p':
        while(isNaN(num1)){
          num1 = parseFloat(prompt('Please enter the base number'))
        }
        while(isNaN(num2)){
          num2 = parseFloat(prompt('Please enter the exponent'))
        }
        result = Math.pow(num1, num2)
        break

      case 's':
        while(isNaN(num1)){
          num1 = parseFloat(prompt('Please enter a number (radicant)'))
        }
        result = Math.sqrt(num1)
    }
  }

  console.log('The answer is ' + result)

  // return the result and ask if another calculation will be made
  calc = confirm('The answer is ' + result + '\nSelect OK to calculate again, or cancel to end calculation')
}
