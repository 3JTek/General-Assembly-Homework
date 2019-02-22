// 1. get the data with AJAX console.log it
// 2. get the container DIV with jQuery $container
// 3. loop over the data (forEach) append a DIV into the container for each country

$(() => {

  const $container = $('.container')
  const $form = $('.dropdown')


  function getCountries(flag) {
    $container.empty()

    $.ajax({
      method: 'GET',
      url: `https://restcountries.eu/rest/v2/${flag}`
    })
      .then(data => {
        data.forEach(country => {
          $container.append(`
          <div>
          <h3>${country.name}</h3>
          <h5>${country.nativeName}</h5>
          <img src="${country.flag}" alt="${country.name}" />
          </div>
          `)

        })
      })
  }

  getCountries('all')

  $form.on('change', e => {
    console.log(e.target.value)
    getCountries(e.target.value)
  })

})
