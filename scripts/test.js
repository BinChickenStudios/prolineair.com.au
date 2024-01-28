window.addEventListener('scroll', function() {
    var topButton = document.querySelector('.top-button');
    if (window.scrollY > 300) { // Adjust 500 to the point where you want the button to appear
        topButton.classList.remove('top-button-hidden');
        topButton.classList.add('top-button-visible');

    } else {
        topButton.classList.remove('top-button-visible');
        topButton.classList.add('top-button-hidden');
    }
});



document.addEventListener('DOMContentLoaded', (event) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll-visible');
            }
            else {
                entry.target.classList.remove('animate-on-scroll-visible');
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0 // Adjust threshold as per your need
    });

    const sections = document.querySelectorAll('.section-container');
    sections.forEach(section => {
        observer.observe(section);
        section.classList.add('animate-on-scroll');
    });
});

