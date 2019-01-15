import $ from 'jquery'

import './style.scss'

let lineData = []
const $container = $('.container')

function loadData(){
  console.log('load')
  $.get('https://api.tfl.gov.uk/line/mode/tube/status')
    .then(data => {
      lineData = data

      showData()

      setTimeout(function () {
        loadData()
      }, 5*1000*60)
    } )
}
function element(line){
  return `
  <div class='line'id='${line.id}'>
    <h2>${line.name}</h2>
    <h3>${line.lineStatuses[0].statusSeverityDescription}</h3>
    <p class='description'>${line.lineStatuses[0].disruption.description}</p>
  </div>
    `

}
function showData(){
  console.log('show')
  lineData.forEach((line)=>{
    console.log(line.name)
    $container.append(element(line))
  })
}

loadData()
