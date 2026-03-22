var t1 = gsap.timeline();
t1.from("header", {
  y: -100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.4,
});
t1.from(".iam", {
  x: -500,
  opacity: 0,
  duration: 2,
});
t1.from(".nishikajain", {
  x: 1500,
  opacity: 0,
  duration: 2,
});
t1.from(".circlebg img", {
  opacity: 0,
  duration: 1,
});
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

