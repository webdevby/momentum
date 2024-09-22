import { showTime } from "./time.js";
import { showGreeting } from "./greeting.js";
import { setBg } from "./imageSlider.js";
import { getWeather } from "./weather.js";
import { getQuotes } from "./quotes.js";
import { playAudio } from "./audioPlayer.js";
import name from "./greeting.js";
import city from "./weather.js";

function setLocalStorage() {
  localStorage.setItem('name', name.value);
  localStorage.setItem('city', city.value);
}

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
  if(localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
  }
}

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
name.addEventListener('change', setLocalStorage);
city.addEventListener('change', setLocalStorage);

showTime();
showGreeting();
setBg();
getWeather();
getQuotes();