// console.log('here');

var calStatus = true

alert('welcome to my calculator')

while(calStatus){
  var options = prompt('what would you like to do (b) Basic  or (a) Advacnce or (o) others')
  if(options === 'b'){
    var opers = prompt('what would you like to do (m)Multiply, (d)division, (a)Addision, (s)substraction?')
    var num1 = parseInt(prompt('please enter the first number'))
    var num2 = parseInt(prompt('please enter the second number'))
    if(typeof num1 === 'number' && typeof num2 === 'number'){
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
    }else{
      alert('you didnt put a number')
    }

  }else if(options === 'a'){
    opers = prompt('what would you like to do (sqrt)square root or (power) power')
    if(opers === 'sqrt'){
      num1 = parseInt(prompt('please enter the first number'))
      if(typeof num1 === 'number' ){
        alert(Math.sqrt(num1))
      }else{
        alert('you didnt put a number')
      }

    }else if(opers === 'power'){
      num1 = parseInt(prompt('please enter the first number'))
      num2 = parseInt(prompt('please enter the second number'))
      if(typeof num1 === 'number' && typeof num2 === 'number'){
        alert(Math.pow(num1, num2))
      }else{
        alert('you didnt put a number')
      }
    }else{
      alert('you may entered the wrong thing please use (sqrt) for square root or (power) for power')
    }
  }else if(options === 'o'){
    opers = prompt('what would you like to do (mortgage) Mortgage calculator or (BMI) BMI calculator or (trip calculator) Trip Calculator ')
    if(opers === 'mortgage'){
      num1 = parseFloat(prompt('please enter the principal of loan'))
      num2 = parseFloat(prompt('please enter the yearly interest rate'))
      var num3 = parseFloat(prompt('please enter the number of payment in months'))
      if(typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number'){
        //var monthly = num1 * num2 * (Math.pow(1 + num2, num3)) / (Math.pow(1 + num2, num3) - 1)
        //console.log()
        //alert('your montly mortage is '+monthly)
        alert('currenlty under develeopment ')
      }


    }else if(opers === 'BMI'){
      opers = prompt('imperail or  metric system')
      var bmi
      if(opers === 'metric'){
        num1 = parseFloat(prompt('weight in kg'))
        num2 = parseFloat(prompt('height in meter'))
        bmi = num1 / (Math.pow(num2, 2))

      }else if(opers === 'imperail'){
        num1 = parseFloat(prompt('weight in pound'))
        num2 = parseFloat(prompt('height in inches'))
        bmi = (num1 / (Math.pow(num2, 2)))*703
      }else{
        alert('you may entered the wrong thing please use (metric) for metric or (imperail) for imperail')
      }
      if(typeof bmi !== 'number' ){
        alert('you have not entered a number please try again')
      }else if(bmi < 18.5){
        alert('your BMI is '+bmi+' you are Underweight')
      }else if(bmi >=18.5 && bmi <= 24.9){
        alert('your BMI is '+bmi+' you are Normal weight')
      }else if(bmi >=25 && bmi <= 29.9){
        alert('your BMI is '+bmi+' you are Overweight weight')
      }else{
        alert('your BMI is '+bmi+' you are Obesity')
      }

    }else if(opers === 'trip calculator'){
      num1 = parseFloat(prompt('please enter your distance'))
      num2 = parseFloat(prompt('please enter your fuel efficiency (mpg)'))
      var gallon = parseFloat(prompt('please enter your cost per gallon'))
      var speed = parseFloat(prompt('please enter your speed'))
      if(typeof num1 === 'number' && typeof num2 === 'number' && typeof gallon === 'number' && typeof speed === 'number'){
        alert('currenlty under develeopment ')
      }
    }else{
      alert('you may entered the wrong thing please use (power) for power or (BMI) for BMI')
    }

  }else{
    alert('you may entered the wrong thing please use (b) for basic or (a) for advacne or (o) for others' )
  }
  calStatus = confirm('Do you wish to do the calculation again')
}
