import $ from 'jquery'
import './style.scss'

const $status = $('.status')
console.log($status)

$.ajax({
  method: 'GET',
  url: 'https://api.tfl.gov.uk/line/mode/tube/status'
}).then(data => {
  $status.append(`
    <div>
      <h2>${data.name}</h2>
      <h4>${data.lineStatuses.lineStatuses}</h4>
    </div>
  `)

})
