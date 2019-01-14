$(() => {
  const $flags = $('.flags')

  $.ajax({
    method: 'GET',
    url: 'https://restcountries.eu/rest/v2/all'

  }).then(
    countries => {
      console.log(countries)
      countries.forEach(country =>{
        $flags.append(`
          <div>
          <h4> ${country.name}</h4>
          <h6> ${country.nativeName} </h6>
          <img src="${country.flag}" alt="${country.name}"/>
          </div>
          `)
      })


    }
  )




})
