



// Front page loading
window.onload = () => {
    const h1 = document.querySelector("h1");
    const typing = document.getElementById("front-type");
    const navbar = document.getElementById("navbar");
    const btn = document.getElementById("front-btn");

    // console.log(typing, navbar, btn);

    

    setTimeout(() => {
        typing.classList.add("start");

        navbar.classList.add("show");
        btn.classList.add("show");

    }, 1500); 

  
};

// document.addEventListener('DOMContentLoaded', function() {
//   const topPage = document.getElementById("front-page");
//     topPage.scrollIntoView({
//         behavior: 'auto'
//     });

// });



//brands text loading
const customerText = document.getElementById("customers-text");
startAnimationOnSeen(customerText, 500, "show");

//start typing
const customersTyping = document.getElementById("customers-typing");
startAnimationOnSeen(customersTyping, 500, "start");

const customersBtn = document.getElementById("customers-btn");
startAnimationOnSeen(customersBtn, 300, "show");

const approach =  document.getElementById("approach");
startAnimationOnSeen(approach, 300, "shade", .3);

// Individual bullet animations - each appears as you scroll to it
// const bullets = document.querySelectorAll('.bullet-item');
// bullets.forEach((bullet, index) => {
//     startAnimationOnSeen(bullet, 300, "show", 0.6);
// });






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

// CAROUSEL
var swiper = new Swiper(".swiper", {
	effect: "coverflow",
	loop: true,
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "1",
	coverflowEffect: {
		rotate: 50, 
		stretch: 0, 
		depth: 100, 
		modifier: 1, 
		slideShadows: false 
	},
	pagination: {
		el: ".swiper-pagination"
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1.5
		},
		// when window width is >= 480px
		580: {
			slidesPerView: 2
		},
		// when window width is >= 480px
		767: {
			slidesPerView: 3
		},
		992: {
			slidesPerView: 3.5
		},
		1200: {
			slidesPerView: 4
		}
	}
});







// FUNCTIONS:
function startAnimationOnSeen(el, timeout, action, threshold = 1){

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            setTimeout(() => {
                el.classList.add(action);
            }, timeout);
        } else {
            el.classList.remove(action);
        }
    }, {
        threshold: threshold
    });

    observer.observe(el);
}