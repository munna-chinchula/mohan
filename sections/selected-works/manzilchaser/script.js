/* Responsive frame measurements are kept here in Figma pixels, separate from chapter content. */
const responsiveFrames={
 mobile:{width:360,paperLeft:20,paperWidth:320,paperTop:225.6144,contentTop:272.9347,paperEnd:3076.595,end:3116,copyTop:57.9763,copyWidth:450,logoWidth:99.2653,titleWidth:264.7059,subtitle:8.456,laptopTop:139.563,positions:[0,327.1504,594.6014,851.4902,1182.8464,1445.0818,1662.402,2126.3198,2690.171,2936.487]},
 tablet:{width:768,paperLeft:43,paperWidth:682.875,paperTop:386.2977,contentTop:487.2785,paperEnd:6470.2456,end:6510,copyTop:79.1882,copyWidth:682.88,logoWidth:149.8486,titleWidth:401.6941,subtitle:12.832,laptopTop:202.6654,positions:[0,599.9642,1168.3411,1715.1066,2413.4577,2970.5082,3432.5671,4414.7504,5616.3102,6140.4514]}
};
function resizeStudy(){
 const width=document.documentElement.clientWidth,root=document.documentElement;
 if(width>1024){root.style.setProperty('--study-scale',width/1440);document.querySelectorAll('.case-chapter').forEach(c=>c.style.removeProperty('--chapter-height'));return;}
 const f=responsiveFrames[width<600?'mobile':'tablet'],ratio=width/f.width,scale=f.paperWidth*ratio/1224;
 const set=(name,value)=>root.style.setProperty('--'+name,value);
 set('study-scale',scale);set('inverse-study-scale',1/scale);set('responsive-canvas',width/scale+'px');set('paper-left',f.paperLeft*ratio/scale+'px');
 for(const [name,key] of Object.entries({'hero-paper-top':'paperTop','hero-copy-width':'copyWidth','hero-logo-width':'logoWidth','hero-title-width':'titleWidth','hero-subtitle-size':'subtitle'}))set(name,f[key]*ratio/scale+'px');
 set('hero-copy-top',(f.copyTop*ratio-46)/scale+'px');set('hero-laptop-top',(f.laptopTop*ratio-46)/scale+'px');
 set('summary-top',(f.contentTop-f.paperTop)*ratio/scale+'px');set('reflection-paper-height',(f.paperEnd-f.positions[9])*ratio/scale+'px');set('thanks-height',48*ratio/scale+'px');
 document.querySelectorAll('.case-chapter').forEach((chapter,i)=>chapter.style.setProperty('--chapter-height',((f.positions[i+1]??f.end)-f.positions[i])*ratio/scale+'px'));
}
resizeStudy();window.addEventListener('resize',resizeStudy);
const toggle=document.querySelector('.study-menu-toggle'),navigation=document.querySelector('#study-navigation');
function closeNavigation(){toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');navigation.classList.remove('is-open');}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');navigation.classList.toggle('is-open',open);});
navigation.addEventListener('click',event=>{if(event.target.closest('a'))closeNavigation();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeNavigation();toggle.focus();}});
document.addEventListener('click',event=>{if(!event.target.closest('.study-nav'))closeNavigation();});
window.addEventListener('resize',closeNavigation);
