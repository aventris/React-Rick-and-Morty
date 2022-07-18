import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import { Header } from "@components/Header";
import "@styles/Layout.scss";

const Layout = ({ children }) => {
  const animationBox = useRef(null);

  const random = (min, max) => {
    return gsap.utils.random(min, max);
  };

  useEffect(() => {
    const createUnit = () => {
      let unit = document.createElement("div"),
        w = animationBox.current.offsetWidth - 10,
        h = animationBox.current.offsetHeight - 10;
      unit.classList.add("unit");
      animationBox.current.appendChild(unit);

      gsap.set(unit, {
        x: random(0, w),
        y: random(0, h),
        scale: random(0.1, 1),
        opacity: 0,
      });

      let durationTime = random(1, 4);
      gsap.to(unit, {
        opacity: 0.8,
        duration: durationTime,
        onComplete: () => {
          gsap.to(unit, {
            opacity: 0,
            duration: durationTime,
            onComplete: () => {
              unit.parentNode.removeChild(unit);
              createUnit();
            },
          });
        },
      });
    };

    for (let i = 0; i < 50; i++) {
      createUnit();
    }
  }, []);

  return (
    <div className="layout">
      <Header />
      <div className="main">
        <div ref={animationBox} className="animation-bg "></div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export { Layout };
