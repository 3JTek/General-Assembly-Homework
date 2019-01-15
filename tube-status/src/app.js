import $ from 'jquery'
import './style.css'

const $tubeDisp = $('.tubeLines')

let lines = []

function getStatus() {
  $.get('https://api.tfl.gov.uk/line/mode/tube/status')
    .then(data => {
      lines = data
      console.log(lines)
      displayTubeLines()
    })
}

function displayTubeLines() {
  $tubeDisp.empty()
  lines.forEach(line => {
    $tubeDisp.append(`
      <div>
        <h2>${line.name}</h2>
        <h3>${line.lineStatuses[0].statusSeverityDescription}</h3>
      </div>
    `)
  })
}

getStatus()
