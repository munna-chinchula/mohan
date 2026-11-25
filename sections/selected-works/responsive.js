function resizeWorks(){const width=document.documentElement.clientWidth;document.querySelector('#work').style.setProperty('--works-scale',width/(width<=600?390:width<=1100?1024:1440));}
resizeWorks();window.addEventListener('resize',resizeWorks);
