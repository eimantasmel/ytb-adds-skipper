import {getToggleVideoValue, getToggleShiftPlay} from "./utils/getStorageData.js";

document.addEventListener('DOMContentLoaded', async (e) => {
    const toggleNext = document.getElementById("toggle_next");
    toggleNext.checked = await getToggleVideoValue();
    const toggleShiftPlay = document.getElementById("toggle_shift_play");
    toggleShiftPlay.checked = await getToggleShiftPlay();

    const x = await getToggleVideoValue()
    console.log(x)
    document.getElementById("toggle_next").addEventListener("change", function() {
        if (this.checked) {
            chrome.storage.sync.set({['toggle_video']: true})
        } else {
          chrome.storage.sync.set({['toggle_video']: false})
        }
      });

    document.getElementById("toggle_shift_play").addEventListener("change", function() {
        if (this.checked) {
            chrome.storage.sync.set({['toggle_shift']: true})
        } else {
          chrome.storage.sync.set({['toggle_shift']: false})
        }
      });
})