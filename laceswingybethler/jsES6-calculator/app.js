//Calculator
console.log('working')
//PSEUDO METHOD 1
//ask user for input 1 - var desiredCalc (m d a or s)
var solution
var desiredCalc = prompt('What calculation are you after, pal? (m)ultiply, (d)ivide, (s)ubtract or (a)dd?')
//if none of the options, alert and loop back to start
if (desiredCalc !=='m' && desiredCalc !=='d' && desiredCalc!=='a' && desiredCalc!=='s') {
  alert('Lo siento, me no entiendo. Try again.')
}
// else {

//ask user for input 2 - firstNum
var firstNum = prompt('Using what number to start?')
//ask user for input 3 - secondNum
var secondNum = prompt('...with what number?')
//if desiredCalc === 'm' then solution = (firstNum*secondNum)
if (desiredCalc === 'm') {
  solution=(firstNum*secondNum)

//else if desiredCalc === 'd' then solution = (firstNum/secondNum)
} else if (desiredCalc === 'd'){
  solution=(firstNum/secondNum)

// else if desiredCalc === 'p' then solution = (firstNum+secondNum)
} else if (desiredCalc === 'p') {
  solution=(firstNum+secondNum)

//else if desiredCalc === 's' then solution = (firstNum-secondNum)
} else if (desiredCalc === 's') {
  solution=(firstNum-secondNum)
}
//display 'The answer is ' + solution and ask the user if they want to do another calculation (loop)
console.log('The answer is ' + solution)



// helper code
// var playing = true
// while(playing)  {
//   var randomNum = Math.ceil(Nath,random() * 10)
//   var userInput
//   //inner loop - AT FIRST THE VAR USERINPUT JUST HAS NO VALUE
//     while {userInput !== randomNum {
//       userInput = parseInt(prompt'Enter a number 1-10')
//     }
//     //end of inner loop
//     playing = confirm('Well done. Play again?')
//   }
//   console.log ('thanks for playing')
// }var playing = true
// while(playing)  {
//   var randomNum = Math.ceil(Nath,random() * 10)
//   var userInput
//   //inner loop - AT FIRST THE VAR USERINPUT JUST HAS NO VALUE
//     while {userInput !== randomNum {
//       userInput = parseInt(prompt'Enter a number 1-10')
//     }
//     //end of inner loop
//     playing = confirm('Well done. Play again?')
//   }
//   console.log ('thanks for playing')
// }


// var answer = prompt('What is 5 multiplied by 2?')
//
// if (answer === 10) {
//   alert('Wow! Correct!')
// } else {
//   alert('Wrong!')
// }






//PSEUDO METHOD 2
//ask user for input 1 - var desiredCalc (* / - +)
//ask user for input 2 - firstNum
//ask user for input 3 - secondNum
//concatenate 2 + desiredCalc + secondNum
//calculate the concatenated result
