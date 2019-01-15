import $ from 'jquery'
import './style.css'

$(()=>{

  let tubeLines
  const $lines = $('.lines')

  function displayTubeLines() {
    $lines.empty()
    tubeLines.forEach(tubeLine => {
      $lines.append(`
        <div>
          <div class='lineName'>${tubeLine.name}</div>
          <div class='status'>${tubeLine.lineStatuses[0].statusSeverityDescription}</div>
        </div>
        `)
    })
  }

  $.ajax({
    method: 'GET',
    url: 'https://api.tfl.gov.uk/line/mode/tube/status'
  })
    .then(lines => {
      tubeLines = lines
      displayTubeLines()
    })

})
