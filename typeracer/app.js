/* global samples */
$(() => {

  console.log('js loaded')

  //find the first text textarea
  //find the text area for user
  //find the word Count
  // find the WPM
  const $text = $('.text')
  const $input = $('.input')
  const $wordcount = $('.word-count')
  const $wpm = $('.wpm')
  let wordCount = 0
  let i = 0

  //fill the text area with paragraphs from data.js - random
  const textSamples = samples[Math.floor(Math.random() * samples.length)]
  $text.text(textSamples)
  //add event listener for key up, only type if input matches text
  $input.on('keydown', (e) => {
    if(e.key === textSamples.charAt(i)) {
      i++
      wordCounter(e)
      $wordcount.text(`Your word count is ${wordCount}`)
    } else { e.preventDefault()
    }
  })

  function wordCounter(e) {
    if(e.key === ' ') wordCount++
    return wordCount
  }








})
