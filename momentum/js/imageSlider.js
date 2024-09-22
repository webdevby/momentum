import { getTimeOfDay } from "./greeting.js";

const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

let imgIndexMin = 1;
let imgIndexMax = 20;
let bgNum = getRandomNum(imgIndexMin, imgIndexMax);

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setBg() {
  if(bgNum < 10) bgNum = "0" + bgNum;
  const timeOfDay = getTimeOfDay();

  const img = new Image();
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
  // img.src = `https://github.com/hotlovestl/stage1-tasks/blob/assets/images/${timeOfDay}/${bgNum}.jpg`;
  img.onload = () => { document.body.style.backgroundImage = `url('${img.src}')` }; 
}

function getSlideNext() {
  if(bgNum === imgIndexMax) bgNum = imgIndexMin - 1;
  bgNum++;
  setBg();
}

function getSlidePrev() {
  if(bgNum === '01') bgNum = imgIndexMax + 1;
  bgNum--;
  setBg();
}

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

export { setBg, getRandomNum };