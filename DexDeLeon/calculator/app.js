var calc = true

while(calc){
  var op = ''
  var num1 = NaN
  var num2 = NaN

  //prompt the user to select an operation
  while (!(op==='a'||op==='s'||op==='d'||op==='m')){
    op = prompt('Select an operation (a)ddition, (s)ubtraction, (d)ivision, or (m)ultiplication')
  }
  //ask for the first number in the operation
  while (isNaN(num1)){
    num1 = parseFloat(prompt('Enter the first number'))
  }
  //then ask the second number in the operation
  while (isNaN(num2)){
    num2 = parseFloat(prompt('Enter the second number'))
  }
  var result
  //return the result and prompt to start again

  switch (op){
    case 'a':
      console.log('Operation is addition')
      result = num1 + num2
      break
    case 's':
      console.log('Operation is subtraction')
      result = num1 - num2
      break
    case 'd':
      console.log('Operation is division')
      result = num1 / num2
      break
    case 'm':
      console.log('Operation is multiplication')
      result = num1 * num2
      break
  }

  console.log('The answer is ' + result)

  calc = confirm('The answer is ' + result + '\nSelect OK to calculate again, or cancel to end calculation')

}
