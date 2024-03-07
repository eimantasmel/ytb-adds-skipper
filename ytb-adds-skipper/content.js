const hideYoutubeBarElement = () => {
    document.body.addEventListener('keydown', (e) => {
        if(e.key == 'Enter')
        {
            document.querySelector('.ytp-chrome-bottom').style.opacity == 1 ? document.querySelector('.ytp-chrome-bottom').style.opacity = 0 : document.querySelector('.ytp-chrome-bottom').style.opacity = 1;
            document.querySelector('.ytp-chrome-top').style.opacity == 1 ? document.querySelector('.ytp-chrome-top').style.opacity = 0 : document.querySelector('.ytp-chrome-top').style.opacity = 1;
        }
    })
};
const skipYoutubeAds = () => {
    const intervalId = window.setInterval(() => {
        const element = document.querySelector('.ytp-ad-skip-button-text-centered');
        if(element)
            element.click();
    }, 300);
}

hideYoutubeBarElement()
skipYoutubeAds()