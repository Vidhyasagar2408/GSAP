const marque = gsap.to("#marque", {
  xPercent: -100,
  ease: "none",
  repeat: -1,
  duration: 2,
});

const arrow = gsap.to("#marque img", {
  rotate: 180,
});

window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    scrollDown = true;
    marque.play();
    arrow.play();
  } else if (e.deltaY < 0) {
    scrollDown = false;
    marque.reverse();
    arrow.reverse();
  }
});
