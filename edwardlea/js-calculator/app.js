// variables
var type
var operator
var numberOne
var numberTwo
var answer
var loanAmount
var period
var rate
var calculator = true

// Welcome user to Calculator
alert('Welcome to JS Calculator')

// calculator loop
while(calculator){

  // Ask user for type of calculator
  type = prompt('What type of calculator do you want? (b)asic, (a)dvanced, (mo)rtage, (BM)I, (t)rip calculator')
  if(type === 'basic' || type === 'b'){

    // Ask user what operation they want to perform using prompt
    operator = prompt('Please enter operation (a)dd, (s)ubtract, (m)ultiply, (d)ivide')

    // Ask user for first number
    numberOne = parseFloat(prompt('Please enter first number'))

    // Ask user for second number
    numberTwo = parseFloat(prompt('Please enter second number'))

    // Carry out operation based on operation
    if(operator === 'a' || operator === 'add'){
      answer = numberOne + numberTwo
    }else if(operator === 's' || operator === 'subtract'){
      answer = numberOne - numberTwo
    } else if(operator === 'd' || operator === 'divide'){
      answer = numberOne / numberTwo
    } else if(operator === 'm' || operator === 'multiple'){
      answer = numberOne * numberTwo
    }

    // Alert answer
    alert('The answer is: ' + answer)
  }else if(type === 'advanced' || type === 'a'){
    operator = prompt('Please enter operation (p)ower, (s)quare root')
    if(operator === 'p' || operator === 'power'){

      // Ask user for first number
      numberOne = parseFloat(prompt('Please enter first number'))

      // Ask user for second number
      numberTwo = parseFloat(prompt('Please enter second number'))

      // Carry out operation based on operation
      answer = Math.pow(numberOne,numberTwo)
    }else if(operator === 's' || operator === 'square root'){

      // Ask user for  number
      numberOne = parseFloat(prompt('Please enter number'))

      // Carry out operation based on operation
      answer = Math.sqrt(numberOne)
    }

    // Alert answer
    alert('The answer is: ' + answer)
  } else if(type === 'mortage' || type === 'mo'){

    // Ask user what the loan amount is
    loanAmount = parseFloat(prompt('Please enter loan amount:'))

    // Ask user for loan term
    period = parseFloat(prompt('Please enter mortage term in months:'))

    // Ask user for interest rate
    rate = ((parseFloat(prompt('Please enter interest rate as a percentage:')))/100)/12

    console.log(loanAmount)
    console.log(period)
    console.log(rate)





    alert('Feature not ready yet!')
  } else if(type === 'BMI' || type === 'bm'){
    alert('Feature not ready yet!')

  }else if(type === 'trip calculator' || type === 't'){
    alert('Feature not ready yet!')
  }

  // Ask user if they want to play again
  calculator = confirm('Want to do another calcuation?')
}
