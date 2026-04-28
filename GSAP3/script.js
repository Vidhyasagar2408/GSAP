let Path = `M 10 150 Q 750 150 1490 150`
let final = `M 10 150 Q 750 150 1490 150`

let string = document.querySelector("#string")

string.addEventListener("mousemove",function(dets){
    path = `M 10 150 Q ${dets.x} ${dets.y} 1490 150`
    gsap.to("svg path",{
        attr:{d:path},
        duration:0.3,
        ease:"power3.out"
    }) 
})

string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:final},
        duration: 1.5,
        ease: "elastic.out(1,0.1)"
    })
})