$(() => {

  const $flags = $('.flags')
  const $regionForm = $('.region')

  const suffix = 'all'

  function getRegion(e) {
    console.dir(e)
    getFlags(`region/${e.target.value}`)
  }

  function getFlags(suffix) {
    $flags.empty()
    $.ajax({
      method: 'GET',
      url: `https://restcountries.eu/rest/v2/${suffix}`
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
  }

  getFlags(suffix)

  $regionForm.on('change', getRegion)

})
