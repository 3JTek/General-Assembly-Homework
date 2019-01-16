import $ from 'jquery'
import './style.scss'

const $status = $('.status')
const $info = $('#info')
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
  const time = new Date()
  $status.empty()
  $info.text(`last updated: ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}` )
  service.forEach(data => {
    $status.append(`
      <div id="${data.id}">
        <h2>${data.name}</h2>
        <p>${data.lineStatuses[0].statusSeverityDescription}</p>
      </div>
    `)
  })
  setTimeout(getData, 300000)
}

getData()
