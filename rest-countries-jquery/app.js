// 1. get the data with AJAX console.log it
// 2. get the container DIV with jQuery $container
// 3. loop over the data (forEach) append a DIV into the container for each country

$(() => {

  const $container = $('.container')
  const $form = $('#drop')


  $.ajax({
    method: 'GET',
    url: 'https://restcountries.eu/rest/v2/all'
  })
    .then(data => {
      data.forEach(country => $container.append(`
      <div>
      <h3>${country.name}</h3>
      <h5>${country.nativeName}</h5>
      <img src="${country.flag}" />
      </div>
      `))
    })




  // $form.on('change',(e => flags(e.target.name))


})
