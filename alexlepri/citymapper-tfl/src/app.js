import $ from 'jquery'
import './style.css'

const $container = $('.container')


function getData() {
  $container.empty()


  $.ajax({
    method: 'GET',
    url: 'https://api.tfl.gov.uk/line/mode/tube/status'

  })

    .then(data => {
      data.forEach(data => {
        $container.append(`
        <div class= "${data.id}"><h4>${data.name}</h4>
        <h5>${data.lineStatuses[0].statusSeverityDescription}</h5>
        </div>
        `)
      })
    })
  setTimeout(getData, 300000)

}
getData()
