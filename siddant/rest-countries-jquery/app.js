$(() => {
  const $countries = $('.countries')
  const $filterCountries = $('form select')


  function getCountries(variable){
    $countries.empty()
    $.ajax({
      method: 'GET',
      url: `https://restcountries.eu/rest/v2/${variable}`
    })
      .then(countries =>{
        countries.forEach(country =>{
          $countries.append(`
          <div>
          <h2>
          ${country.name}
          </h2>
          <small>${country.nativeName}</small>
          <img src="${country.flag}" atl="${country.name}" />
          </div>

          `)
        })
      })
  }


  getCountries('all')

  $filterCountries.change(e => getCountries(e.target.value))


  //https://restcountries.eu/rest/v2/all
})
