import $ from 'jquery'
import './style.scss'

let tflApiData = []
const $lines = $('.lines')

function getApiData() {
  $.ajax({
    method: 'GET',
    url: 'https://api.tfl.gov.uk/line/mode/tube/status'
  })
    .then(data => {
      console.log('Data Updated')
      tflApiData = data
      drawLines()
    })
}

function drawLines() {
  $lines.empty()
  tflApiData.forEach(line => {
    $lines.append(`
      <div>
      <h2>${line.name}</h2>
      <h4>${line.lineStatuses[0].statusSeverityDescription}</h4>
      </div>
      `)
  })
  setTimeout(getApiData, 300000)
}

getApiData()
