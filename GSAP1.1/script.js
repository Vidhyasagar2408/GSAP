let tl = gsap.timeline();
tl.to(".box1", {
  x: 1300,
  rotate: 360,
  duration: 1.5,
  delay: 1,
});

tl.to(".box2", {
  x: 1300,
  backgroundColor: "yellow",
  rotate: 360,
  duration: 1.5,
});

tl.to(".box3", {
  x: 1300,
  borderRadius: "50%",
  rotate: 360,
  duration: 1.5,
  scale: 0.5,
});
