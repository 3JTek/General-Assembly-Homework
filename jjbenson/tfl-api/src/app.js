import $ from 'jquery'
import './style.scss'

let lineData = []
let minCounter = 0
let minutes
const tubeData =[]
const otherData =[]
const $container = $('.container')
const $mins = $('#mins')
const $progress = $('.progress')
let updateTimer

//Update the last updated text
function updateMinutes(){
  //Fix grammar
  if(minCounter === 1) minutes = 'minute'
  else minutes = 'minutes'
  //Display message
  $mins.html(`${minCounter} ${minutes}`)
  //Increase minutes since update
  minCounter++
  //Call this again in 1 minute
  updateTimer = setTimeout(function () {
    updateMinutes()
  },1000*60)
}

//Load the data from api into
function loadData(){
  //Toggle class on progress bar
  $progress.toggleClass('load')
  $.get('https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tram/status')
    .then(data => {
      //Put tube data in one array, others in a different one
      data.forEach((line) => line.modeName ==='tube'? tubeData.push(line): otherData.push(line) )

      //Stick the two arrays together
      lineData = [...tubeData,...otherData]

      //Show the info
      showData()

      //Start the update timer
      updateMinutes()

      //Call this again in 5 mins
      setTimeout(function () {
        //Reset the update counter
        minCounter = 0
        //Clear the current update timer just incase
        clearTimeout(updateTimer)
        //Load the new data
        loadData()
      }, 5*1000*60)
    } )
}
//Build the html element as a string
function element(line){
  let element = `
  <div class='line severity${line.lineStatuses[0].statusSeverity} ${line.id}'>
    <div class="band"></div>
    <h2>${line.name}</h2>
    <i></i>
    <h3 class="">${line.lineStatuses[0].statusSeverityDescription}</h3>
    `
  //If this has a disruption description, display it
  try{
    element += `<p class='description'>${line.lineStatuses[0].disruption.description}</p>`
  }catch(err){
    //Else do nothing
    $.noop()
  }
  //Close the first div
  element += '</div>'
  //Return this string
  return element
}

function showData(){
  //Remove old elements
  $container.empty()
  //Populate with new elements
  lineData.forEach((line)=>{
    $container.append(element(line))
  })
}

//Kick of the loader and timers
loadData()
