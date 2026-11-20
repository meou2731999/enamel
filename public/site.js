const root = document.documentElement;
const preference = matchMedia('(prefers-reduced-motion: reduce)');
const portal = document.querySelector('.portal');
const stage = portal.querySelector('.stage');
const statement = document.querySelector('.statement');
const reveals = document.querySelectorAll('.reveal');
let frame = 0;
const clamp = value => Math.min(1, Math.max(0, value));
const css = (element, values) => {
  for (const [key, value] of Object.entries(values)) element.style.setProperty('--' + key, value);
};

function renderScroll() {
  frame = 0;
  if (preference.matches) return;
  const distance = Math.min(700, portal.offsetHeight - stage.offsetHeight);
  const progress = clamp(-portal.getBoundingClientRect().top / Math.max(1, distance));
  const p = progress * (2 - progress);
  const x = stage.clientWidth * .42 * p;
  const y = stage.clientHeight * .31 * p;
  css(stage, {
    'panel-left': (-103 * p) + '%',
    'panel-right': (103 * p) + '%',
    'image-scale': 1.14 - .14 * p,
    wash: .19 * p,
    axis: 1 - p,
    'title-scale': 1 + .12 * p,
    tracking: (-.02 - .055 * p) + 'em',
    first: (-54 * p) + '%',
    last: (54 * p) + '%',
    ax: (-12 - x) + 'px',
    ay: (-40 - y) + 'px',
    tx: (12 + x) + 'px',
    ty: (40 + y) + 'px'
  });
  const fold = statement.getBoundingClientRect();
  const drift = clamp((innerHeight - fold.top) / (innerHeight + fold.height)) - .5;
  css(statement, {drift: (drift * 140) + 'px', spin: (drift * 38) + 'deg'});
}

function scheduleScroll() {
  if (!frame) frame = requestAnimationFrame(renderScroll);
}

const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  }
}, {threshold: .08}) : null;

function syncMotion() {
  root.classList.toggle('motion', !preference.matches);
  if (preference.matches) {
    stage.removeAttribute('style');
    statement.removeAttribute('style');
    observer?.disconnect();
  } else {
    renderScroll();
    for (const item of reveals) {
      if (!observer) item.classList.add('visible');
      else if (!item.classList.contains('visible')) observer.observe(item);
    }
  }
}

syncMotion();
preference.addEventListener('change', syncMotion);
addEventListener('scroll', scheduleScroll, {passive: true});
addEventListener('resize', scheduleScroll);

const deck = document.querySelector('.deck');
const sleeves = [...deck.querySelectorAll('.sleeve')];
const controls = document.querySelector('.deck-controls');
const progress = controls.querySelector('.progress');
const status = controls.querySelector('[role=status]');
let current = 0;
let drag = null;
let throwing = false;
const dots = sleeves.map((sleeve, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.setAttribute('aria-label', 'Show ' + sleeve.querySelector('strong').textContent);
  button.addEventListener('click', () => {
    if (index !== current) throwCard(Math.sign(index - current), index);
  });
  progress.append(button);
  return button;
});

function stack() {
  sleeves.forEach((sleeve, index) => {
    const depth = (index - current + sleeves.length) % sleeves.length;
    sleeve.dataset.position = depth;
    sleeve.setAttribute('aria-hidden', String(depth !== 0));
    css(sleeve, {
      dx: (depth * 5.5) + '%',
      dy: (depth * -3) + '%',
      angle: (depth * 4.5) + 'deg',
      scale: 1 - depth * .045,
      layer: sleeves.length - depth
    });
    dots[index].setAttribute('aria-current', String(depth === 0));
  });
  status.textContent = sleeves[current].querySelector('strong').textContent;
}

function throwCard(direction, next = (current + direction + sleeves.length) % sleeves.length, travel = direction) {
  if (throwing || drag) return;
  const sleeve = sleeves[current];
  throwing = true;
  sleeve.classList.remove('dragging');
  const finish = () => {
    sleeve.classList.add('dragging');
    current = next;
    stack();
    requestAnimationFrame(() => {
      sleeve.classList.remove('dragging');
      throwing = false;
    });
  };
  if (preference.matches) finish();
  else {
    css(sleeve, {dx: (travel * deck.clientWidth * 1.18) + 'px', dy: '-11%', angle: (travel * 21) + 'deg', scale: .94});
    setTimeout(finish, 350);
  }
}

deck.addEventListener('pointerdown', event => {
  if (!event.isPrimary || event.button !== 0 || throwing) return;
  deck.setPointerCapture(event.pointerId);
  drag = {id: event.pointerId, x: event.clientX, y: event.clientY};
  sleeves[current].classList.add('dragging');
});
deck.addEventListener('pointermove', event => {
  if (drag?.id !== event.pointerId || preference.matches) return;
  const dx = event.clientX - drag.x;
  const dy = (event.clientY - drag.y) * .25;
  css(sleeves[current], {dx: dx + 'px', dy: dy + 'px', angle: (dx / deck.clientWidth * 25) + 'deg', scale: 1.02});
});
function finishDrag(event) {
  if (drag?.id !== event.pointerId) return;
  const dx = event.clientX - drag.x;
  drag = null;
  sleeves[current].classList.remove('dragging');
  if (event.type === "pointerup" && Math.abs(dx) >= deck.clientWidth * .1) {
    const direction = dx < 0 ? 1 : -1;
    throwCard(direction, undefined, Math.sign(dx));
  }
  else stack();
}
deck.addEventListener('pointerup', finishDrag);
deck.addEventListener('pointercancel', finishDrag);
deck.addEventListener('lostpointercapture', finishDrag);
deck.addEventListener('keydown', event => {
  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
  event.preventDefault();
  if (!drag) throwCard(event.key === 'ArrowRight' ? 1 : -1);
});
controls.querySelectorAll('[data-step]').forEach(button => {
  button.addEventListener('click', () => {
    if (!drag) throwCard(Number(button.dataset.step));
  });
});
stack();
root.classList.add('enhanced');
