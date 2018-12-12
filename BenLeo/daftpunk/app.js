document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      (buttons[i].parentElement.children[1]).play()
    })
  }
})
