import getToggleVideoValue from "./utils/getToggleVideoValue.js";

document.addEventListener('DOMContentLoaded', async (e) => {
    const toggle = document.getElementById("toggle");
    toggle.checked = await getToggleVideoValue();
    const x = await getToggleVideoValue()
    console.log(x)
    document.getElementById("toggle").addEventListener("change", function() {
        if (this.checked) {
            console.log('test')
            chrome.storage.sync.set({['toggle_video']: true})
            console.log('test2')
        } else {
          chrome.storage.sync.set({['toggle_video']: false})
        }
      });
})