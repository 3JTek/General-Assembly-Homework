import $ from 'jquery'
import './style.scss'

const $lines = $('.tube-lines')
let lines = []

function getData() {
  $.get('https://api.tfl.gov.uk/line/mode/tube/status')
    .then(res => {
      lines = res
      displayLines()
    })
}

//run every 5 minutes
setInterval(function() {
  getData()
  console.log('gettin new data')
}, 30000)



function displayLines() {
  lines.forEach(line => {
    $lines.append(`
      <div class="line-box">
        <h2>${line.name}</h2>
        <h3>${line.lineStatuses[0].statusSeverityDescription}</h3>
      </div>
    `)
  })
}

getData()
