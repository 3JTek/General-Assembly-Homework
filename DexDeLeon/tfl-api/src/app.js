import $ from 'jquery'
import './style.scss'
const $container = $('.container')


$.get('https://api.tfl.gov.uk/line/mode/tube/status')
  .then(lines => {
    lines.forEach(line => {
      const $line = $(`
          <div id="${line.id}">
            <h2>${line.name}</h2>
            <p>${line.lineStatuses[0].statusSeverityDescription}</p>
          </div>
        `)
      $container.append($line)
    })
  })
