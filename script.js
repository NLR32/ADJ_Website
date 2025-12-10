// Carousel Slider
// https://codepen.io/josetxu/pen/wBBqaer

// Front page loading
window.onload = () => {
    const h1 = document.querySelector("h1");
    const typing = document.querySelector(".typing-demo");
    const navbar = document.querySelector("#navbar");
    const cta = document.querySelector(".CTA");


    setTimeout(() => {
        typing.classList.add("start");

        navbar.classList.add("show");
        cta.classList.add("show");

    }, 1500); 
};

// scroll frame
const frame = document.getElementById('frame');
window.addEventListener('scroll', function() {
    const frame = document.getElementById("frame");

    const scrollVal = window.pageYOffset;
    const viewportHeight = window.innerHeight; 

    const newHeight = viewportHeight - scrollVal - (viewportHeight * 0.04);


    frame.style.height = newHeight + "px";

    if (scrollVal > window.innerHeight - (viewportHeight * 0.04)) {
        frame.style.transition = "opacity 0.2s ease";
        frame.style.opacity = 0;
        frame.style.position = "absolute";
    } else {
        frame.style.transition = "opacity 0.2s ease";
        frame.style.opacity = 1;
        frame.style.position = "fixed";
        
        
    }

});
