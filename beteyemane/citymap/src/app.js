import $ from 'jquery'
import './style.css'

const $lines =$('.lines')

function getLine() {
  $lines.empty()
  $.ajax({
    method: 'GET',
    url: 'https://api.tfl.gov.uk/line/mode/tube/status'
  })
    .then(line => {
      line.forEach(line => {
        $lines.append(`
          <div class="columns">
          <h3>${line.name}</h3>
          <p>${line.lineStatuses[0].statusSeverityDescription}</p>
          </div>
          `)
      })
    })
}

getLine()

setTimeout(function(){
  getLine()
}, 30000)
