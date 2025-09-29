document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.image-scroll');
    const images = container.querySelectorAll('img');
    const imageHeight = images[0]?.clientHeight || 100; // get actual image height or default to 100
    let current = 0;

    setInterval(() => {
        current = (current + 1) % images.length;
        container.scrollTo({
            top: current * imageHeight,
            behavior: 'smooth'
        });
    }, 2000);
});
document.addEventListener("DOMContentLoaded", function() {
    // Confetti animation
    const confettiColors = ['color1', 'color2', 'color3', 'color4', 'color5'];
    const confettiContainer = document.getElementById('confetti-container');
    const confettiCount = 60;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.classList.add(confettiColors[Math.floor(Math.random() * confettiColors.length)]);
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = (Math.random() * 2) + 's';
        confettiContainer.appendChild(confetti);
    }

    // Your existing image scroll code (keep this below the confetti code)
    const container = document.querySelector('.image-scroll');
    const images = container.querySelectorAll('img');
    const imageHeight = images[0]?.clientHeight || 100;
    let current = 0;

    setInterval(() => {
        current = (current + 1) % images.length;
        container.scrollTo({
            top: current * imageHeight,
            behavior: 'smooth'
        });
    }, 2000);
});
document.addEventListener("DOMContentLoaded", function() {
   
    document.querySelectorAll('.cake-candle').forEach(candle => {
        candle.addEventListener('click', function() {
            const flame = candle.querySelector('.candle-flame');
            flame.classList.toggle('off');
        });
    });
});