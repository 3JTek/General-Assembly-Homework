$(() => {

  const $flags = $('.flags')
  const $dropDown = $('.regions')
  const $search = $('.input')

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


  function flagByRegion(e) {
    let regionURL = `https://restcountries.eu/rest/v2/region/${e.target.value}`
    if (e.target.value === 'all') {
      regionURL = 'https://restcountries.eu/rest/v2/all'
    }
    $flags.empty()
    $.ajax({
      method: 'GET',
      url: regionURL
    })
      .then(flags => {
        console.log(flags)
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
  }

  function searchBar(e){
    $flags.empty()
    let searchURL = `https://restcountries.eu/rest/v2/name/${e.target.value}`
    if(e.target.value === '') {
      searchURL = 'https://restcountries.eu/rest/v2/all'
    }
    $.ajax({
      method: 'GET',
      url: searchURL
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

  }

  $dropDown.on('change', flagByRegion)
  $search.on('keyup', searchBar)

})
