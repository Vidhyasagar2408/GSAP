import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
const App = () => {
  const boxRef = useRef();

  const [xValue, setXValue] = useState(0);

  const random = gsap.utils.random(-500, 500, 100);

  useGSAP(() => {
    gsap.to(boxRef.current, {
      rotate: xValue,
      duration: 1,
    });
  }, [xValue]);

  return (
    <div>
      <main>
        <button
          onClick={() => {
            setXValue(random);
          }}
        >
          Animate
        </button>
        <div ref={boxRef} className="box"></div>
      </main>
    </div>
  );
};

export default App;
