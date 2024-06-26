import { unBlurVideo, blurVideo } from "./utils/bluring.js";
import { getToggleShiftPlay } from "./utils/getStorageData.js";
import nextVideoToggle from "./utils/videoListeners.js";
let lastVideoStopContainer = { lastVideoStop: 0 };

const blurListener = () => blurVideo(lastVideoStopContainer);
const unBlurListener = () => unBlurVideo(lastVideoStopContainer);
const hideYoutubeBarElement = () => {
  document.body.addEventListener("keydown", async (e) => {
    const playBtn = document.querySelector('.ytp-play-button');
    const shiftPlay = await getToggleShiftPlay();
    if(e.key == "Shift" && playBtn && shiftPlay){
      playBtn.click();
    }
    else if (e.key == "Enter") {
      document.querySelector(".ytp-chrome-bottom").style.opacity == 1
        ? (document.querySelector(".ytp-chrome-bottom").style.opacity = 0)
        : (document.querySelector(".ytp-chrome-bottom").style.opacity = 1);
      document.querySelector(".ytp-chrome-top").style.opacity == 1
        ? (document.querySelector(".ytp-chrome-top").style.opacity = 0)
        : (document.querySelector(".ytp-chrome-top").style.opacity = 1);

      const bookmark_btn = document.querySelector(".bookmark-btn");
      if (bookmark_btn) bookmark_btn.click();
    } else if (e.key == "Escape") {
      const show_more_btn = document.querySelector("a[title='Show more']");
      let liked_videos_link = document.querySelector("a[title='Liked videos']");

      if (show_more_btn) {
        show_more_btn.click();
        setTimeout(() => {
          let liked_videos_link = document.querySelector(
            "a[title='Liked videos']"
          );
          liked_videos_link.click();
        }, 500);
      } else if (liked_videos_link) liked_videos_link.click();
    }
  });
};
const skipYoutubeAds = (min_time) => {
  const intervalId = window.setInterval(() => {
    const element = document.querySelector("button.ytp-skip-ad-button");
    const unskippable_ad_preview = document.querySelector(
      ".ytp-preview-ad"
    )
    const confirm_button = document.getElementById("confirm-button");
    const confirm_feedback = document.querySelector(
      "#confirm-button .yt-spec-touch-feedback-shape__fill"
    );

    if (element) element.click();
    else if (unskippable_ad_preview) {
      const time_of_add = Number(
        document.querySelector(".ytp-time-duration").innerHTML.split(":")[1]
      );
      document.getElementsByClassName("video-stream")[0].currentTime =
        time_of_add;
    } else if (confirm_button && confirm_feedback) {
      confirm_feedback.click();
    }

    const ytb_play_progresses = document.querySelectorAll(
      ".ytp-play-progress.ytp-swatch-background-color"
    );
    change_color_of_progress_bars(ytb_play_progresses, "deeppink");
    const chromeBottom = document.querySelector(".ytp-chrome-bottom");
    if (chromeBottom) chromeBottom.style.background = "black";
  }, min_time);
};

const change_color_of_progress_bars = (elements, color) => {
  if (elements) {
    elements.forEach((element) => {
      element.style.background = color;
    });
  }
};

hideYoutubeBarElement();
skipYoutubeAds(700);


const intervalId = setInterval(() => {
  const video = document.querySelector('video')
  if(video)
  {
    nextVideoToggle();
    clearInterval(intervalId);
  }

}, 2000)
