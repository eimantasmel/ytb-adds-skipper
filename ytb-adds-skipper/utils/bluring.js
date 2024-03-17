export function blurVideo(lastVideoStopContainer) {
    let video = document.querySelector('.html5-main-video')
    lastVideoStopContainer.lastVideoStop = new Date().getTime();
    video.style.filter = 'blur(40px)';
}

export function unBlurVideo(lastVideoStopContainer) {
     let currentTime = new Date().getTime();
     let video = document.querySelector('.html5-main-video')
     if(currentTime - lastVideoStopContainer.lastVideoStop > 2000)
     {
         video.style.filter = 'none';
     }
}