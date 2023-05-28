// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
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
  
  // Run this code when the DOM is ready
  document.addEventListener("DOMContentLoaded", function() {
    // Open the lightbox when an image thumbnail is clicked
    var thumbnails = document.getElementsByClassName("lightbox-trigger");
    for (var i = 0; i < thumbnails.length; i++) {
      thumbnails[i].addEventListener("click", function() {
        var imageSrc = this.getAttribute("src");
        var imageAlt = this.getAttribute("alt");
        document.getElementById("lightbox-img").src = imageSrc;
        document.getElementById("lightbox-img").alt = imageAlt;
        openModal();
      });
    }
  
    // Close the lightbox when the close button or overlay is clicked
    document.getElementById("lightbox-close").addEventListener("click", closeModal);
    document.getElementById("lightbox").addEventListener("click", closeModal);
  });
  