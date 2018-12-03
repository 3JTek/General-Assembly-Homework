var question = prompt('What would you like to do: +, -, * or /?')
if (question === '+'){
  var add1 = parseFloat(prompt('Enter your first number'))
  var add2 = parseFloat(prompt('Enter your second number'))
  var add3 = (add1 + add2)
  confirm('The answer is ' + add3)
} else if (question === '-'){
  var minus1 = parseFloat(prompt('Enter your first number'))
  var minus2 = parseFloat(prompt('Enter your second number'))
  var minus3 = (minus1 - minus2)
  confirm('The answer is ' + minus3)
} else if (question === '*'){
  var multiply1 = parseFloat(prompt('Enter your first number'))
  var multiply2 = parseFloat(prompt('Enter your second number'))
  var multiply3 = (multiply1 * multiply2)
  confirm('The answer is ' + multiply3)
} else if (question === '/'){
  var divide1 = parseFloat(prompt('Enter your first number'))
  var divide2 = parseFloat(prompt('Enter your second number'))
  var divide3 = (divide1 / divide2)
  confirm('The answer is ' + divide3)
} else {
  alert('Please choose a valid option')
}
