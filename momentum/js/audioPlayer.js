import playList from "./playList.js";

const audio = document.createElement('audio');
const btnPlay = document.querySelector('.play');
const btnPlayNext = document.querySelector('.play-next');
const btnPlayPrev = document.querySelector('.play-prev');
const playListContainer = document.querySelector('.play-list');

let isPlay = false;
let playNum = 0;

function addAudio() {
  document.body.prepend(audio);
}

function playAudio() {
  isPlay = !isPlay;
  audio.src = playList[playNum].src;
  playListContainer.childNodes[playNum].classList.add('current-audio');
  
  if(isPlay) audio.play();
  else audio.pause();
}

function toggleBtn() {
  btnPlay.classList.toggle('pause');
}

function pauseBtn() {
  btnPlay.classList.add('pause');
}

function playNext() {
  if(playNum === playList.length - 1) playNum = -1;
  isPlay = false;
  playNum++;
  if(playNum !== 0) playListContainer.childNodes[playNum - 1].classList.remove('current-audio');
  if(playNum === 0) playListContainer.childNodes[playList.length - 1].classList.remove('current-audio');
  playAudio();
}

function playPrev() {
  if(playNum === 0) playNum = playList.length;
  isPlay = false;
  playNum--;
  if(playNum !== playList.length - 1) playListContainer.childNodes[playNum + 1].classList.remove('current-audio');
  if(playNum === playList.length - 1) playListContainer.childNodes[0].classList.remove('current-audio');
  playAudio();
}

playList.forEach(el => {
  const li = document.createElement('li');
  li.classList.add('play-item');
  li.textContent = el.title;
  playListContainer.append(li);
});

audio.addEventListener('ended', playNext);
btnPlay.addEventListener('click', playAudio);
btnPlay.addEventListener('click', addAudio);
btnPlay.addEventListener('click', toggleBtn);
btnPlayNext.addEventListener('click', playNext);
btnPlayNext.addEventListener('click', pauseBtn);
btnPlayPrev.addEventListener('click', playPrev);
btnPlayPrev.addEventListener('click', pauseBtn);

export { playAudio };