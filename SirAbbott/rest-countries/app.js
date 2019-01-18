$(() => {
  const $flags = $('.flags')
  const $dropDown = $('.regions')
  const $search = $('input')

  function getFlags() {
    $flags.empty()
    $.ajax({
      method: 'GET',
      url: 'https://restcountries.eu/rest/v2/all'
    }).then(flags => appendTodivs(flags))
  }

  function appendTodivs(flags) {
    flags.forEach(flag => {
      $flags.append(`
      <div>
      <h2>${flag.name}</h4>
      <h4>${flag.nativeName}</h4>
      <img src="${flag.flag}" alt="${flag.name}"
      </div>`)
    })
  }

  function filterByRegion(e) {
    let regionalURL = `https://restcountries.eu/rest/v2/region/${e.target.value}`
    if (e.target.value === 'All') {
      regionalURL = 'https://restcountries.eu/rest/v2/all'
    }
    $flags.empty()
    $.ajax({
      method: 'GET',
      url: regionalURL
    }).then(flags => appendTodivs(flags))
  }

  function searchFilter(e) {
    let searchValue = `https://restcountries.eu/rest/v2/name/${e.target.value}`
    if (e.target.value === '') {
      searchValue = 'https://restcountries.eu/rest/v2/all'
    }
    $flags.empty()
    $.ajax({
      method: 'GET',
      url: searchValue
    }).then(flags => appendTodivs(flags))
  }

  getFlags()
  $dropDown.on('change', e => filterByRegion(e))
  $search.on('keydown', e => searchFilter(e))

})