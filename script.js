document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.glass-card');
    
    // Optimizacion para 120Hz: Interpolacion Lineal (LERP)
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardX = rect.left + rect.width / 2;
            const cardY = rect.top + rect.height / 2;
            
            const rotateX = (currentY - cardY) / 100;
            const rotateY = (cardX - currentX) / 100;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        requestAnimationFrame(animate);
    }

    animate();

    // Funcion para desplegar stacks de tecnologia
    window.toggleStack = function(stackId) {
        const stack = document.getElementById(stackId);
        if (!stack) return;
        
        stack.classList.toggle('show');
        
        const hint = stack.parentElement.querySelector('.expand-hint');
        if (hint) {
            hint.innerText = stack.classList.contains('show') ? 'Click para contraer' : 'Click para desplegar';
        }
    };
});
