function resizeStudy(){
  document.documentElement.style.setProperty('--study-scale', document.documentElement.clientWidth / 1440);
  const exploration=document.querySelector('.exploration-viewport');
  if(exploration)document.documentElement.style.setProperty('--exploration-scale',exploration.clientWidth/894);
}
resizeStudy();
window.addEventListener('resize',resizeStudy);
const explorationViewport=document.querySelector(".exploration-viewport");if(explorationViewport)new ResizeObserver(resizeStudy).observe(explorationViewport);
