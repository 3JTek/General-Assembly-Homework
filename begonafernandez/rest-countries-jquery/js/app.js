let $countries
let $dropdownMenu

function showAllCountries(option) {
  const regions = [ 'africa', 'americas', 'asia', 'europe', 'oceania']

  console.log(regions.indexOf(option))
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
    url: 'https://restcountries.eu/rest/v2/' + pathSegment + option

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

  showAllCountries('all')


  $dropdownMenu.on('change', function() {
    $countries.empty()
    showAllCountries($(this).val())
  })



})
