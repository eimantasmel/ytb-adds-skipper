
const hideYoutubeBarElement = () => {
    document.body.addEventListener('keydown', (e) => {
        if(e.key == 'Enter')
        {
            document.querySelector('.ytp-chrome-bottom').style.opacity == 1 ? document.querySelector('.ytp-chrome-bottom').style.opacity = 0 : document.querySelector('.ytp-chrome-bottom').style.opacity = 1;
            document.querySelector('.ytp-chrome-top').style.opacity == 1 ? document.querySelector('.ytp-chrome-top').style.opacity = 0 : document.querySelector('.ytp-chrome-top').style.opacity = 1;

            const bookmark_btn = document.querySelector('.bookmark-btn');
            if(bookmark_btn)
                bookmark_btn.click();
        }
    })
};
const skipYoutubeAds = (min_time) => {
    const intervalId = window.setInterval(() => {
        const element = document.querySelector('.ytp-ad-skip-button-text-centered');
        const unskippable_ad_preview = document.querySelector('.ytp-ad-preview-container')
        if(element)
            element.click();
        else if(unskippable_ad_preview)
        {
            const time_of_add = Number(document.querySelector('.ytp-time-duration').innerHTML.split(':')[1]);
            document.getElementsByClassName('video-stream')[0].currentTime = time_of_add;
        }

        const ytb_play_progresses = document.querySelectorAll('.ytp-play-progress.ytp-swatch-background-color')
        change_color_of_progress_bars(ytb_play_progresses,'deeppink')

    }, min_time);
}

const change_color_of_progress_bars = (elements, color) => {
    if(elements)
    {
        elements.forEach((element) => {
            element.style.background = color;
        })
    }
}

hideYoutubeBarElement()
skipYoutubeAds(700)
