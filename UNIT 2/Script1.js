document.addEventListener("DOMContentLoaded", () => {
    const section = document.getElementById("monitorizare-resurse");
    const slides = document.querySelectorAll(".slideshow .slide");
    let currentIndex = 0;
    let interval;


    function startSlideshow() {

        slides[currentIndex].classList.remove("active");

        currentIndex = (currentIndex + 1) % slides.length;

        slides[currentIndex].classList.add("active");
    }


    section.addEventListener("dblclick", () => {
        const slideshow = section.querySelector(".slideshow");
        slideshow.style.display = "block";


        slides[0].classList.add("active");


        interval = setInterval(startSlideshow, 3000);
    });


    window.addEventListener("beforeunload", () => clearInterval(interval));
