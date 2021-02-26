function toFullScreen(element) {
  // check if user allows full screen of elements.
  // This can be enabled or disabled in browser config. By default its enabled.
  // its also used to check if browser supports full screen api.
  if ('fullscreenEnabled' in document
    || 'webkitFullscreenEnabled' in document
    || 'mozFullScreenEnabled' in document
    || 'msFullscreenEnabled' in document) {
    if (document.fullscreenEnabled
      || document.webkitFullscreenEnabled
      || document.mozFullScreenEnabled
      || document.msFullscreenEnabled) {
      // requestFullscreen is used to display an element in full screen mode.
      if ('requestFullscreen' in element) {
        element.requestFullscreen();
      } else if ('webkitRequestFullscreen' in element) {
        element.webkitRequestFullscreen();
      } else if ('mozRequestFullScreen' in element) {
        element.mozRequestFullScreen();
      } else if ('msRequestFullscreen' in element) {
        element.msRequestFullscreen();
      }
    }
  } else {
    throw new Error('User doesn`t allow full screen');
  }
}

export default toFullScreen;
