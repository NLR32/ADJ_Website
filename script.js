



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

const caseText = document.getElementById("case-text");
startAnimationOnSeen(caseText , 300, "show");

const approach =  document.getElementById("approach");
startAnimationOnSeen(approach, 0, "shade", .3);

const testimonial =  document.getElementById("test-type");
startAnimationOnSeen(testimonial, 300, "start");

const team = document.getElementById("team-head");
startAnimationOnSeen(team, 1000, "start");

Array.from(document.getElementsByClassName("member")).forEach(element => {
    startAnimationOnSeen(element, 300, "show", .1);
});







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

// TESTIMONIALS CAROUSEL
const testimonials = document.querySelectorAll('.test-content');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function showTestimonial(index) {
    testimonials.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex =
        (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
});


// Cursor Glow:
const cursor = document.getElementById("cursor-glow");

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

// how "slow" the cursor follows — smaller = slower, larger = faster
const speed = 1;

document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX - 125;
    mouseY = event.clientY - 125;

});


function animate() {
  // interpolate toward the mouse position
  cursorX += (mouseX - cursorX) * speed;
  cursorY += (mouseY - cursorY) * speed;

  cursor.style.left = `${cursorX}px`;
  cursor.style.top = `${cursorY}px`;

  requestAnimationFrame(animate);
}

animate();

// document.addEventListener('scroll', () => {
//     updateGlow(mouseX, mouseY);
// }, { passive: true });




// FUNCTIONS:
function startAnimationOnSeen(el, timeout, action, threshold = 1){
    
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            setTimeout(() => {
                el.classList.add(action);
                if (action == "shade"){
                    const cursor = document.getElementById("cursor-glow");
                    cursor.classList.add("shade");
                    const main = document.getElementById("main");
                    main.style.backgroundColor = "var(--text-color)";
                    document.body.style.backgroundColor = "var(--text-color)";
                    
                    

                }
            }, timeout);
        } else {

            el.classList.remove(action);
            if (action == "shade"){
                const cursor = document.getElementById("cursor-glow");
                cursor.classList.remove("shade");
                const main = document.getElementById("main");
                main.style.backgroundColor = "var(--background-color)";
                document.body.style.backgroundColor = "var(--background-color)";
                    
                    
              
            }
        }
    }, {
        threshold: threshold
    });

    observer.observe(el);
    
}

const section = document.getElementById('andrew');
const paragraphs = document.querySelectorAll('.paragraph');
let currentParagraph = 0;

function updateParagraph() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    const viewportHeight = window.innerHeight;

    // Check if we're in the section
    if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
        const scrollInSection = scrollTop - sectionTop;
        
        // Each paragraph gets 100vh of scroll
        const paragraphIndex = Math.min(
            Math.floor(scrollInSection / viewportHeight),
            paragraphs.length - 1
        );

        if (paragraphIndex !== currentParagraph) {
            // Remove active class from all paragraphs
            paragraphs.forEach(p => p.classList.remove('active'));
            
            // Add active class to current paragraph
            paragraphs[paragraphIndex].classList.add('active');
            currentParagraph = paragraphIndex;
        }
    }
}

// Initialize first paragraph
if (paragraphs.length > 0) {
    paragraphs[0].classList.add('active');
}

// Listen to scroll events
window.addEventListener('scroll', updateParagraph);
window.addEventListener('resize', updateParagraph);

// Initial check
updateParagraph();


//Momentum scrolling:
// const lenis = new lenis({
//     duration: 1.2,
//     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//     orientation: 'vertical',
//     gestureOrientation: 'vertical',
//     smoothWheel: true,
//     wheelMultiplier: 1,
//     smoothTouch: true,
//     touchMultiplier: 2,
//     infinite: false,
// });

// // Animation frame loop
// function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);