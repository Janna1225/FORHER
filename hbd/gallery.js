document.addEventListener("DOMContentLoaded", function() {
    const scrollContainer = document.querySelector('.scrapbook-scroll');
    const photos = scrollContainer.querySelectorAll('.scrapbook-photo');
    const gap = 40; 
    const photoWidth = photos[0].offsetWidth + gap;
    let current = 0;
    const total = photos.length;

    setInterval(() => {
        current = (current + 1) % total;
        scrollContainer.scrollTo({
            left: current * photoWidth,
            behavior: 'smooth'
        });
    }, 2000); 
});