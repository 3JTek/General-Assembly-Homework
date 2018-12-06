document.addEventListener('DOMContentLoaded', () => {

  const object = {
    'After': 'sounds/after.wav',
    'Better': 'sounds/better.wav',
    'Do It': 'sounds/do_it.wav',
    'Ever': 'sounds/ever.wav',
    Faster: 'sounds/faster.wav',
    Harder: 'sounds/harder.wav',
    Hour: 'sounds/hour.wav',
    'Make It': 'sounds/make_it.wav',
    'Makes Us': 'sounds/makes_us.wav',
    'More Than': 'sounds/more_than.wav',
    Never: 'sounds/never.wav',
    Our: 'sounds/our.wav',
    Over: 'sounds/over.wav',
    Stronger: 'sounds/stronger.wav',
    'Work Is': 'sounds/work_is.wav',
    'Work It': 'sounds/work_it.wav'

  }

  const audio = document.querySelector('audio')
  const sounder = document.querySelectorAll('.column')

  sounder.forEach(button => button.addEventListener('click', (e) => {
    audio.setAttribute('src', object[e.target.outerText])
    audio.play()
  }))


})
