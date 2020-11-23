//import of songs array and DOM cache

import {
  songsArr
} from '/js/songs.js'
import {
  // coverEl,
  songsCounterEl,
  playButtonLeftEl,
  rightPanel,
  progressBarPercentage,
  // progressBar
} from '/js/dom.js'

const currentlyPlayingSongIndex = 0;
let selectedIndex = 0;

const song = new Audio();
song.src = `${songsArr[currentlyPlayingSongIndex]["url"]}`

const setSource = index => {
  song.src = `${songsArr[index]["url"]}`
}

const playIt = () => {
  
  if (song.paused) {
    song.play();
  } else {
    song.pause();
  }
}

const listen = (el) => {
  el.addEventListener("click", setSource(selectedIndex));
  el.addEventListener("click", function() {console.log(selectedIndex)});
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

const selectIndex = event => {

  if (event.target.matches(".play__button__right")) {

    const clickedLiElement = event.target.parentNode.parentNode;
    const liElements = event.target.parentNode.parentNode.parentNode.children;
    const arrayOfLiElements = [...liElements];

    selectedIndex = arrayOfLiElements.indexOf(clickedLiElement);
    console.log(`selectedIndex: ${selectedIndex}`)
        
  }

  return selectedIndex;

}



createModule();
rightPanel.addEventListener("click", selectIndex);
listen(playButtonLeftEl);

// const buttonPlayRight = document.querySelectorAll('.play__button__right');
// for (let elem of buttonPlayRight) {
//   listen(elem);
// }