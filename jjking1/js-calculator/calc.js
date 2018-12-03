alert('Welcome to the Calculator')

while(true){
  var calcType = prompt('Please type the correct letter: Multiply(m). Divide(d). Add(a). Subtract(s)')
  // addition
  if(calcType === 'a'){
    var firstA = parseFloat(prompt('Type the first number'))
    var secondA = parseFloat(prompt('Type the second number'))
    alert(firstA + secondA)
  } else if(calcType === 's'){
    var firstS = parseFloat(prompt('Type the first number'))
    var secondS = parseFloat(prompt('Type the second number'))
    alert(firstS - secondS)
  } else if(calcType === 'm'){
    var firstM = parseFloat(prompt('Type the first number'))
    var secondM = parseFloat(prompt('Type the second number'))
    alert(firstM * secondM)
  } else if(calcType === 'd'){
    var firstD = parseFloat(prompt('Type the first number'))
    var secondD = parseFloat(prompt('Type the second number'))
    alert(firstD + secondD)
  }
  if(confirm('Play again?') === false){
    break
  }
}
