document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.glass-card');
    
    // 120Hz LERP Animation
    let mouseX = 0, mouseY = 0, currentX = 0, currentY = 0;
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
            const rotateX = (currentY - cardY) / 150;
            const rotateY = (cardX - currentX) / 150;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        requestAnimationFrame(animate);
    }
    animate();

    window.toggleStack = function(stackId) {
        const stack = document.getElementById(stackId);
        if (!stack) return;
        stack.classList.toggle('show');
        const hint = stack.parentElement.querySelector('.expand-hint');
        if (hint) hint.innerText = stack.classList.contains('show') ? 'Contraer' : 'Detalles';
    };

    // --- SIMULATED LIVE MONITOR ---
    function updateSimulatedStatus() {
        const grid = document.getElementById('status-grid');
        const globalBadge = document.getElementById('status-global');
        
        const services = [
            { name: 'Proxmox Node', status: 'online' },
            { name: 'Immich', status: 'online' },
            { name: 'Jellyfin', status: 'online' },
            { name: 'AdGuard Home', status: 'online' },
            { name: 'Nextcloud', status: 'online' },
            { name: 'Tailscale', status: 'online' },
        ];

        grid.innerHTML = '';
        services.forEach(s => {
            const item = document.createElement('div');
            item.className = 'status-item';
            item.innerHTML = `<span class="status-dot ${s.status === 'online' ? 'status-online' : 'status-offline'}"></span> ${s.name}`;
            grid.appendChild(item);
        });

        globalBadge.innerText = 'All Systems Nominal';
        globalBadge.style.color = '#00ff88';
    }

    // Uptime Timer Simulation (Starting 8 months ago)
    function updateUptime() {
        const startTime = new Date();
        startTime.setMonth(startTime.getMonth() - 8);
        
        const timerElement = document.getElementById('uptime-timer');
        
        setInterval(() => {
            const now = new Date();
            const diff = now - startTime;
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const mins = Math.floor((diff / (1000 * 60)) % 60);
            const secs = Math.floor((diff / 1000) % 60);
            
            timerElement.innerText = `${days}d ${hours}h ${mins}m ${secs}s`;
        }, 1000);
    }

    updateSimulatedStatus();
    updateUptime();
});
