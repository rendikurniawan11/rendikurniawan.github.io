var navbar = document.querySelector('.navbar');

// Mendeteksi peristiwa scroll
window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled-navbar'); 
  } else {
    navbar.classList.remove('scrolled-navbar');
  }
});