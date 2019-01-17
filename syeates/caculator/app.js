console.log('Up and Running')

var number1 = parseFloat(prompt('Please enter First Number [1-9]'))
console.log(number1)
var Option1 = prompt('Please enter Option of \'+\' \'-\' \'*\' or \'/')
console.log(Option1)
var number2 = parseFloat(prompt('Please enter Second Number [1-9]'))
console.log(number2)

switch(Option1){
case "+" : alert(number1 + number2);  break
case "-" : alert(number1 - number2);  break
case "*" : alert(number1 * number2);  break
case "/" : alert(number1 / number2);  break
 default : alert('Not a correct operation')
}

console.log(result)
