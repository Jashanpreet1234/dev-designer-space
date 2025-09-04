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
    
    // DISABLED - No counter animations for smooth experience
    // Set numbers immediately without animation
    const statsDashboard = document.querySelector('.stats-dashboard');
    if (statsDashboard) {
        const statNumbers = statsDashboard.querySelectorAll('.stat-number');
        statNumbers.forEach((number) => {
            const target = parseInt(number.getAttribute('data-target'));
            number.textContent = target.toLocaleString();
        });
    }
    
    // DISABLED - No typewriter or tech icon animations for smooth experience
    
    console.log('🚀 Animated Bio loaded successfully!');
}); 