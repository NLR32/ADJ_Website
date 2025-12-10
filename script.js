// Carousel Slider
// https://codepen.io/josetxu/pen/wBBqaer

// Front page loading
window.onload = () => {
    const h1 = document.querySelector("h1");
    const typing = document.getElementById("front-type");
    const navbar = document.getElementById("navbar");
    const btn = document.getElementById("front-btn");

    console.log(typing, navbar, btn);


    setTimeout(() => {
        typing.classList.add("start");

        navbar.classList.add("show");
        btn.classList.add("show");

    }, 1500); 
};

//brands text loading
const customerText = document.getElementById("customers-text");
startAnimationOnSeen(customerText, 500, "show");

//start typing
const customersTyping = document.getElementById("customers-typing");
startAnimationOnSeen(customersTyping, 500, "start");

const customersBtn = document.getElementById("customers-btn");
startAnimationOnSeen(customersBtn, 3000, "show");






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


// FUNCTIONS:
function startAnimationOnSeen(el, timeout, action){
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {


            setTimeout(() => {
            el.classList.add(action);
        }, timeout); 
        
        } else {


            el.classList.remove(action);
        }
    }, {
        threshold: 1 
    });

    observer.observe(el);
}