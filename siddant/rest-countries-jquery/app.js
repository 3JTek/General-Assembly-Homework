$(() => {
  const $countries = $('.countries')
  const $filterCountries = $('form select')
  const $searchBar = $('input')

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

  $filterCountries.change(e => getCountries(e.target.value))
  $searchBar.on( 'input', e =>{
    if(e.target.value === '')getCountries('all')
    else getCountries(`name/${e.target.value.toLowerCase()}`)
    $filterCountries.val('all')
  })
  getCountries('all')
})
