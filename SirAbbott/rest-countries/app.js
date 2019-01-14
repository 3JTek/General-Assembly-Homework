$(() => {
  const $flagImages = $('.flags')
  const $dropDown = $('.regions')

  $.ajax({
    method: 'GET',
    url: 'https://restcountries.eu/rest/v2/all'
  }).then(flags => {
    flags.forEach(flag => {
      $flagImages.append(`
      <div>
      <h2>${flag.name}</h4>
      <h4>${flag.nativeName}></h4>
      <img src="${flag.flag}" alt="${flag.name}" />
      </div>`)
    })
  })

  $.ajax({
    method: 'GET',
    url: 'https://restcountries.eu/rest/v2/all'
  })



})