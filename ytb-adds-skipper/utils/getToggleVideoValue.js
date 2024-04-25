async function getToggleVideoValue() {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get('toggle_video', (result) => {
            resolve(result.toggle_video);
        })
    })
}
export default getToggleVideoValue;