alert('Here is G Calculator')

while(true){
  var type = prompt('Type adding(a), multiplying(m), subtracting(s), divide (d),')
  if(type === 'a'){
    var firstNumber = parseFloat(prompt('what is your first number?'))
    var secondNumber = parseFloat(prompt('what is your second number?'))
    alert(firstNumber+secondNumber)
  } else if (type === 'm'){
    var firstMul = parseFloat(prompt('what is your first number?'))
    var secondMul = parseFloat(prompt('what is your second number?'))
    alert(firstMul*secondMul)
  } else if(type === 's'){
    var firstSub = parseFloat(prompt('what is your first number?'))
    var secondSub = parseFloat(prompt('what is your second number?'))
    alert(firstSub-secondSub)
  } else if (type === 'd'){
    var firstDiv = parseFloat(prompt('what is your first number?'))
    var secondDiv = parseFloat(prompt('what is your second number?'))
  }
  alert(firstDiv/secondDiv)
  if(confirm('Play again?') === false){
    break
  }
}
