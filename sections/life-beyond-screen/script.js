// Two identical photo groups keep the end-to-start transition seamless.
const lifeGallery = document.querySelector('[data-node-id="213:8659"]');
if (lifeGallery) {
  lifeGallery.classList.add('life-gallery');
  lifeGallery.setAttribute('tabindex', '0');
  lifeGallery.setAttribute('aria-label', 'Life beyond the screen photos. Focus or hover to pause scrolling.');
  const track = document.createElement('div');
  track.className = 'life-track';
  const group = document.createElement('div');
  group.className = 'life-group';
  group.append(...lifeGallery.children);
  const duplicate = group.cloneNode(true);
  duplicate.setAttribute('aria-hidden', 'true');
  duplicate.querySelectorAll('[data-node-id]').forEach(el => el.removeAttribute('data-node-id'));
  track.append(group, duplicate);
  lifeGallery.append(track);
}
