var navbar = document.querySelector('.navbar');

// Mendeteksi peristiwa scroll
window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled-navbar'); 
  } else {
    navbar.classList.remove('scrolled-navbar');
  }
});

// Contact Form
const scriptURL = 'https://script.google.com/macros/s/AKfycbyvP5qRFYvdYnAmSVvv38NV7oSCnfX-4IFmfgcUgdzRF2-mz7iBMdW1cESoQYrhawqK/exec'
const form = document.forms['rendi-kurniawan-contact-form']
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');
myAlert.classList.toggle('d-none');

form.addEventListener('submit', e => {
   e.preventDefault();

   btnLoading.classList.toggle('d-none');
   btnKirim.classList.toggle('d-none');
   fetch(scriptURL, {
         method: 'POST',
         body: new FormData(form)
      })
      .then(response => {
         btnLoading.classList.toggle('d-none');
         btnKirim.classList.toggle('d-none');
         myAlert.classList.toggle('d-none');
         form.reset();
         console.log('Success!', response);
      })
      .catch(error => console.error('Error!', error.message))
});