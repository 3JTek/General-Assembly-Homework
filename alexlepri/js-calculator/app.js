alert("Here is your Calculator")

while(true) {
  var type = prompt('Type adding(a), multiply(m), subtracting(s), divide(d)')
  if(type === 'a')
  var firstNumber = parse(prompt('What is your first number?'))
  var seconsNumber = parseFloat(prompt('What is your second number'))
  alert(firstNumber+secondNumber)
} else if (type === 's') {
  var divNumber1 = parseFloat(prompt('What is your first number?'))
  var divNumber2 = parseFloat(prompt('What is your second number?'))
  alert('divNumber1 / divNumber2')
} else if (type === 'm') {
  var multiNumber = parseFloat (prompt('What is your first number?'))
  alert('multiNumber * multiNumber2')
} else if (type === 's') {
  var subNum = parseFloat (prompt('What is your first number?'))
  var subNum2 = parseFloat (prompt('What is your second number?'))
  alert(divNum - divNum2)
  if(confirm('Play again?')) === false {
    break
  }
}
