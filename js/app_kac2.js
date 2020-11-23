  import {
    playButtonLeftEl,
  } from '/musicplayer3/js/dom.js'

const song = new Audio();

const playIt = () => {

    song.src = '/musicplayer3/music/morrowind.mp3'
    
    if (song.paused) {
        song.play();
      } else {
        song.pause(); 
      }      
    }

playButtonLeftEl.addEventListener("click", playIt);