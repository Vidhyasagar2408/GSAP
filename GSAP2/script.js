gsap.from(".page1 .box",{
    scale: 0,
    delay: 1,
    rotate: 360,
    duartion: 2,
})

gsap.from(".page2 h1",{
    scale: 0,
    duartion: 2,
    opacity: 0,
    x: 500,
    scrollTrigger: {
        trigger: ".page2 h1",
        scroller: "body",
        markers: true,
        start: "top 50%"
    }
})

gsap.from(".page2 h2",{
    scale: 0,
    duartion: 2,
    opacity: 0,
    x: -500,
    scrollTrigger: {
        trigger: ".page2 h2",
        scroller: "body",
        markers: true,
        start: "top 50%"
    }
})