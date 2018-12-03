//User Chooses ADD, SUBTRACT, MULTIPLY, DIVIDE
//User Enters FIRST Number
//User Enters Second Number
//Calculate Result
//User is shown the result and asked if they want to start again


//While invalid operation, re-prompt


var exitCalculator = false
CALCULATOR: while (!exitCalculator){
  var type
  while(!(type==='a'||type==='b')){
    type = prompt('Select the (B)asic or (A)dvance calculator')
  }

  if(type='a'){

  }else if(type='b'){

  var exitCalculation = false
  CALCULATION:while(!exitCalculation){
    var operation = null
    var promptText = 'Choose An Operation: (A)dd, (S)ubtract, (M)ultiply (D)ivide'
    var error = ''
    var helper = ''

    // while(operation !== ('+'||'-'||'*'||'/')){
    while((operation !== '+')&&
        (operation !== '-')&&
        (operation !== '*')&&
        (operation !== '/')){

      var n1 = NaN
      var n2 = NaN

      while(operation === null){
        operation = prompt(error + promptText)
        console.log('Operation selection' + operation)
        if(operation ===null){
          if(confirm('Exit Calculator?')){
            // exitCalculator = true
            break CALCULATOR
          }
        }else{
          console.log('exitCalculator - cancel ' + operation)
        }
      }

      var operationString = ''
      error = ''

      var result
      operation = operation.toLowerCase()
      console.log('While not valid operation ' + operation)

      //User Chooses ADD, SUBTRACT, MULTIPLY, DIVIDE
      switch(operation){
        case 'a':
        case 'add':
        case 'plus':
        case '+':
          operation = '+'
          helper = 'Add: n1 + n2 = X\n'
          break

        case 's':
        case 'subtract':
        case 'minus':
        case '-':
          operation = '-'
          helper = 'Subtract: n1 - n2 = X\n'

          break

        case 'm':
        case 'multiply':
        case 'times':
        case '*':
          operation = '*'
          helper = 'Multiply: n1 * n2 = X\n'

          break

        case 'd':
        case 'divide':
        case '/':
          operation = '/'
          helper = 'Divide: n1 / n2 = X\n'

          break

        default:
          error = operation +' is not an option!\n'
          operation=null
          console.log(error)

      }

    }
  }

    promptText = 'Enter the first Value'

    //While n1 is not a valid input ask for valid imput
    // while(typeof n1 !== 'number'){
    while(isNaN(n1)){

      n1 = prompt(error + helper + promptText)
      console.log('HERE'+n1)
      error = n1 +' is not a Number!\n'

      if(n1===null){
        if(confirm('Cancel Calculation?')){
          n1 = 'null'
          break CALCULATION
        }
        error = ''
      }

      n1 = parseFloat(n1)

    }

    promptText = 'Enter the second Value'
    error = ''
    while(isNaN(n2)){
      n2 = prompt(error + helper + promptText)
      error = n2 +' is not a Number!\n'

      if(n1===null){
        if(confirm('Cancel Calculation?')){
          n1 = 'null'
          n2 = 'null'
          break CALCULATION
        }
        error = ''
      }

      n2 = parseFloat(n2)

    }

    switch(operation){

      case '+': result = n1 + n2
        break

      case '-': result = n1 - n2
        break

      case '*': result = n1 * n2
        break

      case '/': result = n1 / n2
        break

    }
    alert(n1+' '+operation+' '+ n2 +' = ' + result)
    console.log('You have chosen: '+operationString)
    console.log('n1: '+n1)
    console.log('n2: '+n2)
    console.log('Result:'+result)
  }
}
