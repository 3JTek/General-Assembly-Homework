import $ from 'jquery'
import './style.css'

const $container = $('.container')


function getData() {
  $.ajax({
    method: 'GET',
    url: 'https://api.tfl.gov.uk/line/mode/tube/status'

  })
    .then(data =>{
      data.forEach(line => {
        $container.append(`
          <div>
            <h4>${line.name}</h4>
            <h5>${line.lineStatuses[0].statusSeverityDescription}</h5>
          </div>
          `)
      })
    })

  setTimeout(getData, 300000)

}

getData()
