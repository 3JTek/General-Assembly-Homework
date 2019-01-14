$(() => {
  const $flags = $('.flags')
  const $filterDropDown = $('.filterCountry')
  const $search = $('.search')
  let continent

  $.ajax({
    method: 'GET',
    url: 'https://restcountries.eu/rest/v2/all'
  }).then(flags => {
    flags.forEach(flag => {
      $flags.append(`
        <div class="flag" data=${flag.region}>
        <h3>${flag.name}</h3>
        <h4>${flag.nativeName}</h4>
        <img src=${flag.flag}></img>
        </div>
        `)
    })
  })

  function filterCountry(){
    continent = $filterDropDown.val()
    if(continent === 'All') return $flags.children().show()
    $flags.children().hide().filter(`[data = ${continent}]`).show()
  }

  $filterDropDown.on('change', filterCountry)

  $search.on('keyup', (e) => {
    if(e.target.value.length > 0){
      $flags.children().hide().filter(`[data = ${continent}]`).children().filter(`h3:contains(${e.target.value})`).parent().show()
    } else {
      filterCountry()
    }
  })
})
