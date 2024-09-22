import { getRandomNum } from "./imageSlider.js";

const btnQuote = document.querySelector('.change-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

let randomNum; 

async function getQuotes() {  
  const quotes = 'assets/quotes/data.json';
  const res = await fetch(quotes);
  const data = await res.json();

  randomNum = getRandomNum(0, data.length);
  quote.textContent = data[randomNum].text;
  author.textContent = data[randomNum].author;
}

btnQuote.addEventListener('click', getQuotes);

export { getQuotes };