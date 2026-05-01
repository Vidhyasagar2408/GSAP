import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
const App = () => {

  let boxRef = useRef()

  useGSAP(()=>{
    gsap.from(boxRef.current,{
      y:300,
      duration:1,
      delay:1,
      opacity:0,
      rotate:350
    })
  })

  return (
    <div>
      <main>
        <div className="container1">
          <div className="circle"></div>
          <div ref={boxRef} className="box"></div>
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
