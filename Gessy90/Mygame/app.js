document.addEventListener( 'DOMContentLoaded', () =>{
const h1 = document.querySelector('h1')
h1.textContent ='Make your own funny and creative Milkshake!'
})
const width = 20
let $grid
let $squares
let $welcome
let $start
const snake = [3,2,1,0]
let direction = 'right'
let moveTimerId
let delay = 300
const maxDelay = 50

function getNextIndex() {
  switch(direction) {
    case 'right': return snake[0] + 1
    case 'left': return snake[0] - 1
    case 'up': return snake[0] - width
    case 'down': return snake[0] + width
  }
}

function endGame() {
  clearInterval(moveTimerId)
}

function generateFood() {
  $squares.eq(Math.floor(Math.random() * $squares.length)).addClass('food')
}

function move() {
  const nextIndex = getNextIndex()
  if(snake[0] % width === width-1 && direction === 'right' ||
    snake[0] % width === 0 && direction === 'left' ||
    snake[0] - width < 0 && direction === 'up' ||
    snake[0] + width >= width*width && direction === 'down' ||
    snake.includes(nextIndex)
  ) return endGame()

  snake.unshift(nextIndex)
  $squares.eq(snake[0]).addClass('snake')

  if($squares.eq(snake[0]).hasClass('food')) {
    if(delay > maxDelay) delay -= 10
    $squares.eq(snake[0]).removeClass('food')
    generateFood()
  } else {
    $squares.eq(snake.pop()).removeClass('snake')
  }

  moveTimerId = setTimeout(move, delay)
}

function handleKeydown(e) {
  switch(e.keyCode) {
    case 37: direction = 'left'
      break;
    case 38: direction = 'up'
      break;
    case 39: direction = 'right'
      break;
    case 40: direction = 'down'
      break;
  }
}

function startGame() {
  $welcome.hide()
  $grid.show()
  move()
  generateFood()
}

function init() {
  $grid = $('.grid')
  $welcome = $('.welcome')
  $start = $welcome.find('button')

  for(let i = 0; i<width*width; i++) {
    $grid.append($('<div />'))
  }
  $squares = $grid.find('div')

  $grid.hide()
  $welcome.show()

  snake.forEach(snakeIndex => $squares.eq(snakeIndex).addClass('snake'))

  $(document).on('keydown', handleKeydown)
  $start.on('click', startGame)
}

$(init)
