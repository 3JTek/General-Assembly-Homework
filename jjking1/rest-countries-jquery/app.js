$(() => {

const $flags = $('.flag-grid')
const $menu = $('.menu')

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
$menu.on('change', e => {
  console.log(e.target.value)
  getFlags(e.target.value)
})


})
