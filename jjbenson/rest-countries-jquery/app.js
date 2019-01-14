$(()=>init())

function init(){
  //Get DOM Elephants
  const baseURL ='https://restcountries.eu/rest/v2'
  const $container = $('.container')
  const $regions = $('.regions')
  const $search = $('.search')

  function request(typeUrl, init=false){
    function element(name,nativeName,flag){
      return `<a href="https://en.wikipedia.org/wiki/${name}" class = "tile" id="${name}">
                <h3>${name}</h3>
                <h4>${nativeName}</h4>
                <img src=${flag} alt="${name}"/>
              </a>`
    }

    $.ajax({
      method: 'GET',
      url: baseURL+'/'+typeUrl
    }).then(countries => {
      //Hide all countries (this is empty when called by init)
      $container.children('a').hide()
      //If first call, build country tiles
      if(init){
        countries.forEach(country => {
          //Append the country element to the container
          $container.append(element(country.name,country.nativeName,country.flag))
        })

      }else if(typeUrl === 'all'){
        //Show all countries
        $container.children('a').show()

      }else{
        countries.forEach(country => {
          //Show selected countries
          $container.find('#'+country.name).show()
        })
      }
    })
  }

  function updateCountries(e,type){
    //Value of input or select
    const val = e.target.value
    let searchURL = type+'/'+val
    //If val is empty or all selected, show all
    if(val === '' || val === 'all') searchURL = 'all'
    request(searchURL)
  }

  //Add event listeners
  $regions.on('change',(e)=>updateCountries(e,'region'))
  $search.on('keyup',(e)=>updateCountries(e,'name'))

  //Trigger initial request
  request('all',true)
}
