import $ from 'jquery'
import './style.scss'

let tubeData = []
let delayedLines = []
const $lineStatus = $('.line-status')
const $lastUpdate = $('#last-update')
const $delayedLines = $('.delayed-lines')
const $delayedLinesTitle = $('.delayed-lines-title')
const $allLinesTitle = $('.all-lines-title')

function getLineStatus(){
  $.get('https://api.tfl.gov.uk/line/mode/tube/status')
    .then(data => {
      tubeData = data
      filterDelayed()
      displayLines()
      $lastUpdate.text(`${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`)
    })
  setTimeout(getLineStatus, 300000)
}

function filterDelayed(){
  delayedLines = tubeData.filter(line => {
    return line.lineStatuses[0].statusSeverityDescription === 'Minor Delays' || line.lineStatuses[0].statusSeverityDescription === 'Major Delays'
  })
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
  if(delayedLines.length === 0){
    $delayedLinesTitle.addClass('no-delays')
    $allLinesTitle.text('A good service is on all lines')
  } else {
    $delayedLinesTitle.removeClass('no-delays')
    $allLinesTitle.text('All lines')
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
}

getLineStatus()
