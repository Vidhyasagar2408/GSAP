import React, { useRef } from "react";
import gsap from "gsap";
const App = () => {
  const boxRef = useRef();

  const rotateBox = function () {
    gsap.to(boxRef.current, {
      rotate: 360,
      duration: 1,
    });
  };

  return (
    <main>
      <button onClick={rotateBox}>Animate</button>
      <div ref={boxRef} className="box">
        Box
      </div>
    </main>
  );
};

export default App;
