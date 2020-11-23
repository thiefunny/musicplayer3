  import {
    playButtonLeftEl,
  } from '/musicplayer3/js/dom.js'

const song = new Audio();

song.src = '/musicplayer3/music/morrowind.mp3'

const playIt = () => {

    if (song.paused) {
        song.play();
      } else {
        song.pause(); 
      }      
    }

playButtonLeftEl.addEventListener("click", playIt);