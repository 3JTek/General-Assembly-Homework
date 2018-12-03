//User Chooses ADD, SUBTRACT, MULTIPLY, DIVIDE
//User Enters FIRST Number
//User Enters Second Number
//Calculate Result
//User is shown the result and asked if they want to start again



//THIS COULD BE REMOVED
var exitCalculator = false

//MAIN CALCULATOR WHILE LOOP
//EXIT THIS TO EXIT CALCULATOR
CALCULATOR: while (!exitCalculator){

  //Make type null to drop into TYPE loop
  var type = null
  //Clear ERROR message
  var error = ''

  //EXIT THIS TO EXIT TYPE
  var exitType = false
  TYPE:while(!exitType){

    //TYPE SELECT WHILE LOOP
    //While input is invalid prompt user
    while(!(type==='Advanced'||type==='Basic')){

      //Text for this prompt
      var promptText = 'Select the (B)asic or (A)dvance calculator'

      //WHILE TYPE SELECTION INPUT IS INVALID, PROMPT FOR INPUT
      while(type === null){
        //Ask user which type of calculator they want
        //If they previously put in in-valid answer, show the error
        type = prompt(error + promptText)

        //Debug
        console.log('Type selection' + operation)

        //If USER presses cancel, return to previous menu
        if(type ===null){

          //Confirm Exit
          if(confirm('Exit Calculator?')){
            // exitCalculator = true
            //EXIT CALCULATOR LOOP
            break CALCULATOR
          }
        }else{
          error = ''
          //If USER cancels the return to previous menu, ask for input
          console.log('exitCalculator Type - cancel ' + type)
        }
      }
      // console.log('TESTING type = '+type)

      //SWITCH USER INPUT TO SIMPLYFY TESTING
      //Allow for variances in input
      switch(type){
        case 'a':
        case 'advanced':
          type = 'Advanced'
          break
        case 'b':
        case 'basic':
          type = 'Basic'
          break
        case null:break
        default:
          //If invalid create error messagee
          error = type + ' is not an option!\n'

          //Set TYPE to NULL to loop TYPE selection WHILE
          type = null
      }
    }


    //IF USER SELECTED ADVANCED
    if(type==='Advanced'){
      //Add a new line to type for prompt display
      var typeText = type + '\n'

      var exitCalculation = false
      //MAIN ADVANCE CALCULATOR LOOP
      CALCULATION:while(!exitCalculation){

        //Set operation to null to enter operation selection WHILE
        var operation = null

        //Next prompts text
        promptText = 'Choose An Operation: (P)ower, (S)qureroot'

        //Clear Error and helper
        error = ''
        var helper = ''

        //WHILE USER INPUT IS NOT VALID ASK FOR PROMPT
        while((operation !== '^')&&
        (operation !== '√')){

          //SET n1 and n2 to NaN for Number entry WHILE loop
          var n1 = NaN
          var n2 = NaN

          //WHILE OPERATION INPUT IS INVALID, PROMPT USER
          while(operation === null){
            //Prompt user for input, display Calculator type, previous error and prompt text
            operation = prompt(typeText + error + promptText)

            //Debug
            console.log('Operation selection' + operation)

            //If USER input selected CANCEL open CONFIRM box
            if(operation ===null){
              if(confirm('Exit Advanced Calculator?')){

                // EXIT ADVANCED CALCULATOR LOOP
                type = null
                break TYPE
              }
              // error = ''

            }
            // else{
            //   // error = ''
            //   //console.log('exitCalculator - cancel ' + operation)
            // }
          }

          var operationString = ''
          error = ''

          var result
          operation = operation.toLowerCase()
          console.log('While not valid operation ' + operation)

          //User Chooses ADD, SUBTRACT, MULTIPLY, DIVIDE

          //User Chooses SQUAREROOT or POWER
          //Allow for variation of spelling
          switch(operation){
            case 's':
            case 'square':
            case 'squareroot':
            case 'root':
            case '√':
              operation = '√'
              helper = 'Square: n1 = X\n'
              break

            case 'p':
            case 'power':
            case '^':
              operation = '^'
              helper = 'Power: n1 ^ n2 = X\n'
              break

            default:
              error = operation +' is not an option!\n'
              operation=null
              console.log(error)

          }

        }

        //PROPMPT Text
        promptText = 'Enter the first Value'

        //WHILE n1 is not a valid input ask for valid imput
        // while(typeof n1 !== 'number'){
        while(isNaN(n1)){

          //PROPMPT for input
          n1 = prompt(typeText + error + helper + promptText)
          console.log('HERE'+n1)
          error = n1 +' is not a Number!\n'

          //IF user cancelled
          if(n1===null){
            if(confirm('Cancel Calculation?')){
              n1 = 'null'
              operation=null

              //Escape Calculation
              break CALCULATION
            }
            error = ''
          }
          //CONVERT input to FLOAT
          n1 = parseFloat(n1)

        }

        //Debu
        console.log('operation!'+ type)

        //IF OPERATION IS SQUARE ROOT, SHOW ONLY ONE NUMBER BOX
        if(operation!=='√'){
          promptText = 'Enter the second Value'
          error = ''

          //WHILE INPUT IS INVALID, PROMPT USER
          while(isNaN(n2)){
            n2 = prompt(typeText + error + helper + promptText)
            error = n2 +' is not a Number!\n'

            //IF USER CANCELS
            if(n2===null){
              if(confirm('Cancel Calculation?')){
                n1 = 'null'
                n2 = 'null'
                operation = null

                break CALCULATION
              }
              //USER CANCELS CANCEL
              error = ''
            }

            //CONVERT n2 to FLOAT
            n2 = parseFloat(n2)

          }
        }

        //DO THE OPERATION
        switch(operation){

          case '√': result = Math.sqrt(n1)
            //SHOW RESULT
            alert(operation+' '+ n1 +' = ' + result)
            break

          case '^': result = Math.pow(n1,n2)
            //SHOW RESULT
            alert(n1+' '+operation+' '+ n2 +' = ' + result)
            break

        }

        console.log('You have chosen: '+operationString)
        console.log('n1: '+n1)
        console.log('n2: '+n2)
        console.log('Result:'+result)
      }
    }else if(type==='Basic'){
      //BASIC CALCULATOR

      //ADD NEW LINE TO TYPE FROM PROMPT
      typeText = type + '\n'

      //THIS ISNT NEEDED
      exitCalculation = false

      //MAIN BASIC CALCULATOR WHILE LOOP
      //EXIT this to change TYPE
      CALCULATION:while(!exitCalculation){
        operation = null
        promptText = 'Choose An Operation: (A)dd, (S)ubtract, (M)ultiply (D)ivide'
        error = ''
        helper = ''

        //WHILE INPUT IS INVALID, PROMPT USER
        while((operation !== '+')&&
        (operation !== '-')&&
        (operation !== '*')&&
        (operation !== '/')){

          n1 = NaN
          n2 = NaN

          //WHILE INPUT IS INVALID, PROMPT USER
          while(operation === null){
            operation = prompt(typeText + error + promptText)
            console.log('Operation selection' + operation)

            //IF USER CANCELS
            if(operation ===null){
              //ASK FOR CONFIRMATION
              if(confirm('Exit Basic Calculator?')){
                // exitCalculator = true
                type = null
                break TYPE
              }
            }else{
              //CANCEL CANCEL
              error = ''
              console.log('exitCalculator - cancel ' + operation)
            }
          }

          //CLEAR STRINGS
          operationString = ''
          error = ''
          result = undefined

          //CONVERT TO LOWERCASE TO SIMPLIFY COMPARISON
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
            //IF INVALID SHOW ERROR MESSAGE
              error = operation +' is not an option!\n'
              operation=null
              console.log(error)
          }

        }

        //PROMPT TEXT
        promptText = 'Enter the first Value'

        //While n1 is not a valid input ask for valid imput
        // while(typeof n1 !== 'number'){
        //WHILE INPUT IS INVALID, PROMPT USER
        while(isNaN(n1)){

          n1 = prompt(typeText + error + helper + promptText)
          console.log('HERE'+n1)
          error = n1 +' is not a Number!\n'

          if(n1===null){
            if(confirm('Cancel Calculation?')){
              //NEEDED?
              n1 = null
              operation=null

              break CALCULATION
            }
            error = ''
          }
          //CONVERT TO FLOAT
          n1 = parseFloat(n1)

        }

        promptText = 'Enter the second Value'
        error = ''
        //WHILE INPUT IS INVALID, PROMPT USER
        while(isNaN(n2)){
          n2 = prompt(typeText + error + helper + promptText)
          error = n2 +' is not a Number!\n'

          if(n2===null){
            if(confirm('Cancel Calculation?')){

              //NEEDED?
              n1 = null
              n2 = null
              operation=null

              break CALCULATION
            }
            error = ''
          }

          n2 = parseFloat(n2)

        }

        //CALULATE RESULT
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
        //SHOW CALCULATION
        alert(n1+' '+operation+' '+ n2 +' = ' + result)

        console.log('You have chosen: '+operationString)
        console.log('n1: '+n1)
        console.log('n2: '+n2)
        console.log('Result:'+result)
      }
    }
  }
}
