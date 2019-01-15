import $ from 'jquery'
import './style.css'

const $lines = $('.lines')

function getAPI(){
  $.ajax({
    method: 'GET',
    url: 'https://api.tfl.gov.uk/line/mode/tube/status'
  })
    .then(getTrainInfo)
}

function getTrainInfo(lines){
  $lines.empty()
  lines.forEach(line => {
    $lines.append(`

      <h1>${line.name}</h1>
      <h4>${line.lineStatuses[0].statusSeverityDescription}</h4>
      `)
  })
}

getAPI()
setInterval(()=>{
  getAPI()
}, 300000)
