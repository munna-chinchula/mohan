const resizeDesign = () => document.documentElement.style.setProperty('--design-scale', document.documentElement.clientWidth / 1440);
resizeDesign();
window.addEventListener('resize', resizeDesign);
import './sections/life-beyond-screen/script.js';
// Enable smooth scrolling while honoring the visitor's motion preference.
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  import('https://cdn.jsdelivr.net/npm/lenis@1.3.17/+esm').then(({default: Lenis}) => {
    const lenis = new Lenis({autoRaf:true, anchors:true});
    window.portfolioScroll = lenis;
  }).catch(() => {});
}
const notice = document.querySelector('#notice');
function showNotice(message) {
  document.querySelector('#notice-text').textContent = message;
  notice.showModal();
}
document.querySelectorAll('[data-missing]').forEach(button => button.addEventListener('click', () => showNotice(`${button.dataset.missing} has not been added yet.`)));
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', event => {
  if (!document.querySelector(link.hash)) {
    event.preventDefault();
    showNotice('This section is awaiting its Figma design and content.');
  }
}));
const pendingLinks = {'213:8693':'Resume link','213:8696':'LinkedIn URL','213:8699':'Email address','213:8702':'Medium URL','213:8705':'Instagram URL','213:8052':'ManzilChaser case study','213:8068':'Vasthra Shree case study'};
document.querySelectorAll('.figma-canvas div').forEach(el => {
  const id = el.dataset.nodeId;
  const isCase = el.dataset.name?.startsWith('a.framer-');
  if (!pendingLinks[id] && !isCase) return;
  el.setAttribute('role','button');
  el.setAttribute('tabindex','0');
  const activate = () => showNotice(`${pendingLinks[id] || 'Case study link'} has not been added yet.`);
  el.addEventListener('click',activate);
  el.addEventListener('keydown',e => {if(e.key==='Enter'||e.key===' '){e.preventDefault();activate();}});
});

import './sections/hero/navigation.js';

import './sections/selected-works/responsive.js';
