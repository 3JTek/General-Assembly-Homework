$(() => {
  const $flags = $('.flags')
  const $dropdown = $('#drop-down')
  const $textArea = $('#text-search')

  function getCountries(type){
    $flags.empty()
    $.ajax({
      method: 'GET',
      url: `https://restcountries.eu/rest/v2/${type}`
    }).then(
      countries => {
        countries.forEach(country =>{
          $flags.append(`
            <div>
            <h4> ${country.name}</h4>
            <h6> ${country.nativeName} </h6>
            <img src="${country.flag}" alt="${country.name}"/>
            </div>
            `)
        })
      }
    )
  }

  function getContinentCountries(e){
    if(e.target.value === 'all'){
      getCountries('all')
    }
    getCountries(`region/${e.target.value}`)
  }

  function getSearchCountries(e){
    if(e.target.value === ''){
      getCountries('all')
    }
    e.target.value.toLowerCase()
    getCountries(`name/${e.target.value.toLowerCase()}`)
  }

  getCountries('all')

  $dropdown.on('change', getContinentCountries)
  $textArea.on('input', getSearchCountries)


})
