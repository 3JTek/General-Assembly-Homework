import $ from 'jquery'
import './style.css'

$(()=>{

  let tubeLines
  const $lines = $('.lines')
  const $sort = $('select')

  function displayTubeLines() {
    $lines.empty()
    tubeLines.forEach(tubeLine => {
      $lines.append(`
        <div id='${tubeLine.name.split(' ')[0].toLocaleLowerCase()}'>
          <div class='lineName'>${tubeLine.name}</div>
          <div class='status'>${tubeLine.lineStatuses[0].statusSeverityDescription}</div>
        </div>
        `)
    })
  }

  function handleSort({target: { value }}) {
    const [sortBy, direction] = value.split('|')
    tubeLines.sort((a, b) => {
      if (direction === 'asc') {
        if(a[sortBy] < b[sortBy]) return -1
        if(a[sortBy] > b[sortBy]) return 1
        return 0
      } else {
        if(a[sortBy] > b[sortBy]) return -1
        if(a[sortBy] < b[sortBy]) return 1
        return 0
      }
    })
    displayTubeLines()
  }

  function getLines() {
    $.ajax({
      method: 'GET',
      url: 'https://api.tfl.gov.uk/line/mode/tube/status'
    })
      .then(lines => {
        tubeLines = lines
        displayTubeLines()
      })
  }
  setInterval(getLines, 5000)
  getLines()
  $sort.on('change', handleSort)
})
