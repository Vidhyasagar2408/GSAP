import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
const App = () => {
  const boxRef = useRef();

  const [xValue, setXValue] = useState(0);
  const [rotate, setRotate] = useState(0);

  const randomX = gsap.utils.random(-500, 500, 100);
  const randomR = gsap.utils.random(-720, 7200, 30);

  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: xValue,
      rotate: rotate,
      duration: 1,
    });
  }, [xValue, rotate]);

  return (
    <div>
      <main>
        <button
          onClick={() => {
            setXValue(randomX);
            setRotate(randomR);
          }}
        >
          Animate
        </button>
        <img
          ref={boxRef}
          src="https://pngimg.com/uploads/fly/fly_PNG3946.png"
          alt=""
        />
      </main>
    </div>
  );
};

export default App;
