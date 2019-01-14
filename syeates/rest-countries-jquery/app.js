$(() =>{

  const countries =$('.countries')


  function getCountries(){

    countries.empty()

    $.ajax({
      method: 'GET',
      url: 'https://restcountries.eu/rest/v2/all'
    })
      .then(countries => {
        countries.forEach(contry => {
          $countries.append(`
        <div>
        <h4>${contry.name}</h4>
        <h4>${contry.name}</h4>
        <img src="${contry.image}" alt${contry.name}" />
        </div>
        `)
        })
      })
  }

})
