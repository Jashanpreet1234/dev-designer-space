document.addEventListener('DOMContentLoaded', function() {

    const entranceSound = document.getElementById('entrance-sound');
    const hoverSound = document.getElementById('hover-sound');
    const clickSound = document.getElementById('click-sound');

    // --- Play Entrance Sound ---
    // A short delay to allow other assets to load first
    setTimeout(() => {
        entranceSound.play().catch(e => console.error("Entrance sound failed to play:", e));
    }, 500);


    // --- Add Hover Sounds to interactive elements ---
    const interactiveElements = document.querySelectorAll(
        'a, button, .timeline-card, .project-card'
    );

    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            hoverSound.currentTime = 0; // Rewind to start
            hoverSound.play().catch(e => console.error("Hover sound failed to play:", e));
        });
    });


    // --- Add Click Sounds to all links and buttons ---
    const clickableElements = document.querySelectorAll('a, button');

    clickableElements.forEach(element => {
        element.addEventListener('click', () => {
            clickSound.currentTime = 0; // Rewind to start
            clickSound.play().catch(e => console.error("Click sound failed to play:", e));
        });
    });

    // Mission Control Enhancement Features
    // Enhanced contact form functionality
    const contactForm = document.querySelector('.contact-form');
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
    const submitBtn = document.querySelector('.btn-submit');
    
    // Add typing sound effects to form inputs
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (hoverSound && hoverSound.readyState >= 2) {
                hoverSound.currentTime = 0;
                hoverSound.volume = 0.1;
                hoverSound.play().catch(e => console.log('Sound play failed'));
            }
        });
        
        // Focus effect with sound
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
            playClickSound();
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
    
    // Enhanced submit button
    if (submitBtn) {
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Play sound effect
            playClickSound();
            
            // Add loading animation
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Transmitting...';
            this.disabled = true;
            
            // Simulate transmission
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-check"></i> Transmission Sent!';
                this.style.background = 'linear-gradient(135deg, #00ff88, #64ffda)';
                
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-rocket"></i> Send Transmission';
                    this.disabled = false;
                    this.style.background = 'linear-gradient(135deg, #64ffda, #00ff88)';
                }, 2000);
            }, 1500);
        });
    }
    
    // Enhanced contact links with better hover effects
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            playHoverSound();
            this.style.transform = 'translateX(10px) scale(1.02)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(5px) scale(1)';
        });
        
        link.addEventListener('click', function() {
            playClickSound();
        });
    });
    
    // Console startup effect
    const consoles = document.querySelectorAll('.transmission-console, .establish-contact');
    consoles.forEach((console, index) => {
        setTimeout(() => {
            console.style.opacity = '0';
            console.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                console.style.transition = 'all 0.8s ease-out';
                console.style.opacity = '1';
                console.style.transform = 'translateY(0)';
                playEntranceSound();
            }, 100);
        }, index * 200);
    });
    
    // Add scanning effect to console borders
    function addScanningEffect() {
        const consoles = document.querySelectorAll('.transmission-console, .establish-contact');
        consoles.forEach(console => {
            console.addEventListener('mouseenter', function() {
                this.style.borderColor = 'rgba(100, 255, 218, 0.8)';
                this.style.boxShadow = '0 0 40px rgba(100, 255, 218, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
            });
            
            console.addEventListener('mouseleave', function() {
                this.style.borderColor = 'rgba(100, 255, 218, 0.3)';
                this.style.boxShadow = '0 0 30px rgba(100, 255, 218, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
            });
        });
    }
    
    addScanningEffect();
    
    // Mission Control status indicator
    function createStatusIndicator() {
        const header = document.querySelector('.contact-header');
        if (header) {
            const statusDiv = document.createElement('div');
            statusDiv.className = 'mission-status';
            statusDiv.innerHTML = `
                <div class="status-indicator">
                    <span class="status-dot"></span>
                    <span class="status-text">Mission Control Online</span>
                </div>
            `;
            header.appendChild(statusDiv);
        }
    }
    
    createStatusIndicator();
});

// Add CSS for enhanced effects
const missionControlStyles = `
    .form-group.focused {
        transform: scale(1.02);
    }
    
    .form-group.focused input,
    .form-group.focused textarea {
        box-shadow: 0 0 0 3px rgba(100, 255, 218, 0.3), 0 0 25px rgba(100, 255, 218, 0.1);
        border-color: #64ffda;
    }
    
    .mission-status {
        text-align: center;
        margin-top: 1rem;
    }
    
    .status-indicator {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: rgba(10, 25, 47, 0.8);
        padding: 0.5rem 1rem;
        border-radius: 20px;
        border: 1px solid rgba(100, 255, 218, 0.3);
    }
    
    .status-dot {
        width: 8px;
        height: 8px;
        background: #00ff41;
        border-radius: 50%;
        animation: pulse-dot 2s infinite;
    }
    
    @keyframes pulse-dot {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
    }
    
    .status-text {
        color: #64ffda;
        font-size: 0.9rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    
    .btn-submit:disabled {
        opacity: 0.8;
        cursor: not-allowed;
        transform: none !important;
    }
    
    .contact-link {
        transition: all 0.3s ease, transform 0.2s ease !important;
    }
`;

// Inject enhanced styles
const styleSheet = document.createElement('style');
styleSheet.textContent = missionControlStyles;
document.head.appendChild(styleSheet); 