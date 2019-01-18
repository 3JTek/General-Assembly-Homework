document.addEventListener('DOMContentLoaded', () => {
  const items = document. querySelector('.items')

  let isDown = false
  let pageXDown
  let scrollLeft


  for(let i = 0; i < 28; i++) {
    const item = document.createElement('div')
    item.classList.add('item')
    item.classList.add('item'+i)
    item.innerText = i
    items.append(item)
  }

  items.addEventListener('mousedown', (e) => {
    isDown = true
    items.classList.add('active')
    pageXDown = e.pageX - items.offsetLeft
    scrollLeft = items.scrollLeft
  })

  items.addEventListener('mouseup', () => {
    isDown = false
    items.classList.remove('active')

    // if(pageXup) {
    //   items.removeEventListener('mousemove')
    // }
  })

  items.addEventListener('mousemove', (e) => {
    if(!isDown) return
    e.preventDefault()

    const x = e.pageX - items.offsetLeft
    const walk = (x - pageXDown) * 3
    items.scrollLeft = scrollLeft - walk
  })
})
