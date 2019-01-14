$(() =>{

  const $flags =$('.flags')

  $.ajax({
    method: 'GET',
    url: 'https://restcountries.eu/rest/v2/all'
  })
    .then(flags => {
      flags.forEach(flag => {
        $flags.append(`
        <div>
        <h4>${flag.name}</h4>
        <img src="${flag.flag}" alt${flag.name}" />
        </div>
        `)
      })
    })
})
