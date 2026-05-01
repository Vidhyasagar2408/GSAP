import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
const App = () => {

  const container = useRef()

  useGSAP(()=>{
    gsap.from(".box",{
      duration:1,
      delay:1,
      opacity:0,
      rotate:720,
      scale:0
    })
  },{scope:container})

  return (
    <div>
      <main>
        <div ref={container} className="container1">
          <div className="circle"></div>
          <div className="box"></div>
        </div>
        <div className="container2">
          <div className="circle"></div>
          <div className="box"></div>
        </div>
      </main>
    </div>
  );
};

export default App;
