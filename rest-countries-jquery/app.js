// 1. get the data with AJAX console.log it
// 2. get the container DIV with jQuery $container
// 3. loop over the data (forEach) append a DIV into the container for each country

$(() => {

  const $container = $('.container')

  $.ajax({
    method: 'GET',
    url: 'https://restcountries.eu/rest/v2/all'
  })
    .then(data => {
      data.forEach(country => $container.append(`
        <div>
          <h4>${country.name}</h4>
          <img src="${country.flag}" />
        </div>
      `))
    })


})
