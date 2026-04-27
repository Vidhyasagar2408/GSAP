let tl = gsap.timeline()

tl.from("h2",{
    y: -30,
    duration: 0.5,
    delay: 0.5,
    opacity: 0
})

tl.from("h4",{
    y: -30,
    duration: 1,
    opacity: 0,
    stagger: 0.3
})

tl.from("h1",{
    y: 20,
    duration: 1,
    scale: 0.2,
    opacity: 0
})