let menu = document.querySelector("#nav i");
let cross = document.querySelector("#full i");

let tl = gsap.timeline();

tl.to("#full", {
  right: 0,
  duration: 0.5,
});

tl.from("#full h4", {
  x: 600,
  opacity: 0,
  duration: 0.7,
  stagger: 0.1,
});

tl.from("#full i", {
  x: 100,
  duration: 0.2,
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", function () {
  tl.play();
});

cross.addEventListener("click", function () {
  tl.reverse();
});
