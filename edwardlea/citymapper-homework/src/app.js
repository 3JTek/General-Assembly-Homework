import $ from 'jquery'
import './style.scss'

let tubeData = []
let delayedLines = []
const $lineStatus = $('.line-status')
const $lastUpdate = $('#last-update')
const $delayedLines = $('.delayed-lines')

function getLineStatus(){
  $.get('https://api.tfl.gov.uk/line/mode/tube/status')
    .then(data => {
      tubeData = data
      console.log(tubeData)
      filterDelayed()
      displayLines()
      console.dir(new Date().toLocaleDateString(), new Date().toLocaleTimeString())
      $lastUpdate.text(`${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`)
    })
  // setTimeout(getLineStatus, 300000)
}

function filterDelayed(){
  delayedLines = tubeData.filter(line => {
    line.lineStatuses[0].statusSeverityDescription === 'Minor Delays' || line.lineStatuses[0].statusSeverityDescription === 'Major Delays'
  })
  console.log(delayedLines)
}



function displayLines() {
  $lineStatus.empty()
  $delayedLines.empty()
  tubeData.forEach(line => {
    $lineStatus.append(`
      <div class=${line.id}>
      <h4>${line.name}</h4>
      <h6> ${line.lineStatuses[0].statusSeverityDescription}</h6>
      </div>
      `)
  })
  delayedLines.forEach(line =>{
    $delayedLines.append(`
      <div class=${line.id}>
      <h4>${line.name}</h4>
      <h6> ${line.lineStatuses[0].statusSeverityDescription}</h6>
      </div>
        `
    )
  })
}

getLineStatus()
