  import {
    playButtonLeftEl,
  } from '/musicplayer3/js/dom.js'

const song = new Audio();

const playIt = () => {
    song.src = '/musicplayer3/music/morrowind.mp3'
    if (song.paused) {
        console.log("1")
        song.play();
      } else {
        song.pause(); 
        console.log("2")
      }      
    }

playButtonLeftEl.addEventListener("click", playIt);