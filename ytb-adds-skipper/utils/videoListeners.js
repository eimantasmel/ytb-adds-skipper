import {getToggleVideoValue} from "./getStorageData.js";

const nextVideoToggle = () => {
    const video = document.querySelector('video');
    const nextButton = document.querySelector(".ytp-next-button");
    const lastVideoStopContainer = { lastVideoStop: 0 };
    if(video)
    {
        video.addEventListener("pause", async () => {
            const toggleVideo = await getToggleVideoValue();
            const currentTime = new Date().getTime();
            if (currentTime - lastVideoStopContainer.lastVideoStop < 2000 && toggleVideo) 
            {
                nextButton.click();
                lastVideoStopContainer.lastVideoStop = 0;
            }
            else 
                lastVideoStopContainer.lastVideoStop = new Date().getTime();
            
        });
        video.addEventListener("play", async () => {
            const toggleVideo = await getToggleVideoValue();
            const currentTime = new Date().getTime();
            if (currentTime - lastVideoStopContainer.lastVideoStop < 2000 && toggleVideo) 
            {
                nextButton.click();
                lastVideoStopContainer.lastVideoStop = 0;
            }
            else 
                lastVideoStopContainer.lastVideoStop = new Date().getTime();
        });
    }
}

export default nextVideoToggle;