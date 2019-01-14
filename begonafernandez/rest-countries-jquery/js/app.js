let $countries

function showAllCountries() {
  $.ajax({
    method: 'GET',
    url: 'https://restcountries.eu/rest/v2/all'

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

  showAllCountries()

})
