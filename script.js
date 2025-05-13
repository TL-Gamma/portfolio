let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    }
    );
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.screenY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1000,
    delay: 100
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .comp, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['étudiant','musicien', 'technicien', 'passionné', 'électronicien', 'curieux', 'créatif',],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


let slideIndex = 0;
let slides = document.querySelectorAll('.image-slider .fade'); // Select all the fade images
const totalSlides = slides.length;

function showSlides() {
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.opacity = "0";  // Hide all slides by setting opacity to 0
    }
    slideIndex++;
    if (slideIndex > totalSlides) { slideIndex = 1; }  // Loop back to the first slide

    slides[slideIndex - 1].style.opacity = "1";  // Show the current slide by setting opacity to 1

    setTimeout(showSlides, 7000); // Change the image every 7 seconds
}

showSlides();
// Cibler toutes les images avec l'attribut "data-zoom"
let images = document.querySelectorAll('.projet-img img');
let modal = document.getElementById('zoomModal');
let modalImg = document.getElementById('imgZoom');
let captionText = document.getElementById('caption');
let closeBtn = document.querySelector('.close-btn');

// Ajouter un événement de clic à chaque image
images.forEach(image => {
    image.addEventListener('click', function () {
        let src = image.getAttribute('data-zoom');
        modal.style.display = 'flex'; // Afficher la modale
        modalImg.src = src; // Charger l'image dans la modale
        captionText.innerHTML = image.alt; // Afficher la légende si nécessaire
    });
});

// Fermer la modale lorsqu'on clique sur le bouton de fermeture
closeBtn.addEventListener('click', function () {
    modal.style.display = 'none'; // Cacher la modale
});

// Fermer la modale en cliquant n'importe où en dehors de l'image
modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none'; // Cacher la modale
    }
});
