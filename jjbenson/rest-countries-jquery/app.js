$(()=>init())

function init(){
  //Get DOM elements
  const delay = 50
  const baseURL ='https://restcountries.eu/rest/v2'
  const $container = $('.container')
  const $regions = $('.regions')
  const $search = $('.search')
  const $bar = $('.bar')
  const $reverse = $('.reverse')
  let $tiles

  function request(typeUrl, init=false){
    //Fake progress bar!
    $bar.addClass('load').css('opacity','1')
    setTimeout(function () {
      $bar.removeClass('load').css('opacity','0')
    }, 1250)

    function element(name,nativeName,flag,code){
      return `<a href="https://en.wikipedia.org/wiki/${name}" class = "tile" id="${code}">
  <div class="info">
    <h3>${name}</h3>
    <h4>${nativeName}</h4>
  </div>
  <img src=${flag} alt="${name}"/>
</a>`
    }

    $.ajax({
      method: 'GET',
      url: baseURL+'/'+typeUrl
    }).then(countries => {


      //If first call, build country tiles
      //Append the country element to the container
      if(init) {
        countries.forEach(country =>$container
          .append(element(country.name,country.nativeName,country.flag,country.alpha3Code)))
        $tiles = $container.children('a')
        return
      }

      //Hide all countries
      $tiles.hide().css('opacity','0')

      //Show all countries
      if(typeUrl === 'all')$tiles.show().css('opacity','1')

      // Else show filtered countries
      else countries.forEach((country,i) => {
        const $thisCountry = $tiles.filter('#'+country.alpha3Code)

        $thisCountry.show()
        //Add a little animation
        setTimeout(function () {
          $thisCountry.css('opacity','1')
        },200+(delay*i))
      })
    })
  }

  function updateCountries(e,type){
    //Value of input or select

    const $selected = $('select option:selected')
    const val = e.target.value
    const group = $selected.closest('optgroup').attr('value')
    console.log(group)
    if(group==='continent') type = 'region'
    if(group==='regionalBloc') type = 'regionalbloc'
    let searchURL = type+'/'+val
    //If val is empty or all selected, show all
    if(val === '' || val === 'all') searchURL = 'all'
    request(searchURL)
  }

  //Add event listeners
  $regions.on('change',(e)=>updateCountries(e,'region'))
  $search.on('keyup',(e)=>updateCountries(e,'name'))
  $reverse.on('click',()=>$container.toggleClass('reverse'))

  //Trigger initial request
  request('all',true)
}
