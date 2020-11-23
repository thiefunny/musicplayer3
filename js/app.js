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

const selectedPlaylistElementIndex = null;
const currentlyPlayingSongIndex = null;
const song = new Audio();
// song.src = '../music/morrowind.mp3'

const playIt = () => {
    song.src = '../music/morrowind.mp3'
    if (song.paused) {
        console.log("1")
        song.play();
      } else {
        song.pause(); 
        console.log("2")
      }      
    }

playButtonLeftEl.addEventListener("click", playIt);