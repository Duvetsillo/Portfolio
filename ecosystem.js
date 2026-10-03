(() => {
 const scene=document.querySelector('.ai-evolution');
 if(!scene)return;
 const controls=document.createElement('div');controls.className='ecosystem-controls';
 controls.innerHTML='<button type="button" data-replay data-es="↻ Repetir secuencia" data-en="↻ Replay sequence">↻ Repetir secuencia</button><button type="button" data-pause aria-pressed="false" data-es="Pausar animación" data-en="Pause animation">Pausar animación</button>';
 scene.after(controls);
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{scene.classList.toggle('motion-in-view',entry.isIntersecting);if(entry.isIntersecting)scene.classList.add('sequence-running')}),{threshold:.12});observer.observe(scene);
 controls.querySelector('[data-replay]').addEventListener('click',()=>{scene.classList.remove('sequence-running');requestAnimationFrame(()=>requestAnimationFrame(()=>scene.classList.add('sequence-running')))});
 controls.querySelector('[data-pause]').addEventListener('click',event=>{const paused=scene.classList.toggle('motion-paused');event.currentTarget.setAttribute('aria-pressed',String(paused))});
})();