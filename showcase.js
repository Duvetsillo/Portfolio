const projectGalleries = {
  aetherion: { title: 'Aetherion', images: [
    { file: 'aetherion-overview', es: 'Portada y presentación del proyecto', en: 'Project overview and presentation' },
    { file: 'aetherion-hardware', es: 'Perfil de hardware y explicación de resultados', en: 'Hardware profile and results explanation' },
    { file: 'aetherion-client', es: 'Ejecución local y descarga del cliente', en: 'Local execution and client download' },
    { file: 'aetherion-intro', es: 'Identidad y secuencia de introducción', en: 'Identity and introduction sequence' }
  ] },
  homarr: { title: 'Homarr', images: [{ file: 'homarr', es: 'Dashboard para gestionar servicios y stacks', en: 'Dashboard for managing services and stacks' }] },
  jellyfin: { title: 'Jellyfin', images: [
    { file: 'jellyfin-home', es: 'Inicio y categorías multimedia', en: 'Home and media categories' },
    { file: 'jellyfin-library', es: 'Biblioteca y continuación de reproducción', en: 'Library and continue watching' },
    { file: 'jellyfin-channels', es: 'Exploración de canales de televisión', en: 'TV channel browsing' },
    { file: 'jellyfin-guide', es: 'Vista de la guía de televisión', en: 'TV guide view' },
    { file: 'jellyfin-login', es: 'Acceso al servidor multimedia', en: 'Media server sign-in' }
  ] }
};
const galleryDialog = document.querySelector('.project-lightbox');
let galleryKey = 'homarr';
let galleryIndex = 0;
let galleryTrigger;
function renderGallery() {
  const gallery = projectGalleries[galleryKey];
  const shot = gallery.images[galleryIndex];
  const spanish = document.documentElement.lang === 'es';
  const caption = spanish ? shot.es : shot.en;
  document.getElementById('gallery-title').textContent = gallery.title;
  document.getElementById('gallery-kicker').textContent = spanish ? 'PROYECTO / CAPTURAS REALES' : 'PROJECT / REAL SCREENSHOTS';
  const image = document.getElementById('gallery-image');
  image.src = `assets/projects/${shot.file}.png`;
  image.alt = caption;
  document.getElementById('gallery-caption').textContent = `${galleryIndex + 1} / ${gallery.images.length} — ${caption}`;
  galleryDialog.querySelector('.gallery-prev').disabled = galleryIndex === 0;
  galleryDialog.querySelector('.gallery-next').disabled = galleryIndex === gallery.images.length - 1;
  galleryDialog.querySelector('.gallery-prev').setAttribute('aria-label', spanish ? 'Imagen anterior' : 'Previous image');
  galleryDialog.querySelector('.gallery-next').setAttribute('aria-label', spanish ? 'Imagen siguiente' : 'Next image');
  galleryDialog.querySelector('.gallery-close').setAttribute('aria-label', spanish ? 'Cerrar galería' : 'Close gallery');
}
document.querySelectorAll('[data-gallery]').forEach(button => button.addEventListener('click', () => {
  galleryKey = button.dataset.gallery;
  galleryIndex = Number(button.dataset.slide || 0);
  galleryTrigger = button;
  renderGallery();
  galleryDialog.showModal();
  document.body.style.overflow = 'hidden';
}));
function changeSlide(delta) {
  galleryIndex = Math.max(0, Math.min(projectGalleries[galleryKey].images.length - 1, galleryIndex + delta));
  renderGallery();
}
galleryDialog.querySelector('.gallery-prev').addEventListener('click', () => changeSlide(-1));
galleryDialog.querySelector('.gallery-next').addEventListener('click', () => changeSlide(1));
galleryDialog.querySelector('.gallery-close').addEventListener('click', () => galleryDialog.close());
galleryDialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') { event.preventDefault(); changeSlide(-1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); changeSlide(1); }
});
galleryDialog.addEventListener('click', event => {
  if (event.target === galleryDialog) {
    const bounds = galleryDialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) galleryDialog.close();
  }
});
galleryDialog.addEventListener('close', () => {
  document.body.style.overflow = '';
  galleryTrigger?.focus();
});
