$(() => {

  const $flags = $('.flags')

  $.ajax({
    method: 'GET',
    url: 'https://restcountries.eu/rest/v2/all'
  })
    .then(flags => {
      flags.forEach(flag => {
        $flags.append(`
          <div>
            <h3>${flag.name}</h3>
            <h5>${flag.nativeName}</h5>
            <img src='${flag.flag}' alt='${flag.name}'>
          </div>
        `)
      })
    })







})
