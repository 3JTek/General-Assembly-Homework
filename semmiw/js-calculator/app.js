
//__

var first_number = prompt("Enter the first number", "");

var second_number = prompt("Enter the second number", "");

var answer = first_number + second_number;

document.write("The answer is " + answer);

//__

var operators = ['+', '-', 'x', '÷']
var keys = document.querySelectorAll('#calculator span')
var decimalAdded = false

for(var i = 0; i < keys.length; i++) {
	   keys[i].onclick = function(e) {
		var input = document.querySelector('.screen')
		var inputVal = input.innerHTML
		var btnVal = this.innerHTML}
  }

//__

var running = true

while (running){

  var randomNumber = Math.floor(Math.random() * 10) + 1
  console.log(randomNumber)

  var userInput = prompt('What is your number?')

  while (parseInt(userInput) !== randomNumber) {
    userInput = prompt('Guess again!')
    //running = confirm('Winner, would you like to play again?')
  }
  if (!userInput) {
    break
  }
