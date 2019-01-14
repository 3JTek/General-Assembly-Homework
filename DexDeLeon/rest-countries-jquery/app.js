$(() => {
  const $countries = $('div.countries')

  $.ajax({
    method: 'GET',
    url: 'https://restcountries.eu/rest/v2/all'
  })
    .then(countries => {
      countries.forEach(country => {
        $countries.append(`
          <div>
            <h3>${country.name}</h3>
            <h4>${country.nativeName}</h4>
            <div class="flagDiv">
              <img src="${country.flag}" alt="Flag of ${country.name}">
            </div>
          </div>
        `)
      })
    })

})
