gsap.from(".page1 .box",{
    scale: 0,
    delay: 1,
    rotate: 360,
    duartion: 2,
})

gsap.from(".page2 .box",{
    scale: 0,
    rotate: 360,
    duartion: 2,
    scrollTrigger: {
        trigger: ".page2 .box",
        scroller: "body",
        markers: true,
        start: "top 60%"
    }
})