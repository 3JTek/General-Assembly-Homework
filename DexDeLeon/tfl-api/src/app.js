import $ from 'jquery'
import './style.scss'
const $container = $('.container')

//Gets new data from the TFL API
function getData(){
  $.get('https://api.tfl.gov.uk/line/mode/tube/status')
    .then(lines => {
      updateDisplay(lines)
    })
  console.log('Updated.')
  // Function calls itself again after 5 minutes
  setTimeout(getData, 300000)
}

//Updates the DOM with new data from the TFL API
function updateDisplay(lines){
  //Empty existing divs
  $container.empty()
  //For each tube line...
  lines.forEach(line => {
    // ...create a DOM element with the appropriate data
    const $line = $(`
      <div id="${line.id}">
      <h2>${line.name}</h2>
      <p>${line.lineStatuses[0].statusSeverityDescription}</p>
      </div>
      `)
    $container.append($line)
  })
}

getData()
