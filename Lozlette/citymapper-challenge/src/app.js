import $ from 'jquery'
import './style.css'

const $tubeStatusInfo = $('.tubeStatus')


function getData(){
  $.ajax({
    method: 'GET',
    url: 'https://api.tfl.gov.uk/line/mode/tube/status'
  })
    .then(tubeStatusInfo => tubeStatusInfo.forEach(status =>{
      console.log('working')
      $tubeStatusInfo.append(`
      <div>
      <h2>${status.name}</h2>
      <h3>${status.lineStatuses[0].statusSeverityDescription}</h3>
      </div>
      `)
    }))
  setTimeout(getData, 30000)
}


getData()
