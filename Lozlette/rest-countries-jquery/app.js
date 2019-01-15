$(() =>{

  const $countries = $('.countries')
  const $form = $('#dropdown')

  function getCountries(variable){
    console.log(variable)

    $countries.empty()
    $.ajax({
      method: 'GET',
      url: `https://restcountries.eu/rest/v2/${variable}`
    })

      .then(countries =>
        countries.forEach(country => {
          console.log('working')
          $countries.append(`
          <div>
          <h3>${country.name}</h3>
          <h4>${country.nativeName}</h4>
          <img src="${country.flag}" alt="${country.name}" />
          </div>
          `)

        }))

  }
  getCountries('all')
  $form.on('change', e => {
    getCountries(e.target.value)
  })
})
