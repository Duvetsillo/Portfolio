import { createPetTextures } from './assets/karen/textures.js';

// This is an isolated visual preview. It never requests media, AI or network access.
const stage = document.querySelector('[data-pet-stage]');
const canvas = stage?.querySelector('canvas');
const ctx = canvas?.getContext('2d', { alpha: true });
if (ctx) mountPet();

function mountPet() {
  const textures = createPetTextures('#83e5f4');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  const pause = stage.querySelector('[data-pet-pause]');
  const greeting = stage.querySelector('[data-pet-greet]');
  const output = stage.querySelector('[data-pet-status]');
  const hint = stage.querySelector('[data-pet-hint]');
  const buttons = [...stage.querySelectorAll('[data-pet-state]')];
  const words = {
    es: { IDLE: 'A tu lado', LISTENING: 'Toda oídos', THINKING: 'Conectando ideas', SPEAKING: 'Una voz propia', SLEEPING: 'Recargando sueños', HAPPY: '¡Hola, qué gusto verte!', pause: 'Pausar animación', resume: 'Reanudar animación', still: 'Movimiento reducido activo', point: 'Mueve el cursor. Ella te sigue.', touch: 'Toca a Karen para saludar.' },
    en: { IDLE: 'By your side', LISTENING: 'All ears', THINKING: 'Connecting ideas', SPEAKING: 'A voice of her own', SLEEPING: 'Recharging dreams', HAPPY: 'Hello, lovely to see you!', pause: 'Pause animation', resume: 'Resume animation', still: 'Reduced motion enabled', point: 'Move your cursor. She follows.', touch: 'Tap Karen to say hello.' }
  };
  let state = 'IDLE', previousState = 'IDLE', userPaused = false, visible = false;
  let frame = 0, last = 0, time = 0, width = 1, height = 1, ratio = 1;
  let gazeX = 0, gazeY = 0, targetX = 0, targetY = 0, tilt = 0, lift = 0;
  let eyeOpen = 1, mouth = 0, brightness = 1, finAngle = 0;
  let nextBlink = 3 + Math.random() * 3, blinkEnd = 0, happyUntil = 0;
  const particles = Array.from({ length: 12 }, (_, i) => ({
    angle: i * 2.3999, radius: 146 + (i % 4) * 10, speed: 0.12 + (i % 3) * 0.05
  }));
  const damp = (from, to, dt, rate = 9) => from + (to - from) * (1 - Math.exp(-rate * dt));
  const moving = () => !userPaused && !reduced.matches;
  const running = () => visible && !document.hidden && moving();

  function labels() {
    const text = words[document.documentElement.lang === 'es' ? 'es' : 'en'];
    output.textContent = text[state];
    pause.disabled = reduced.matches;
    pause.setAttribute('aria-pressed', String(userPaused || reduced.matches));
    pause.setAttribute('aria-label', reduced.matches ? text.still : userPaused ? text.resume : text.pause);
    pause.title = pause.getAttribute('aria-label');
    stage.dataset.paused = String(userPaused || reduced.matches);
    hint.textContent = reduced.matches ? text.still : fine.matches ? text.point : text.touch;
  }

  function select(next) {
    state = next;
    stage.dataset.state = next;
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.petState === next)));
    labels();
    if (!running()) draw(0, true);
  }

  function sprite(texture, x, y, sx = 1, sy = sx, angle = 0, alpha = 1, ax = 0.5, ay = 0.5) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.scale(sx, sy);
    ctx.globalAlpha *= alpha;
    ctx.drawImage(texture, -texture.width * ax, -texture.height * ay);
    ctx.restore();
  }

  function draw(dt, settle = false) {
    const animated = moving();
    const sleeping = state === 'SLEEPING';
    // Speaking energy is procedural for this silent demo, never presented as live audio.
    const energy = state === 'SPEAKING' ? (animated ? Math.pow(Math.max(0, Math.sin(time * 9) * Math.sin(time * 3.7)), 0.6) : 0.4) : 0;
    if (animated && time > nextBlink) {
      blinkEnd = time + 0.14;
      nextBlink = time + 2.8 + Math.random() * 4;
    }
    const blend = settle ? 10 : dt;
    const targetTilt = state === 'THINKING' ? -0.12 : state === 'HAPPY' ? 0.08 : 0;
    tilt = damp(tilt, targetTilt + (animated ? Math.sin(time * 0.7) * 0.018 + targetX * 0.003 : 0), blend);
    lift = damp(lift, animated ? Math.sin(time * 1.65) * 5 + (state === 'HAPPY' ? -Math.max(0, Math.sin(time * 6)) * 12 : sleeping ? 4 : 0) : 0, blend);
    gazeX = damp(gazeX, animated && !sleeping ? targetX : 0, blend, 11);
    gazeY = damp(gazeY, animated && !sleeping ? targetY : 0, blend, 11);
    eyeOpen = damp(eyeOpen, sleeping ? 0.07 : animated && time < blinkEnd ? 0.06 : state === 'HAPPY' ? 0.75 : state === 'LISTENING' ? 1.12 : 1, blend, 22);
    mouth = damp(mouth, energy, blend, 20);
    brightness = damp(brightness, sleeping ? 0.58 : 1, blend, 4);
    finAngle = damp(finAngle, sleeping ? -0.22 : state === 'LISTENING' ? 0.23 : state === 'THINKING' ? -0.12 : 0, blend);

    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    const scale = Math.min(width / 440, height / 420);
    ctx.translate(width / 2, height * 0.54);
    ctx.scale(scale, scale);
    sprite(textures.glow, 0, 0, 3.5, 3.5, 0, sleeping ? 0.1 : 0.23);
    sprite(textures.shadow, 0, 153, 1.2 - lift * 0.003, 1, 0, 0.8);
    ctx.save();
    ctx.translate(0, lift);
    ctx.rotate(tilt);
    const breath = animated ? Math.sin(time * 2.1) * 0.006 : 0;
    ctx.scale(1 + breath - mouth * 0.014, 1 - breath + mouth * 0.014);
    ctx.globalAlpha = brightness;
    const wave = animated ? Math.sin(time * 1.7) * 0.035 : 0;
    sprite(textures.fin, -72, -62, 0.74, 0.74, -0.35 + finAngle + wave, 1, 0.51, 0.9);
    sprite(textures.fin, 72, -62, -0.74, 0.74, 0.35 - finAngle - wave, 1, 0.51, 0.9);
    sprite(textures.arm, -111, 35, 0.65, 0.65, -0.25 - (state === 'HAPPY' ? 0.3 : wave));
    sprite(textures.arm, 111, 35, -0.65, 0.65, 0.25 + wave);
    sprite(textures.body, 0, 0, 0.94);
    for (const side of [-1, 1]) {
      ctx.save();
      ctx.translate(side * 44 + gazeX * 0.15, -7 + gazeY * 0.15);
      const opening = eyeOpen * (state === 'THINKING' && side === -1 ? 0.72 : 1);
      ctx.scale(-side * 0.7, 0.7 * opening);
      sprite(textures.eye, 0, 0);
      // Both pupils travel in screen coordinates, despite the mirrored right eye.
      sprite(textures.iris, 3 - side * gazeX, 6 + gazeY);
      ctx.restore();
    }
    ctx.lineCap = 'round';
    ctx.lineWidth = 3;
    if (mouth > 0.06) {
      ctx.beginPath();
      ctx.ellipse(0, 41, 7 + mouth * 7, 3 + mouth * 16, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#101e38'; ctx.fill();
      ctx.beginPath();
      ctx.ellipse(0, 46 + mouth * 6, 4 + mouth * 4, 2 + mouth * 3, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#d6abed'; ctx.fill();
    } else {
      ctx.beginPath();
      ctx.moveTo(-12, 36);
      ctx.quadraticCurveTo(0, state === 'HAPPY' ? 55 : sleeping ? 39 : 47, 12, 36);
      ctx.strokeStyle = '#cbf7ff'; ctx.stroke();
    }
    if (state === 'HAPPY') for (const x of [-74, 74]) {
      ctx.beginPath(); ctx.ellipse(x, 25, 10, 4, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#d8b7f380'; ctx.fill();
    }
    ctx.restore();
    if (!sleeping) particles.forEach((particle, i) => {
      const a = particle.angle + time * particle.speed * (state === 'THINKING' ? 2 : 1);
      sprite(textures.particle, Math.cos(a) * particle.radius, Math.sin(a) * particle.radius * 0.72 - 10,
        0.18 + (i % 3) * 0.05, 0.18 + (i % 3) * 0.05, 0, 0.3 + (Math.sin(time + i) + 1) * 0.22);
    });
    ctx.restore();
  }

  function tick(now) {
    frame = 0;
    if (!running()) return;
    // Cap touch devices at 30 fps without accumulating large time steps on resume.
    const minimum = fine.matches ? 1000 / 60 : 1000 / 30;
    if (!last || now - last >= minimum - 1) {
      const dt = last ? Math.min((now - last) / 1000, 0.06) : 0;
      last = now; time += dt;
      if (happyUntil && time >= happyUntil) { happyUntil = 0; select(previousState); }
      draw(dt);
    }
    frame = requestAnimationFrame(tick);
  }

  function synchronize() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0; last = 0;
    labels();
    stage.dataset.render = running() ? 'running' : 'stopped';
    if (running()) frame = requestAnimationFrame(tick);
    else if (visible && !document.hidden) draw(0, reduced.matches);
  }

  function resize() {
    const bounds = greeting.getBoundingClientRect();
    width = Math.max(1, bounds.width); height = Math.max(1, bounds.height);
    ratio = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
    draw(0, true);
  }

  buttons.forEach(button => button.addEventListener('click', () => {
    happyUntil = 0;
    select(button.dataset.petState);
  }));
  greeting.addEventListener('click', () => {
    if (state !== 'HAPPY') previousState = state;
    happyUntil = time + 2.6;
    select('HAPPY');
  });
  pause.addEventListener('click', () => { userPaused = !userPaused; synchronize(); });
  stage.addEventListener('pointermove', event => {
    if (!fine.matches || !moving() || event.pointerType === 'touch') return;
    const bounds = greeting.getBoundingClientRect();
    targetX = Math.max(-13, Math.min(13, (event.clientX - bounds.left - bounds.width / 2) / bounds.width * 34));
    targetY = Math.max(-9, Math.min(9, (event.clientY - bounds.top - bounds.height * 0.54) / bounds.height * 24));
  }, { passive: true });
  stage.addEventListener('pointerleave', () => { targetX = 0; targetY = 0; });
  const observer = new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    synchronize();
  }, { threshold: 0.05 });
  observer.observe(stage);
  const sizes = new ResizeObserver(resize);
  sizes.observe(greeting);
  new MutationObserver(labels).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  reduced.addEventListener('change', synchronize);
  fine.addEventListener('change', synchronize);
  document.addEventListener('visibilitychange', synchronize);
  stage.dataset.ready = 'true';
  greeting.disabled = false;
  resize(); select('IDLE');
}
