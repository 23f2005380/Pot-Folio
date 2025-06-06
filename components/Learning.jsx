import data from "../public/data/dataCards.json";
import skills from "../public/data/skills.json";
import "../app/styles.css"
import { useEffect } from "react";
export default function Learning() {
    let list = [];

    if (data["data"]) {
        data["data"].map((val) => {
            if (val["technologies"]) {
                val["technologies"].map((value) => {
                    if (!list.includes(value)) {
                        list.push(value);
                    }
                });
            }
        });
    }
    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
    },[])
    

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "10px" , fontSize : "18px", paddingLeft : "0px"}}>
            <div style={{ width: "100%", overflow: "hidden" , whiteSpace : "nowrap" }}>
                <h3 style={{color : "#fff", fontSize : "15px"}}>Skills</h3>
                   <div className="scroller" data-speed="fast">
                         <ul className="tag-list scroller__inner">
                             {list.map((item, index) => (
                            <li key={index} className="card bg-[#cdddf4] flex justify-center font-[#213212]  items-center w-full h-[40px] p-1" style={{borderRadius : "6px", fontSize : "16px", fontWeight : "400"}}>
                                {item}
                            </li>

                             ))}
                             </ul>
                      </div>
                
            </div>
                <div  className=" relative" style={{ width: "100%" , overflow : "hidden", whiteSpace : "nowrap" }}>
                                <h3 style={{color : "#FFF", fontSize : "15px"}}>Skills applied in projects</h3>
                                      <div className="scroller" data-speed="fast">
                         <ul className="tag-list scroller__inner">
                                            {skills["data"].map((skill, index) => (
                                            <li key={index} className="card bg-[#cdddf4] flex justify-center font-[#213212]  items-center w-full h-[40px] p-1" style={{borderRadius : "6px", fontSize : "16px", fontWeight : "400"}}>
                                                {skill}
                                            </li>
                                            ))}
                                            </ul>
                                            
                                    </div>
                
           
            </div>
            <style jsx>{`
             
                    .animateSkills {
                    animation : animate 10s linear infinite}
                    @keyframes animate {
                    0% {
                    transform: translateX(0);
                    }
                    50% {
                    transform: translateX(-100%);}
                    100% {
                    transform: translateX(0);}}
            `}</style>
        </div>
    );
}
