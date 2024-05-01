export async function getToggleVideoValue() {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get('toggle_video', (result) => {
            resolve(result.toggle_video);
        })
    })
}

export async function getToggleShiftPlay() {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get('toggle_shift', (result) => {
            resolve(result.toggle_shift);
        })
    })
}
