$(() => {

  const $flagsDiv = $('.flagsdiv')
  const $regions = $('#regions')
  const $searchBox = $('#searchBox')

  function getCountries(type){

    $flagsDiv.empty()

    $.ajax({
      method: 'GET',
      url: `https://restcountries.eu/rest/v2/${type}`
    })

      .then(countries => {
        console.log(countries)
        countries.forEach(country => {
          $flagsDiv.append(`
            <div>
              <h4>${country.name}</h4>
              <h6>${country.nativeName}</h6>
              <img src="${country.flag}" alt"${country.name}" />
            </div>
            `)
        })
      })
  }
  getCountries('all')

  // --------- when user selects an option call function get countries and pass the selected option ----

  function dropDown(e){
    getCountries(`region/${e.target.value}`)
  }

  // --------- when user types letters call function get countries and pass the typed country name ----

  function searchBar(e){
    if(e.target.value ===''){
      getCountries('all')
    }else{
      getCountries(`name/${e.target.value}`)
    }
  }

  // when user selects an option call drop down function
  $regions.on('change', dropDown)

  // when user types an option call searchBar function
  $searchBox.on('input', searchBar)

})
