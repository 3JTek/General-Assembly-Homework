var question = prompt('What would you like to do: +, -, *, /, power-of or square-root')
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
} else if (question === 'power-of'){
  var power1 = parseFloat(prompt('Enter your first number'))
  var power2 = parseFloat(prompt('Enter your second number'))
  var power3 = Math.pow(power1,power2)
  confirm('The answer is ' + power3)
} else if (question === 'square-root'){
  var square1 = parseFloat(prompt('Enter a number'))
  var square2 = Math.sqrt((square1))
  confirm('the answer is ' + square2)
} else {
  alert('Please choose a valid option')
}
