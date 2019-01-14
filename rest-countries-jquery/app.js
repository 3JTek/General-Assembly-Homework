$(() =>{

  const $countries = $('.countries')
  const $form = $('#dropdown')


  $.ajax({
    method: 'GET',
    url: 'https://restcountries.eu/rest/v2/all'
  })

    .then(countries =>
      countries.forEach(country => {
        $countries.append(`
        <div>
        <h3>${country.name}</h3>
        <h4>${country.nativeName}</h4>
        <img src="${country.flag}" alt="${country.name}" />
        </div>
        `)

      }))




  function getCountries(variable){
    console.log(variable)
    $.ajax({
      method: 'GET',
      url: `https://restcountries.eu/rest/v2/${variable}`
    })

      .then(countries =>
        countries.forEach(country => {
          $countries.append(`
          <div>
          <h3>${country.name}</h3>
          <h4>${country.nativeName}</h4>
          <img src="${country.flag}" alt="${country.name}" />
          </div>
          `)

        }))

  }

  $form.change(e => getCountries(e.target.value))
})
