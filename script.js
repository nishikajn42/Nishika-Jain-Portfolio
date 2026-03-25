// Register the scroll plugin
gsap.registerPlugin(ScrollTrigger);

// 1. Initial Loading Sequence (Timeline)
const tl = gsap.timeline();

tl.fromTo(".iam", 
    { x: -100, opacity: 0 }, 
    { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
)
.fromTo(".first-name", 
    { x: -200, opacity: 0 }, 
    { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 
    "-=0.5" // Starts 0.5s before previous ends
)
.fromTo(".last-name", 
    { x: 200, opacity: 0 }, 
    { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 
    "-=0.8"
)
.fromTo(".circlebg img", 
    { opacity: 0, scale: 0.8 }, 
    { opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.7)" }
);

// 2. Scroll Animation (Move image right when scrolling down)
gsap.to(".circlebg img", {
    scrollTrigger: {
        trigger: ".bg",      // Starts when the first page is active
        start: "top top",    // When top of page hits top of viewport
        end: "bottom top",   // Ends when bottom of page hits top of viewport
        scrub: 1,            // Ties animation to scroll speed
        scrub: 1,            // Smoothly ties movement to your finger/wheel
        toggleActions: "restart none none reverse"
    },
    x: "60vw",               // Moves the image significantly to the right
    ease: "none"
});

