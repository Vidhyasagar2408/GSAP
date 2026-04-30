function page1Animation() {
  let tl = gsap.timeline();

  tl.from("nav i, nav h1, nav h4, nav button", {
    y: -100,
    opacity: 0,
    duration: 0.3,
    delay: 1,
    stagger: 0.15,
  });

  tl.from(".center-part1 h1, .center-part1 p, .center-part1 button", {
    x: -500,
    duration: 0.3,
    stagger: 0.15,
    opacity: 0,
  });

  (tl.from(
    ".center-part2 img",
    {
      x: 500,
      duration: 0.3,
      stagger: 0.15,
      opacity: 0,
    },
    "-=0.5",
  ),
    gsap.from(".section1-bottom img", {
      x: 30,
      opacity: 0,
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".section1-bottom",
        scroll: "body",
        start: "top 80%",
        end: "top 50%",
      },
    }));
}
page1Animation();

function page2Animation() {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroll: "body",
      start: "top 50%",
      end: "top 0%",
      scrub: 1,
    },
  });

  tl2.from(".services", {
    y: 30,
    opacity: 0,
    duration: 0.5,
  });

  tl2.from(
    ".elem.line1.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "a",
  );

  tl2.from(
    ".elem.line1.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "a",
  );

  tl2.from(
    ".elem.line2.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "b",
  );

  tl2.from(
    ".elem.line2.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "b",
  );
}

page2Animation();