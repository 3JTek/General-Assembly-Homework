document.addEventListener('DOMContentLoaded', () => {
  const option = document.querySelectorAll('.moleholder')

  function getRandom(){
    return Math.floor( Math.random() * option.length)
  }
  getRandom()

  console.log(option[getRandom()])

})
