var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("events__content");
    


    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }


    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.opacity = 0;
    }
    
    slides[slideIndex-1].style.display = "grid";
    setTimeout(() => slides[slideIndex - 1].style.opacity = 1, 0);
    
    document.getElementById("events__pag_" + slideIndex).checked = true;
}

let timer = setInterval(
    function(){
    slideIndex++;
    showSlides(slideIndex);
  },5000);