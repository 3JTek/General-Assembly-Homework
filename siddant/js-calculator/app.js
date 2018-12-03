// console.log('here');

var calStatus = true

alert('welcome to my calculator')

while(calStatus){
  var opers = prompt('what would you like to do (m)Multiply, (d)division, (a)Addision, (s)substraction?')
  var num1 = parseInt(prompt('please enter the first number'))
  var num2 = parseInt(prompt('please enter the second number'))

  if(opers === 'm'){
    alert(num1 * num2)
  }else if(opers === 'd'){
    alert(num1 / num2)
  }else if(opers === 'a'){
    alert(num1 + num2)
  }else if(opers === 's'){
    alert(num1 - num2)
  }else{
    alert('the operation you have enter doesnt make sense to me please try again, with inteation of mfor Multiply, d for Division, a for Addision, s for Substraction')
  }
  calStatus = confirm('Do you wish to do the calculation again')
}
