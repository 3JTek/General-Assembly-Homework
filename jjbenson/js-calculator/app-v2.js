
var exitCalc = false
var state = 0
var loopCount = 0
var error
var promptText
var cancelMessage
var type
var operation
var n1
var n2
var result
var resultString
var valueValid
var helper
var valueString
var calcFinished

//MAIN WHILE
while(!exitCalc){
  //Clear error messages
  error = ''
  //INIFITE LOOP PROTECTION
  if(loopCount++ > 1000)break

  switch(state){
    //CHOOSE CALC
    case 0:
      //CALCULATOR
      //New calculation
      calcFinished = false
      helper = ''
      promptText = 'Select the (B)asic or (A)dvance calculator'
      cancelMessage = 'Exit Calculator'
      break
    case 1:
      //OPERATION
      cancelMessage = 'Exit Calculation'
      switch(value){
        case 'a':
          promptText = 'Choose An Operation: (P)ower, (S)qureroot'
          type = 'advanced'
          break
        case 'b':
          promptText = 'Choose An Operation: (A)dd, (S)ubtract, (M)ultiply (D)ivide'
          type = 'basic'
          break
        default : console.log('case 1 error')
      }
      break

    case 2:
      //FIRST VALUE
      promptText = 'Enter the first Value'
      break

    case 3:
      //SECOND VALUE
      n1 = value
      if(operation!=='√'){
        promptText = 'Enter the second Value'
        break
      }

    //Fallthrough if squareroot
    case 4:
      //RESULT
      n2 = value
      state = 0
      promptText = 'Select the (B)asic or (A)dvance calculator'

      switch(operation){
        case '^' :
          result = Math.pow(n1,n2)
          resultString = n1+' '+operation+' '+ n2 +' = ' + result
          break

        case '√':
          result = Math.sqrt(n1)
          resultString = operation+' '+ n1 +' = ' + result
          break

        case '+': result = n1 + n2
          resultString = n1+' '+operation+' '+ n2 +' = ' + result
          break

        case '-': result = n1 - n2
          resultString = n1+' '+operation+' '+ n2 +' = ' + result
          break

        case '*': result = n1 * n2
          resultString = n1+' '+operation+' '+ n2 +' = ' + result
          break

        case '/': result = n1 / n2
          resultString = n1+' '+operation+' '+ n2 +' = ' + result
          break

        default : console.log('case 4 error')
      }
      alert(resultString)
      calcFinished = true
      break
  }
  if(!calcFinished){
    valueValid=false
    while(!valueValid){
      var value = prompt(error + helper + promptText)
      valueString = value


      if(value===null){
        if(confirm(cancelMessage)){
          valueValid=true
          switch(state){
            case 0:  exitCalc = true
              break
            case 1:
            case 2:
            case 3:
            case 4:
            //This is -1 as we add 1 at the end of the loop
              state = -1
              break
            default: console.log('cancel message error')
          }
        }
      }else{
        value = value.toLowerCase()
        console.log('case: '+state + ' value: '+value)
        switch(state){
          case 0:
            switch(value){
              case 'a':
                valueValid=true
                break
              case 'b':
                valueValid=true
                break

              default:error = valueString + ' is not an option!\n'
            }
            break

          case 1:
            switch(type){
              case 'advanced':
                switch(value){
                  case 's':
                  case 'square':
                  case 'squareroot':
                  case 'root':
                  case '√':
                    helper = 'Square: n1 = X\n'
                    value = operation = '√'
                    valueValid=true
                    break
                  case 'p':
                  case 'power':
                  case '^':
                    helper = 'Power: n1 ^ n2 = X\n'
                    value = operation = '^'
                    valueValid=true
                    break

                  default: error = valueString + ' is not an option!\n'
                }
                break

              case 'basic':
                switch(value){
                  case 'a':
                  case 'add':
                  case 'plus':
                  case '+':
                    helper = 'Add: n1 + n2 = X\n'
                    operation = '+'
                    valueValid=true
                    break

                  case 's':
                  case 'subtract':
                  case 'minus':
                  case '-':
                    operation = '-'
                    valueValid=true
                    break

                  case 'm':
                  case 'multiply':
                  case 'times':
                  case '*':
                    helper = 'Multiply: n1 * n2 = X\n'
                    operation = '*'
                    valueValid=true
                    break

                  case 'd':
                  case 'divide':
                  case '/':
                    helper = 'Divide: n1 / n2 = X\n'
                    operation = '/'
                    valueValid=true
                    break

                  default: error = valueString + ' is not an option!\n'
                }
                break
            }
            break

          case 2:
          case 3:
            value = parseFloat(value)
            if(!isNaN(value)){
              valueValid=true
            }else{
              error = valueString + ' is not a number!\n'
            }
            break
          default: console.log('prompt case 3 error')
        }
      }
    }
    state++
  }
  console.log(state)
}
