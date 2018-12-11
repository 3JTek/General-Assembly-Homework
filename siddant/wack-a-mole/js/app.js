document.addEventListener('DOMContentLoaded', () => {
  const option = document.querySelectorAll('.moleholder')

  function getRandom(){
    return Math.floor( Math.random() * option.length)
  }
  getRandom()
  option[getRandom()].classList.add('active')
  //console.log(option[getRandom()])

})
