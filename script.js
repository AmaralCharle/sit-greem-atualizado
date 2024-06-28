var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
/lightbox/
function openModal() {
  document.getElementById("ft").style.display = "block";
}

function closeModal() {
  document.getElementById("ft").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
window.addEventListener('resize', function() {
    var width = window.innerWidth;

    if (width <= 360) {
        // Pequenos celulares
        console.log('Pequenos celulares');
        // Faça ajustes específicos
    } else if (width <= 480) {
        // Médios celulares
        console.log('Médios celulares');
        // Faça ajustes específicos
    } else if (width <= 768) {
        // Grandes celulares
        console.log('Grandes celulares');
        // Faça ajustes específicos
    } else if (width <= 1024) {
        // Tablets em retrato
        console.log('Tablets em retrato');
        // Faça ajustes específicos
    } else if (width <= 1280) {
        // Tablets em paisagem
        console.log('Tablets em paisagem');
        // Faça ajustes específicos
    } else if (width <= 1440) {
        // Desktop comum
        console.log('Desktop comum');
        // Faça ajustes específicos
    } else {
        // Desktop grande
        console.log('Desktop grande');
        // Faça ajustes específicos
    }
});
