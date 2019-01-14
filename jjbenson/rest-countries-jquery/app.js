$(()=>init())


function init(){
  console.log('jquery loaded')
  const baseURL ='https://restcountries.eu/rest/v2'
  const $container = $('.container')
  const $regions = $('.regions')
  const $search = $('.search')


  function element(name,nativeName,flag){
    return `<div class = "tile">
      <h3>${name}</h3>
      <h4>${nativeName}</h4>
      <img src=${flag} alt="${name}"/>
      </div>`
  }
  function request(typeUrl){
    $container.empty()
    $.ajax({
      method: 'GET',
      url: baseURL+'/'+typeUrl

    }).then(countries => {
      countries.forEach(country => {
        $container.append(element(country.name,country.nativeName,country.flag))
      })
    })
  }
  function getCountries(){
    request('all')
    // $container.empty()
    //
    // $.ajax({
    //   method: 'GET',
    //   url: baseURL+'/all'
    //
    // }).then(countries => {
    //   countries.forEach(country => {
    //     $container.append(element(country.name,country.nativeName,country.flag))
    //   })
    // })
  }

  function filterRegions(e){
    console.log(e.target.value)
    $container.empty()

    let regionUrl = 'region/'+e.target.value

    if(e.target.value === 'all') regionUrl = baseURL+'all'

    request(regionUrl)

    // $.ajax({
    //   method: 'GET',
    //   url: regionUrl
    //
    // }).then(countries => {
    //   countries.forEach(country => {
    //     $container.append(element(country.name,country.nativeName,country.flag))
    //   })
    // })
  }


  function searchCountry(e){

    const searchURL = 'name/'+e.target.value

    request(searchURL)
    //
    // $.ajax({
    //   method: 'GET',
    //   url: searchURL
    //
    // }).then(countries => {
    //   countries.forEach(country => {
    //     $container.append(element(country.name,country.nativeName,country.flag))
    //   })
    // })
  }

  getCountries()
  $regions.on('change',filterRegions)
  $search.on('keydown',searchCountry)

}
