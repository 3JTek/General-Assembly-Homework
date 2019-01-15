$(() => {
  const $container =$('.container')
  const $form =$('#dropdown')

  function getCountries(variable){
    console.log(variable)
    $.ajax({
      method: 'GET',
      url: `https://restcountries.eu/rest/v2/${variable}`
    })
      .then(container =>{
        container.forEach(container => {
          $container.append(`
          <div>
          <h4>${container.name}</h4>
          <h5>${container.nativeName}</h5>
          <img src="${container.flag}" alt="${container.name}"/>
          </div>
          `)
        })
      })
  }
  $form.change(e => getCountries(e.target.value))
  getCountries('all')
})
