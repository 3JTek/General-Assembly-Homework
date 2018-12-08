//window.addEventListener('DOMContentLoaded', () => {

const players = ['cpu','player']
const weaponsArr = ['rock','paper','scissors']
const numWeapons = weaponsArr.length

function randomGenerator(){
  const index = Math.floor(Math.random()*numWeapons)
  return weaponsArr[index]
}
//0 rock
//1 Paper
//2 Scissors
// 0 -> 1 -> 2 -> 0
function beats(weapon){
  const beatsArr = []
  beatsArr.push(weapon === 'rock'? 'scissors': weapon === 'scissors'? 'paper': 'rock')
  // console.log(weapon,beatsArr)
  return beatsArr
  //
  // console.log(`weapon:${weapon}`)
  // const beatsArr = []
  //
  // const weaponIndex = weaponsArr.indexOf(weapon)
  //
  //
  // //Every weapon beats the weapon with number one greater, except the last which wraps and defeats the first
  // const beatsIndex = (weaponIndex+1)%numWeapons
  // beatsArr.push(weaponsArr[beatsIndex])
  //
  // return beatsArr
}

function winner(cpuWeapon,playerWeapon){
  //log cpu weapon and what it beats
  console.log('cpuWeapon',cpuWeapon,beats(cpuWeapon))

  //log player weapon and what the cpu beats. if they are the same it should be true
  console.log(playerWeapon, beats(cpuWeapon),beats(cpuWeapon).includes(playerWeapon))

  const theWinner =  beats(cpuWeapon).includes(playerWeapon) ? 0: 1

  return theWinner
}






//})
