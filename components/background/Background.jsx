import React, { useRef, useEffect } from 'react';
import p5 from 'p5';
import "./Background.css";

const Background = () =>  {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
      };

      p.draw = () => {
        p.background(0);
        p.noStroke();
        for (let i = 0; i < 5000; i++) {
          p.rect(p.random(p.width), p.random(p.height), 2, 2);
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    const canvas = new p5(sketch, sketchRef.current);

    // Give the actual canvas the "background" class
    const canvasElement = sketchRef.current.querySelector('canvas');
    if (canvasElement) {
      canvasElement.classList.add('background');
    }

    return () => {
      canvas.remove();
    };
  }, []);

  return <div className="background" ref={sketchRef} style={{ position: 'fixed', top: 0, left: 0, opacity: 0.05, pointerEvents: "none"}} />;
};

export default Background;