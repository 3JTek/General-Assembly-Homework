$(() => {

  const $countries = $('.countries')
  console.log('hallow?')


  function getCountries() {

    // $countries.empty()

    $.ajax({
      method: 'GET',
      url: 'https://restcountries.eu/rest/v2/all'
    })
      .then(countries => {
        countries.forEach(country => {
          $countries.append(`
            <div>
              <h4>${country.name}</h4>
              <img src="${country.image}" alt = "${country.name}" />

            </div>
            `)
        })
      })
  }

  getCountries()





})
