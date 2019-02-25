$(() =>{

  const $countries = $('.countries')
  const $region = $('.searchRegion')
  const $searchBox = $('.searchName')


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

  function dropMenu(e) {
    console.log(`${e.target.value}`)
    getCountries(`region/${e.target.value}`)
  }
  function search(e) {
    console.log(`${e.target.value}`)
    getCountries(`name/${e.target.value}`)
  }
  getCountries('all')
  $region.on('change', dropMenu)
  $searchBox.on('input', search)

})
