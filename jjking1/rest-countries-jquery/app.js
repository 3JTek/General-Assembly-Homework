$(() => {

const $flags = $('.flag-grid')
const $menu = $('.menu')
const $search = $('input')

  function getFlags(choice){
    $flags.empty()

    $.ajax({
      method: 'GET',
      url: `https://restcountries.eu/rest/v2/${choice}`
    })
      .then(countries => {
        countries.forEach(country => {
          $flags.append(`
            <div>
              <h4> ${country.name} </h4>
              <p> ${country.nativeName} </p>
              <img src="${country.flag}" alt="${country.name}" />
            </div>
            `)
        })
      })
  }


getFlags('all')

$search.on('keyup', e => {
  getFlags(`name/${e.target.value}`)
})

$menu.on('change', e => {
  getFlags(e.target.value)
})


})
