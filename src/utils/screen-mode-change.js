import toFullScreen from './to-full-screen';

function screenModeChange(element) {
  // fullscreenElement is assigned to html element if any element is in full screen mode.
  if (document.fullscreenElement
    || document.webkitFullscreenElement
    || document.mozFullScreenElement
    || document.msFullscreenElement) {
    // exitFullscreen us used to exit full screen manually
    if ('exitFullscreen' in document) {
      document.exitFullscreen();
    } else if ('webkitExitFullscreen' in document) {
      document.webkitExitFullscreen();
    } else if ('mozCancelFullScreen' in document) {
      document.mozCancelFullScreen();
    } else if ('msExitFullscreen' in document) {
      document.msExitFullscreen();
    }
  } else toFullScreen(element);
}

export default screenModeChange;
