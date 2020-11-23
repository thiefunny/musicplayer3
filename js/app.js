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





// Module.prototype.play = function (audioArg, timerArg, moduleArg) {

//   this.playModuleEl.addEventListener("click",
//     function () {
//       console.log(moduleArg);
//       if (audioArg.paused) {
//         for (let elem of modulesArr) {
//           elem.audioEl.pause();
//         }
//         audioArg.play();
//         timerArg = setInterval(function () {
//           progressBarPercentage.style.width = `${audioArg.currentTime / audioArg.duration * 100}%`;
//         }, 50);
//       } else {
//         audioArg.pause();
//         clearInterval(timerArg);
//       }
//       moduleNumberReturned = moduleArg;
//       return moduleNumberReturned;
//     }
//   )
// }







// const createModule = _ => {

//     playModule.innerHTML = `
//   <div class="play__module__content">
//     <div class="play__button__right">
//         &#9658;
//         <audio src="${song["url"]}"></audio>
//     </div>
//     <div class="title__area">
//       <div class="title__content">
//         <p class="title__album">${song["title"]}</p>
//         <p class="title__song">${song["artist"]}</p>
//       </div>
//     </div>
//     <div class="song__duration">${song["time"]}</div>
//   </div>`
//   }