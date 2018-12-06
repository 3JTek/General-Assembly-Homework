document.addEventListener('DOMContentLoaded', () => {
  const audios = document.querySelectorAll('audio')
  const buttons = document.querySelectorAll('button')

  const Img = document.createElement('img')
  Img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5UfoUD86vrvcm5btkfbEzw9UgnOQzn3yOouCg7a4aVhvS1MP')
  Img.setAttribute('alt', 'na')
  document.body.appendChild(Img)

  for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      audios[i].play()
    })

    buttons[i].addEventListener('mouseover', () => {
      buttons[i].style.backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6s-iFgevdwUrZp-F-mErKuZqa1HAj8sPYJE_LyLB4cb9ZzQoi'
      buttons[i].style.opasity = 0.1
      buttons[i].style.backgroundPosition = 'center'
    })

    buttons[i].addEventListener('mouseout', () => {
      buttons[i].style.backgroundImage = 'none'
    })
  }
})
