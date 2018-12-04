alert('Welcome to the Calculator')

while(true){
  var calcType = prompt('Please type the correct letter: Multiply(m). Divide(d). Add(a). Subtract(s)')
  var firstNum = parseFloat(prompt('Type the first number'))
  var secondNum = parseFloat(prompt('Type the second number'))
  if(calcType === 'a'){
    alert(firstNum + secondNum)
  } else if(calcType === 's'){
    alert(firstNum - secondNum)
  } else if(calcType === 'm'){
    alert(firstNum * secondNum)
  } else if(calcType === 'd'){
    alert(firstNum / secondNum)
  }
  if(confirm('Play again?') === false){
    break
  }
}
