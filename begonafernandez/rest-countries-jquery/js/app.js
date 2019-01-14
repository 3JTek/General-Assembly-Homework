let $countries
let $dropdownMenu
let $input
const baseUrl = 'https://restcountries.eu/rest/v2/'

function showCountry(country) {
  $countries.append(`<div>
    <div class="name">${country.name}</div>
    <div class="nativeName">${country.nativeName}</div>
    <img src='${country.flag}'/>
  </div>`)
}

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
    .then(countries => countries.forEach(showCountry))
}

function showSearchedCountry(name) {
  $.ajax({
    method: 'GET',
    url: baseUrl + 'name/' + name
  })
    .then(countries => countries.forEach(showCountry))
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
    $countries.empty()
    showSearchedCountry($(this).val())
  })



})
