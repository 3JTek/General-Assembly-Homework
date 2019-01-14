$(() =>{

  const $flags =$('.flags')
  const $dropDown = $('select')
  const $search =$('.search')

  function getFlags(item) {
    $flags.empty()
    $.ajax({
      method: 'GET',
      url: `https://restcountries.eu/rest/v2/${item}`
    })
      .then(flags => {
        flags.forEach(flag => {
          $flags.append(`
          <div>
          <h4>${flag.name}</h4>
          <p>${flag.nativeName}</p>
          <img src="${flag.flag}" alt${flag.name}"/>
          </div>
          `)
        })
      })
  }

  getFlags('all')

  $dropDown.on('change', (e) => {
    getFlags(e.target.value)
  })
  $search.on('input', (e) => {
    if(e.target.value === '') {
      getFlags('all')
    } else {
      getFlags(`name/${e.target.value}`)
    }
  })
})
