$(() => {
  const $countries = $('div.countries')
  const $select = $('select.regions')


  function getFlags(region){
    $countries.empty()
    $.ajax({
      method: 'GET',
      url: `https://restcountries.eu/rest/v2/${region}`
    })
      .then(countries => {
        countries.forEach(country => {
          $countries.append(`
            <a href="https://en.wikipedia.org/wiki/${country.name}" target="_blank">
              <div>
                <h3>${country.name}</h3>
                <h4>${country.nativeName}</h4>
                <div class="flagDiv">
                  <img src="${country.flag}" alt="Flag of ${country.name}">
                </div>
              </div>
            </a>
          `)
        })
      })
  }

  getFlags('all')

  $select.on('change', (e) => {
    getFlags(e.target.value)
  })

})
