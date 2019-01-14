//Grab objects' name, nativeName, flag

$(() => {

  const $countries = $('.countries')

  $.ajax({
    method: 'GET',
    url: 'https://restcountries.eu/rest/v2/all'
  })
    .then(countries => {
      countries.forEach(country => {
        // console.log(country.name)
        // console.log(country.nativeName)
        // console.log(country.flag)
        $countries.append(`
          <h4>${country.name}</h4>
          <h5>${country.nativeName}</h5>
          <img src="${country.flag}" alt="${country.name}" />
          `)
      })
    })
})
