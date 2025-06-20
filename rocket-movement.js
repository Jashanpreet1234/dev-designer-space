document.addEventListener('DOMContentLoaded', () => {
    const rocket = document.getElementById('rocket');
    const thrusterSound = document.getElementById('rocket-thruster-sound');
    let timeout;

    if (!rocket || !thrusterSound) {
        console.error("Rocket or thruster sound element not found!");
        return;
    }

    // Set initial volume to 0
    thrusterSound.volume = 0;

    document.addEventListener('mousemove', (e) => {
        // --- Move the rocket ---
        rocket.style.left = e.pageX + 'px';
        rocket.style.top = e.pageY + 'px';

        // --- Handle the sound ---
        // Play the sound and fade it in
        if (thrusterSound.paused) {
            thrusterSound.play().catch(e => console.error("Thruster sound failed:", e));
        }
        thrusterSound.volume = Math.min(thrusterSound.volume + 0.05, 0.5); // Fade in to 50% volume

        // Clear the previous timeout
        clearTimeout(timeout);

        // Set a new timeout to fade out the sound when the mouse stops
        timeout = setTimeout(() => {
            let fadeOut = setInterval(() => {
                if (thrusterSound.volume > 0.01) {
                    thrusterSound.volume -= 0.01;
                } else {
                    thrusterSound.volume = 0;
                    thrusterSound.pause();
                    clearInterval(fadeOut);
                }
            }, 50);
        }, 150); // Time of inactivity before fade out begins
    });
}); 