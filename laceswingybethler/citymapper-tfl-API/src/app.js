import $ from 'jquery'

const $lines = $('.tube-lines')
let lines = []

function getData() {
  $.get('https://api.tfl.gov.uk/line/mode/tube/status')
    .then(res => {
      lines = res
      displayLines()
    })
}




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
