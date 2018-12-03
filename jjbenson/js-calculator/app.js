//User Chooses ADD, SUBTRACT, MULTIPLY, DIVIDE
//User Enters FIRST Number
//User Enters Second Number
//Calculate Result
//User is shown the result and asked if they want to start again


//While invalid operation, re-prompt


var exitCalculator = false
CALCULATOR: while (!exitCalculator){

  var exitCalculation = false
  CALCULATION:while(!exitCalculation){
    var operation = null
    var promptText = 'Choose An Operation: (A)dd, (S)ubtract, (M)ultiply (D)ivide'
    var error = ''
    var helper = ''

    while(operation !== ('+'||'-'||'*'||'/')){
      var n1 = null
      var n2 = null

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
          operation = 'Multiply'
          helper = 'Multiply: n1 * n2 = X\n'

          break

        case 'd':
        case 'divide':
        case '/':
          operation = 'Divide'
          helper = 'Divide: n1 / n2 = X\n'

          break

        default:
          // operation=''
          error = 'That is not an option!\n'
          console.log(error)

      }

    }
    // var test = confirm('Cancel Calculation?')
    // console.log(test)



    promptText = 'Enter the first Value'

    //While n1 is not a valid input ask for valid imput
    while(typeof n1 !== 'number'){
      // while(n1 === null){
      //   n1 = parseFloat(prompt(error + helper + promptText))
      //   console.log(n1)
      //   if(n1 === null){
      //     if(confirm('Exit Calculation?')){
      //       // exitCalculator = true
      //       break CALCULATION
      //     }
      //   }else{
      //       console.log(n1)
      //   }
      // }

      n1 = parseFloat(prompt(error + helper + promptText))
      if(isNaN(n1)){
        if(confirm('Cancel Calculation?')){
          n1 = 'null'
          break CALCULATION
        }
      }
      console.log(n1)
      error = 'That is Not a Number!\n'
    }

    promptText = 'Enter the second Value'
    error = ''
    while(typeof n2 !== 'number'){
      n2 = parseFloat(prompt(error + helper + promptText))
      if(isNaN(n2)){
        if(confirm('Cancel Calculation?')){
          n1 = 'null'
          n2 = 'null'
          break CALCULATION
        }
      }
      console.log(n2)
      error = 'That is Not a Number!\n'
    }
    // }
    // while(isNaN(n2)){
    //   n2 = parseFloat(prompt(error + helper + promptText))
    //   error = 'That is Not a Number!\n'
    // }

    // if ((typeof n1) === Number){
    //   console.log(typeof n1)
    //   // var n2 = parseFloat(prompt('Enter the second Value'))
    // }else{
    //   error = 'n1 is not a number'
    // }

    // if ((typeof n2)=== Number){
    //
    // }else{
    //   error = 'n2 is not a number'
    //
    // }


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
