//import of songs array and DOM cache

import {
  songsArr
} from 'js/songs.js'
import {
  coverEl,
  songsCounterEl,
  playButtonLeftEl,
  rightPanel,
  progressBarPercentage,
  // progressBar
} from 'js/dom.js'

let currentlyPlayingSongIndex = 0;
let selectedIndex = 0;

const song = new Audio();

const setSource = _ => {
  song.src = `${songsArr[selectedIndex]["url"]}`
}

setSource();

const playIt = () => {
  if (song.paused) {
      song.play();
  } else {
      song.pause();
  }
}

const listen = (el) => {
  el.addEventListener("click", playIt);
}

const createModule = _ => {
  for (let elem of songsArr) {
      rightPanel.innerHTML += `
  <li class="play__module">
    <div class="play__module__content">
      <div class="play__button__right">
      &#9658;
      </div>
      <div class="title__area">
        <div class="title__content">
          <p class="title__album">${elem["title"]}</p>
          <p class="title__song">${elem["artist"]}</p>
        </div>
      </div>
    <div class="song__duration">${elem["time"]}</div>
    </div>
  </li>`
  }
}

const ifThanPlay = _ => {
  if (currentlyPlayingSongIndex != selectedIndex) {
      // console.log(`selectedIndex: ${selectedIndex}`)
      // console.log(`currentlyPlayingSong: ${currentlyPlayingSongIndex}`)
      currentlyPlayingSongIndex = selectedIndex;
      setSource();
      playIt();
  } else {
      // console.log(`else selectedIndex: ${selectedIndex}`)
      // console.log(`else currentlyPlayingSong: ${currentlyPlayingSongIndex}`)
      playIt();
  }
}

const selectIndex = event => {
  let liElements = event.target.parentNode.parentNode.parentNode.children;
  const clickedLiElement = event.target.parentNode.parentNode;
  const arrayOfLiElements = [...liElements];
  if (event.target.matches(".play__button__right")) {
      selectedIndex = arrayOfLiElements.indexOf(clickedLiElement);
      ifThanPlay();
  }
}

const progressBarFunc = _ => {
  progressBarPercentage
}


createModule();

rightPanel.addEventListener("click", selectIndex);

listen(playButtonLeftEl);

progressBarFunc();