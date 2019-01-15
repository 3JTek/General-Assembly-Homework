import $ from 'jquery'
import './style.scss'

const $lineDisplay = $('.line-display')

function getLines(){
  $lineDisplay.empty()
  console.log('refreshing')
  $.ajax({
        method: 'GET',
        url: 'https://api.tfl.gov.uk/line/mode/tube/status',
      })
        .then(data => {
          data.forEach(line => {
            $lineDisplay.append(`
                <div class="${line.id}"><h2> ${line.name}</h2>
                <p class="status">${line.lineStatuses[0].statusSeverityDescription}</p>
                 </div>
              `)
          })
        })
    setTimeout(getLines, 300000)
  }



getLines()
