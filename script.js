gsap.to(".box1",{
    x:1000,
    y:200,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor: "yellow",
    borderRadius: "50%",
    scale: 0.5,
})

gsap.from(".box2",{
    x:1000,
    y:400,
    duration:2,
    delay:1,
    rotate:180,
})