let $countries
let $dropdownMenu

function showAllCountries(option) {
  let pathSegment
  if (option !== 'all') {
    pathSegment = 'region/'
  } else {
    pathSegment = ''
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
    console.log($(this).val())
    $countries.empty()
    showAllCountries($(this).val())
  })



})
