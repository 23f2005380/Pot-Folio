// import { useEffect } from "react";

// export default function BackgroundAnimation() {
//   useEffect(() => {
//     const rainContainer = document.getElementById("rain");
//     const rainCount = 500;
//     const drops = [];

//     for (let i = 0; i < rainCount; i++) {
//       const rain = document.createElement("div");
//       rain.className = "rain";

//       const x = Math.random() * window.innerWidth;
//       const y = Math.random() * window.innerHeight;
//       const velocity = Math.random() * 2 + 5;

//       rain.style.position = "absolute";
//       rain.style.left = `${x}px`;
//       rain.style.top = `${y}px`;
//       rain.style.width = "10px";
//       rain.style.height = "10px";
//       rain.style.opacity = 0.5;
//       rain.style.background = "#0976ea ";
//       rain.style.pointerEvents = "none";
//       rain.style.zIndex = "-5";

//       rainContainer.appendChild(rain);

//       drops.push({
//         el: rain,
//         x,
//         y,
//         velocity,
//       });
//     }

//     let animationFrameId;

//     function animate() {
//       for (let i = 0; i < drops.length; i++) {
//         drops[i].y += drops[i].velocity;
//         if (drops[i].y > window.innerHeight) {
//           drops[i].y = -10;
//           drops[i].x = Math.random() * window.innerWidth;
//           drops[i].el.style.left = `${drops[i].x}px`;
//         }
//         drops[i].el.style.top = `${drops[i].y}px`;
//       }
//       animationFrameId = requestAnimationFrame(animate);
//     }

//     animate();

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       while (rainContainer.firstChild) {
//         rainContainer.removeChild(rainContainer.firstChild);
//       }
//     };
//   }, []);

//   return (
//     <div id="rain" className="absolute w-full h-full top-0 left-0 z-[-1]"></div>
//   );
// }
// // export default function backgroundAnimation(){

// //   useEffect(() => {
// //     const rainContainer = document.getElementById("rain");

// //     for(let i = 0; i < 500; i++){

// //     }
// //   })
// //   return(
// //      <div id="rain" className="absolute w-full h-full top-0 left-0 z-[-1]"></div>
// //   )
// // }
'use client';

import { useEffect, useRef, useState } from 'react';

const BALL_COUNT = 10;
const COLORS = [
  '#FF3CAC', '#784BA0', '#2B86C5', '#FFC312', '#C4E538',
  '#12CBC4', '#FDA7DF', '#ED4C67', '#A3CB38', '#1289A7',
];

const getRandom = (min, max) => Math.random() * (max - min) + min;

export default function backgroundBalls() {
  const containerRef = useRef(null);
  const ballsRef = useRef([]);
  const ballDataRef = useRef([]);
  const [ready, setReady] = useState(false);

  // Ensure this runs on client only
  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    const { innerWidth: width, innerHeight: height } = window;

    // Initialize positions and velocities
    ballDataRef.current = Array.from({ length: BALL_COUNT }).map(() => ({
      x: getRandom(0, width - 30),
      y: getRandom(0, height - 30),
      dx: getRandom(-2, 2),
      dy: getRandom(-2, 2),
    }));

    const animate = () => {
      const { innerWidth, innerHeight } = window;

      ballDataRef.current.forEach((ball, i) => {
        ball.x += ball.dx;
        ball.y += ball.dy;

        // Bounce off walls
        if (ball.x < 0 || ball.x > innerWidth - 30) ball.dx *= -1;
        if (ball.y < 0 || ball.y > innerHeight - 30) ball.dy *= -1;

        // Apply to DOM
        const el = ballsRef.current[i];
        if (el) {
          el.style.transform = `translate(${ball.x}px, ${ball.y}px)`;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [ready]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {ready &&
        Array.from({ length: BALL_COUNT }).map((_, i) => (
          <div
            key={i}
            ref={el => (ballsRef.current[i] = el)}
            style={{
              position: 'absolute',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: COLORS[i % COLORS.length],
              transform: 'translate(0, 0)',
            }}
          />
        ))}
    </div>
  );
}
