//Grab objects' name, nativeName, flag, region

$(() => {

  const $countries = $('.countries')
  const $geoDropdownForm = $('#geoDropdown')

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
          <div>
            <h4>${country.name}</h4>
            <h5>${country.nativeName}</h5>
            <img src="${country.flag}" alt="${country.name}" />
          </div>
          `)
      })
    })

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Form submitted')
  }

  $geoDropdownForm.on('submit', handleSubmit)

})
