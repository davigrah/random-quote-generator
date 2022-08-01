/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/** *
 * `quotes` array
***/

const quotes = [
  {
    quote: 'Be yourself: everyone else is already taken.',
    source: 'Oscar Wilde'
  },
  {
    quote: 'A room without books is like a body without a soul.',
    source: 'Marcus Tullius Cicero'
  },
  {
    quote: 'You only live once, but if you do it right, once is enough.',
    source: 'Mae West'
  },
  {
    quote: 'Be the change that you wish to see in the world.',
    source: 'Mahatma Gandhi'
  },
  {
    quote: 'Out of the mountain of despair, a stone of hope.',
    citation: '“I Have a Dream” speech:',
    year: '1963',
    source: 'Martin Luther King'
  }
]

// /***
//  * `getRandomQuote` function
// ***/

function getRandomQuote () {
  const random = Math.floor(Math.random() * quotes.length)
  return quotes[random]
}

/***
 * `printQuote` function
***/

function printQuote () {
  const randomQuote = getRandomQuote()
  let html = `<p class="quote"> ${randomQuote.quote} </p>  
              <p class="source"> ${randomQuote.source}  `
  if (Object.keys(randomQuote).includes('citation')) {
    html += `<span class="citation">${randomQuote.citation} </span> </p> `
  }

  if (Object.keys(randomQuote).includes('year')) {
    html += `<span class="citation">${randomQuote.year} </span> </p> `
  }
  document.getElementById('quote-box').innerHTML = html
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener('click', printQuote, false)
