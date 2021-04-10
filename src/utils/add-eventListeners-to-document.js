// import screenChange from './screenChange';

function addEventListenersToDocument() {
  // called when an event goes full screen and vice-versa.
  // document.addEventListener('fullscreenchange', screenChange);
  // document.addEventListener('webkitfullscreenchange', screenChange);
  // document.addEventListener('mozfullscreenchange', screenChange);
  // document.addEventListener('MSFullscreenChange', screenChange);

  // called when requestFullscreen(); fails.
  // it may fail if iframe don't have allowfullscreen attribute enabled or for something else.
  document.addEventListener('fullscreenerror', () => { throw new Error('Full screen failed'); });
  document.addEventListener('webkitfullscreenerror', () => { throw new Error('Full screen failed'); });
  document.addEventListener('mozfullscreenerror', () => { throw new Error('Full screen failed'); });
  document.addEventListener('MSFullscreenError', () => { throw new Error('Full screen failed'); });
}

export default addEventListenersToDocument;
