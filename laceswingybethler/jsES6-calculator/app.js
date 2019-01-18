//Calculator
console.log('working')
//PSEUDO METHOD 1
//ask user for input 1 - var desiredCalc (m d a or s)
var solution

var calculating = true
while(calculating)  {
  var desiredCalc = prompt('What calculation are you after, pal? (m)ultiply, (d)ivide, (s)ubtract or (a)dd?')
  //if press cancel break; if none of the options, alert and loop back to start
  if (desiredCalc === null) {
    break
  }
  if (desiredCalc !=='m' && desiredCalc !=='d' && desiredCalc!=='a' && desiredCalc!=='s') {
    alert('Lo siento, me no entiendo. Try again.')

  } else {

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
    // console.log('The answer is ' + solution)
    calculating = confirm('The answer is ' + solution + '. Play again?')
    //   }
  }
}



//PSEUDO METHOD 2
//ask user for input 1 - var desiredCalc (* / - +)
//ask user for input 2 - firstNum
//ask user for input 3 - secondNum
//concatenate 2 + desiredCalc + secondNum
//calculate the concatenated result
