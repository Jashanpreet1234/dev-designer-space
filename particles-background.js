/* 
 * ✨ FASTER WHITE STAR SYSTEM ✨
 * Beautiful clean white stars that move faster and more dynamically
 */

particlesJS('particles-js-background', {
  "particles": {
    "number": {
      "value": 150,  // Nice amount - not too much
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#ffffff"  // ONLY WHITE - no colorful ones
    },
    "shape": {
      "type": ["circle", "star"],  // Mix of circles and stars
      "stroke": {
        "width": 0,
        "color": "#ffffff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "star": {
        "nb_sides": 5  // 5-pointed white stars
      }
    },
    "opacity": {
      "value": 0.8,  // Nice visibility
      "random": true,
      "anim": {
        "enable": true,
        "speed": 4.0,  // FASTER twinkling - increased from 2.0
        "opacity_min": 0.3,
        "sync": false
      }
    },
    "size": {
      "value": 3.5,  // Nice size - not too big
      "random": true,
      "anim": {
        "enable": true,
        "speed": 5.0,  // FASTER pulsing - increased from 2.5
        "size_min": 1.0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,  // No lines - just pure stars
      "distance": 0,
      "color": "#ffffff",
      "opacity": 0,
      "width": 0
    },
    "move": {
      "enable": true,
      "speed": 3.5,  // MUCH FASTER movement - increased from 1.2
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,  // Increased attraction
        "rotateY": 800
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"  // Stars glow on hover
      },
      "onclick": {
        "enable": true,
        "mode": "push"  // Add more white stars on click
      },
      "resize": true
    },
    "modes": {
      "bubble": {
        "distance": 200,
        "size": 8,  // Gentle glow on hover
        "duration": 2,
        "opacity": 1,
        "speed": 3
      },
      "push": {
        "particles_nb": 5  // Add 5 new white stars on click
      }
    }
  },
  "retina_detect": true
});

// ✨ FASTER WHITE SHOOTING STARS ✨
function createShootingStar() {
  const shootingStar = document.createElement('div');
  shootingStar.className = 'shooting-star';
  shootingStar.style.cssText = `
    position: fixed;
    width: 4px;
    height: 4px;
    background: #ffffff;
    border-radius: 50%;
    pointer-events: none;
    z-index: 5;
    box-shadow: 
      0 0 15px #ffffff,
      0 0 30px rgba(255, 255, 255, 0.8);
  `;
  
  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight;
  const angle = Math.random() * 360;
  
  shootingStar.style.left = startX + 'px';
  shootingStar.style.top = startY + 'px';
  
  // Clean white trail
  shootingStar.style.background = `linear-gradient(${angle}deg, 
    rgba(255,255,255,1) 0%, 
    rgba(255,255,255,0.7) 30%, 
    rgba(255,255,255,0.3) 60%, 
    transparent 100%)`;
  shootingStar.style.width = '100px';
  shootingStar.style.height = '3px';
  shootingStar.style.borderRadius = '2px';
  shootingStar.style.boxShadow = `0 0 10px rgba(255, 255, 255, 0.8)`;
  
  document.body.appendChild(shootingStar);
  
  const endX = startX + (Math.cos(angle * Math.PI / 180) * 1000);
  const endY = startY + (Math.sin(angle * Math.PI / 180) * 1000);
  
  shootingStar.animate([
    {
      transform: `translate(0, 0) scale(0.3)`,
      opacity: 0
    },
    {
      transform: `translate(${(endX - startX) * 0.3}px, ${(endY - startY) * 0.3}px) scale(1)`,
      opacity: 1,
      offset: 0.3
    },
    {
      transform: `translate(${endX - startX}px, ${endY - startY}px) scale(0.2)`,
      opacity: 0
    }
  ], {
    duration: 1500,  // FASTER shooting stars - reduced from 2000
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  }).onfinish = () => {
    if (document.body.contains(shootingStar)) {
      document.body.removeChild(shootingStar);
    }
  };
}

// More frequent shooting stars
setInterval(() => {
  if (Math.random() < 0.4) {  // Increased frequency
    createShootingStar();
  }
}, 2500);  // More frequent - reduced from 4000

// ⭐ FASTER WHITE SPARKLES ⭐
function createWhiteSparkle() {
  const sparkle = document.createElement('div');
  sparkle.className = 'white-sparkle-effect';
  sparkle.style.cssText = `
    position: fixed;
    width: 8px;
    height: 8px;
    background: #ffffff;
    pointer-events: none;
    z-index: 4;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    box-shadow: 
      0 0 10px rgba(255, 255, 255, 0.9),
      0 0 20px rgba(255, 255, 255, 0.6);
  `;
  
  sparkle.style.left = Math.random() * window.innerWidth + 'px';
  sparkle.style.top = Math.random() * window.innerHeight + 'px';
  
  document.body.appendChild(sparkle);
  
  sparkle.animate([
    {
      transform: 'scale(0) rotate(0deg)',
      opacity: 0
    },
    {
      transform: 'scale(1.5) rotate(180deg)',
      opacity: 1,
      offset: 0.5
    },
    {
      transform: 'scale(0) rotate(360deg)',
      opacity: 0
    }
  ], {
    duration: 1800,  // FASTER sparkles - reduced from 2500
    easing: 'ease-in-out'
  }).onfinish = () => {
    if (document.body.contains(sparkle)) {
      document.body.removeChild(sparkle);
    }
  };
}

// More frequent sparkles
setInterval(() => {
  if (Math.random() < 0.5) {  // Increased frequency
    createWhiteSparkle();
  }
}, 3000);  // More frequent - reduced from 5000

// ✨ FASTER WHITE WISPS ✨
function createWhiteWisp() {
  const wisp = document.createElement('div');
  wisp.className = 'white-wisp';
  wisp.style.cssText = `
    position: fixed;
    width: ${8 + Math.random() * 12}px;
    height: ${8 + Math.random() * 12}px;
    background: radial-gradient(circle, 
      rgba(255, 255, 255, 0.9) 0%, 
      rgba(255, 255, 255, 0.5) 50%, 
      transparent 100%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 3;
    box-shadow: 
      0 0 15px rgba(255, 255, 255, 0.7),
      0 0 30px rgba(255, 255, 255, 0.3);
  `;
  
  const startX = Math.random() * window.innerWidth;
  const startY = window.innerHeight + 50;
  
  wisp.style.left = startX + 'px';
  wisp.style.top = startY + 'px';
  
  document.body.appendChild(wisp);
  
  const endX = startX + (Math.random() - 0.5) * 200;
  const endY = -50;
  
  wisp.animate([
    {
      transform: `translate(0, 0) scale(0.5)`,
      opacity: 0
    },
    {
      transform: `translate(${(endX - startX) * 0.5}px, ${(endY - startY) * 0.5}px) scale(1)`,
      opacity: 0.8,
      offset: 0.5
    },
    {
      transform: `translate(${endX - startX}px, ${endY - startY}px) scale(0.3)`,
      opacity: 0
    }
  ], {
    duration: 8000 + Math.random() * 4000,  // FASTER wisps - reduced from 12000
    easing: 'ease-out'
  }).onfinish = () => {
    if (document.body.contains(wisp)) {
      document.body.removeChild(wisp);
    }
  };
}

// More frequent white wisps
setInterval(() => {
  if (Math.random() < 0.4) {  // Increased frequency
    createWhiteWisp();
  }
}, 4000);  // More frequent - reduced from 6000

console.log('✨ Faster White Star System Loaded! ✨'); 