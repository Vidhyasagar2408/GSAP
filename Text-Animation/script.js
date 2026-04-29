const marque = gsap.to("#marque", {
  xPercent: -200,
  duration: 3,
  repeat: -1,
  ease: "none",
});

const arrow = gsap.to("#marque img", {
  rotate: 180,
});

window.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) {
    marque.play();
    arrow.play();
  } else {
    marque.reverse();
    arrow.reverse();
  }
});
