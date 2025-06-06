import {useState, useEffect} from "react"

export default function backgroundAnimation() {
      useEffect(() => {
        const rainContainer = document.getElementById("rain");
          
        const rainCount = 500;
        for (let i = 0;i < rainCount; i++) {
          const rain = document.createElement("div");
          rain.className = "rain";
          rainContainer.appendChild(rain);
          const x = Math.random() * window.innerWidth;
          const y = Math.random() * window.innerHeight;
          
          const opacity = Math.random() * 0.5 + 0.5;
          const velocity = Math.random() * 5 + 5;
          
          rain.style.position = 'absolute';
          rain.style.left = `${x}px`;
          rain.style.top = `${y}px`;
          const size = Math.min(15, Math.max(5, 20 - velocity * 3));
          rain.style.width = "5px"
          rain.style.height = "10px";
          rain.style.opacity = 0.5;
          rain.style.animation = ` ${velocity}s linear infinite`;
          rain.style.animationDelay = `${Math.random() * 5}s`;
          rain.style.background = `linear-gradient(to bottom, rgb(45, 103, 165) 0%, rgb(46, 94, 191) 100%)`;
          // rain.style.borderRadius = "50%";
          rain.style.pointerEvents = "none";
          rain.style.zIndex = "-1";
           
        }
        const rainElements = document.querySelectorAll(".rain");
        setInterval(() => {
          for(let i =0; i < 500 ; i++){
            rainElements[i].style.top = parseInt(rainElements[i].style.top) + parseFloat(rainElements[i].style.animationDuration) + "px";
            rainElements[i].style.left = parseInt(rainElements[i].style.left) + Math.random() * 10+ "px";
            rainElements[i].style.transform = `rotate(${Math.random() * 360}deg)`;
            if (parseInt(rainElements[i].style.top) > window.innerHeight){
              rainElements[i].style.top = (Math.random() * window.innerHeight) - window.innerHeight / 2 + "px";
              rainElements[i].style.left = (Math.random() * window.innerWidth) + "%";
            }
          }
        }, 20);
      }, []);
      0
    return (
        <div id="rain" className="absolute w-full h-full top-0 left-0 z-[-1]"></div>
    )
}