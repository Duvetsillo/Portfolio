// Owner-supplied uptime reference; elapsed time persists across reloads.
const uptimeReference = { seconds: 22196496, sampledAt: 1790991871013 };
function updatePortfolioUptime() {
  const total = uptimeReference.seconds + Math.max(0, Math.floor((Date.now() - uptimeReference.sampledAt) / 1000));
  const value = `${Math.floor(total / 86400)}d ${Math.floor(total % 86400 / 3600)}h ${Math.floor(total % 3600 / 60)}m ${total % 60}s`;
  document.querySelectorAll('[data-uptime]').forEach(element => { element.textContent = value; });
}
updatePortfolioUptime();
setInterval(updatePortfolioUptime, 1000);
document.addEventListener('visibilitychange', () => { if (!document.hidden) updatePortfolioUptime(); });
const scene = document.querySelector('.architecture-scene');
if (matchMedia('(hover: hover) and (pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let sceneFrame;
  scene.addEventListener('pointermove', event => {
    const bounds = scene.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - .5;
    const y = (event.clientY - bounds.top) / bounds.height - .5;
    cancelAnimationFrame(sceneFrame);
    sceneFrame = requestAnimationFrame(() => {
      scene.style.setProperty('--scene-x', `${x * 5}deg`);
      scene.style.setProperty('--scene-y', `${-y * 5}deg`);
    });
  });
  scene.addEventListener('pointerleave', () => {
    cancelAnimationFrame(sceneFrame);
    scene.style.setProperty('--scene-x', '0deg');
    scene.style.setProperty('--scene-y', '0deg');
  });
}
