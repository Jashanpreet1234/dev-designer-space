// Animated Bio Statistics Counter
document.addEventListener('DOMContentLoaded', function() {
    
    function animateCounter(element, target) {
        const duration = 2000; // 2 seconds
        const start = 0;
        const increment = target / (duration / 16); // 60fps
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Format numbers with commas for thousands
            element.textContent = Math.floor(current).toLocaleString();
        }, 16);
    }
    
    // Intersection Observer for triggering animations when in view
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                
                statNumbers.forEach((number, index) => {
                    const target = parseInt(number.getAttribute('data-target'));
                    
                    // Stagger the animations
                    setTimeout(() => {
                        animateCounter(number, target);
                    }, index * 200);
                });
                
                // Unobserve after animation starts
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Start observing the stats dashboard
    const statsDashboard = document.querySelector('.stats-dashboard');
    if (statsDashboard) {
        observer.observe(statsDashboard);
    }
    
    // Add typewriter effect for code lines (backup if CSS animation doesn't work)
    const codeLines = document.querySelectorAll('.code-line');
    codeLines.forEach((line, index) => {
        line.style.animationDelay = `${0.5 + index * 0.5}s`;
    });
    
    // Add floating animation refresh on hover for tech icons
    const techIcons = document.querySelectorAll('.tech-icon');
    techIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
            setTimeout(() => {
                this.style.animationPlayState = 'running';
            }, 100);
        });
    });
    
    console.log('🚀 Animated Bio loaded successfully!');
}); 