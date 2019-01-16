import $ from 'jquery'
import './style.scss'

const $lineTable = $('.lines')
const $counter = $('.timer')
const $sort = $('.sort')
let lineTrafficInfo, counter = 0

function retrieveTrafficInfo(){
  lineTrafficInfo = []
  $.get('https://api.tfl.gov.uk/line/mode/tube/status', lines => {
    lines.forEach( line => {
      lineTrafficInfo.push([line.name, line.lineStatuses[0].statusSeverityDescription])
    })
    displayTrafficInfo()
  })
}

function displayTrafficInfo(){
  $lineTable.empty()
  lineTrafficInfo.forEach(([lineName, service]) => {
    $lineTable.append(`
      <div class="line">
        <h3>${lineName}</h3>
        <h4>${service}</h4>
      </div>
    `)
  })
  $('h4').addClass('updated')
  setTimeout(() => $('h4').removeClass('updated'), 200)
  counter = 5
}

function sortTrafficInfo({target: {classList}}){
  lineTrafficInfo.sort((a, b) => {
    if(classList.contains('fa-sort-alpha-up')){
      return a[0] < b[0] ? 1 : a[0] > b[0] ? -1 : 0
    } else {
      return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0
    }
  })
  console.log(lineTrafficInfo)
  $('.fa-sort-alpha-up').toggle()
  $('.fa-sort-alpha-down').toggle()
  displayTrafficInfo()
}

setInterval(() => {
  $counter.html(`Next update in ${counter} seconds`)
  counter === 0 ? retrieveTrafficInfo() : counter --
}, 1000)

$sort.on('click', sortTrafficInfo)

// //const {
//   name: lineName,
//   lineStatuses: [
//     {
//       statusSeverityDescription: service
//     }
//   ]
// } = line
