let $countries
let $dropdownMenu
let $input
const baseUrl = 'https://restcountries.eu/rest/v2/'

function showcountriesByRegion(option) {
  const regions = [ 'africa', 'americas', 'asia', 'europe', 'oceania']
  let pathSegment
  if (regions.indexOf(option) > -1) {
    pathSegment = 'region/'
  } else  if (option === 'all'){
    pathSegment = ''
  } else {
    pathSegment = 'regionalbloc/'
  }

  $.ajax({
    method: 'GET',
    url: baseUrl + pathSegment + option

  })
    .then(countries => countries.forEach(country => {
      $countries.append(`<div>
        <div class="name">${country.name}</div>
        <div class="nativeName">${country.nativeName}</div>
        <img src='${country.flag}'/>
      </div>`)

    }))
}


$(() => {
  $countries = $('.countries')
  $dropdownMenu = $('.dropdown')
  $input = $('input')

  showcountriesByRegion('all')


  $dropdownMenu.on('change', function() {
    $countries.empty()
    showcountriesByRegion($(this).val())
  })

  $input.on('change', function() {
    console.log($(this).val())
  })



})
