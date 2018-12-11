document.addEventListener('DOMContentLoaded', () => {

  const btn = document.querySelectorAll('button')


  function display() {
    btn.forEach(button => {
      button.style.backgroundImage = ''
      button.setAttribute('disabled', 'true')
    })
    const choices = Math.floor(Math.random() * 12)
    btn[choices].style.backgroundImage = 'url("https://i.pinimg.com/736x/de/5f/7b/de5f7b027fd2e73634898b40b6b8cc13--flower-beard-time-magazine.jpg")'
    btn[choices].removeAttribute('disabled')

  }

  function hide() {
    btn.forEach(button => {
      button.style.backgroundImage = ''
      button.setAttribute('disabled', 'true')
    })
  }

  setInterval(() => {
    display()
  }, 1500)

  btn.forEach(button => {
    button.addEventListener('click', winOrLose)
    button.addEventListener('click', hide)
  })

  function winOrLose() {
    console.log('YOU WINNNNNNNNNNNNNN')
  }

})