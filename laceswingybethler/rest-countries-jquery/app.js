$(() => {

  const $countries = $('.countries')
  const $region = $('.region')
  const $searchBox = $('.search')
  const $nativeName = $('native')
  console.log($region)


  function getCountries(where) {
    $countries.empty()

    $.ajax({
      method: 'GET',
      url: `https://restcountries.eu/rest/v2/${where}`
    })
      .then(countries => {
        countries.forEach(country => {
          $countries.append(`
            <div class="country">
              <h4>${country.name}</h4>
              <small class="native">${country.nativeName}</small>
              <img src="${country.flag}" alt = "${country.name}" />

            </div>
            `)
        })
      })
  }



  function dropSelect(e) {
    console.log(`${e.target.value}`)
    getCountries(`region/${e.target.value}`)
  }

  function search(e) {
    console.log(`${e.target.value}`)
    getCountries(`name/${e.target.value}`)
  }


  getCountries('all')

  $region.on('change', dropSelect)
  $searchBox.on('input', search)






})
