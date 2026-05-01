import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
const App = () => {
  const imageRef = useRef();

  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);
  const [rotate, setRotate] = useState(0);

  const randomX = gsap.utils.random(-500, 500, 100);
  const randomY = gsap.utils.random(-200, 200, 100);
  const randomR = gsap.utils.random(-720, 7200, 30);

  useGSAP(() => {
    gsap.to(imageRef.current, {
      x: xValue,
      y: yValue,
      rotate: rotate,
      duration: 1,
    });
  }, [xValue, yValue, rotate]);

  return (
    <div>
      <main>
        <img
          onClick={() => {
            setXValue(randomX);
            setYValue(randomY);
            setRotate(randomR);
          }}
          ref={imageRef}
          src="https://pngimg.com/uploads/fly/fly_PNG3946.png"
          alt=""
        />
      </main>
    </div>
  );
};

export default App;
