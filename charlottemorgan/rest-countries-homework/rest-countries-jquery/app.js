$(() => {

  const $flags = $('.flags')
  const $dropDown = $('.regions')

  $.ajax({
    method: 'GET',
    url: 'https://restcountries.eu/rest/v2/all'
  })
    .then(flags => {
      flags.forEach(flag => {
        $flags.append(`
        <div>
        <h2>${flag.name}</h2>
        <h4>${flag.nativeName}</h4>
        <div class="imageDiv">
        <img src="${flag.flag}" alt="${flag.name}" />
        </div>
        </div>
        `)
      })
    })


})
