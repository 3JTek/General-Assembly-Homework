import $ from 'jquery'
import './style.scss'

const $status = $('.status')
let service = []

function getData(){
  $.ajax({
    method: 'GET',
    url: 'https://api.tfl.gov.uk/line/mode/tube/status'
  }).then(data => {
    service = data
    displayData()
  })

}

function displayData(){
  $status.empty()
  service.forEach(data => {
    $status.append(`
      <div>
        <h2>${data.name}</h2>
        <h4>${data.lineStatuses[0].statusSeverityDescription}</h4>
      </div>
    `)
    console.log(data)
  })
  setTimeout(getData, 300000)
}

getData()
