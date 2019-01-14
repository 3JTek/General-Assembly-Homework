$(() => {
$flags = $('.flags')
console.log($flags);

  $.ajax({
    method: 'GET',
    url: 'https://restcountries.eu/rest/v2/all'
  }).then(flags => {
    flags.forEach(flag => {
      $flags.append(`
        <div class="flag">
          <h3>${flag.name}</h3>
          <h4>${flag.nativeName}</h4>
          <img src=${flag.flag}></img>
        </div>
      `)
    })
  })
})
