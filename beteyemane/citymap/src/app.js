import $ from 'jquery'
import './style.css'

const $lines =$('.lines')

function getLine() {
  $.ajax({
    method: 'GET',
    url: 'https://api.tfl.gov.uk/line/mode/tube/status'
  })
    .then(line => {
      line.forEach(line => {
        $lines.append(`
          <div>
          <h3>${line.name}</h3>
          <small>${line.lineStatuses[0].statusSeverityDescription}</small>
          </div>
          `)
      })
    })
}

getLine()

setTimeout(function(){
  getLine()
}, 3000)
