import $ from 'jquery'
import './style.scss'

const $tubeDiv = $('.tubeDiv')
const $currentTime = $('.current-time')
let lines =[]


function getData(){
  $.get('https://api.tfl.gov.uk/line/mode/tube/status')
    .then(tubes => {
      lines = tubes
      console.log(lines)
      displayTubeLines()
    })
}

function displayTubeLines(){
  $tubeDiv.empty()
  const time = new Date
  $currentTime.text(`Last updated: ${time.getHours()}:${time.getMinutes()}`)
  lines.forEach(line => {
    $tubeDiv.append(`
        <div id ="${line.id}">
         <h4>${line.name}</h4>
         <h6>${line.lineStatuses[0].statusSeverityDescription}</h6>
        </div>
    `)
  })
}

setInterval(function(){
  console.log('works')
  getData()
}, 300000)

getData()
