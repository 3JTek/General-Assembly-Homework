alert('Here is Greg, your Calculator')

while(true){
  var type = prompt('Type adding(a), multiplying(m), subtracting(s), divide(d)')
  if(type === 'a'){
    var addFirst = parseFloat(prompt('What is your first number?'))
    var addSecond = parseFloat(prompt('What is your second number?'))
    alert(addFirst + addSecond)
  } else if (type === 'm'){
    var mulFirst = parseFloat(prompt('What is your first number?'))
    var mulSecond = parseFloat(prompt('What is your second number?'))
    alert(mulFirst * mulSecond)
  } else if(type === 's'){
    var subFirst = parseFloat(prompt('What is your first number?'))
    var subSecond = parseFloat(prompt('What is your second number?'))
    alert(subFirst - subSecond)
  } else if (type === 'd'){
    var divFirst = parseFloat(prompt('What is your first number?'))
    var divSecond = parseFloat(prompt('What is your second number?'))
  }
  alert(divFirst / divSecond)
  if(confirm('Math again?') === false){
    break
  }
}
