$(() =>{

  const $lines = $('.lines')

  function getTubeLines(){

    $.ajax({
      method: 'GET',
      url: 'https://api.tfl.gov.uk/line/mode/tube/status'
    })
      .then(lines => {
        lines.forEach(line => {
          $lines.append(`
        <div class="line">
        <h1>${line.name}</h1>
        <h4>${line.lineStatuses[0].statusSeverityDescription}</h4>
        </div>
        `)
        })
      })

    setTimeout(getTubeLines, 4000)

  }
  getTubeLines()
})
