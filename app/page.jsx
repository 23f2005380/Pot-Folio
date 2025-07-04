"use client";
import Image from "next/image";
import "./styles.css";
import Message from "../components/message/message";
import { useState, useEffect } from "react";
import BackgroundAnimation from "../components/backgroundAnimations";
import Learning from "../components/Learning.jsx";
import cardsData from "../public/data/dataCards.json";
import Details from "../public/data/Detauls.json";
import Float from "../components/float";
// import {ReactComponent as Instagram} from "../public/icons8-instagram.svg"

export default function Home() {
  let [cardWidth, setCardWidth] = useState(31.9 + "%");
   useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 500) {
        setCardWidth("100%");
      } else {
        setCardWidth("31.9%");
      }
    }
    handleResize(); // Set on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 
  const cards = [
    cardsData["data"].map((array, index) => {
      return {
        title: array.title,
        img: array.images[0],
        color: "#565432",
        content: (
          <div className="card-info p-4 flex flex-col md:flex-row ">
           
            <div
              className="w-full md:w-2/3 p-4 rounded-lg"
              style={{
                backdropFilter: "blur(2px)",
                backgroundColor: "rgba(11, 25, 44, 0.8)",
              }}
            >
              <div className="flex">
              <h2 className="text-xl font-bold text-white mb-4">{array.title}</h2>
         <div className="pl-2 flex text-cyan"style={{color : "cyan"}} >
              {array.links.github ? 
              <a href={array.links.github}  className="flex text-cyan justify-center">
                Github
              
                             
                          </a> : "" }
              {array.links.vercel ? 
              <a href={array.links.vercel}  className="flex text-cyan justify-center">
                Vercel
             
                          </a> : "" }
</div></div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white">Overview</h3>
                <p className="text-sm text-gray-200">{array.info}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white">About</h3>
                <p className="text-sm text-gray-200">{array.about}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white">Process</h3>
                <ul className="list-disc list-inside text-sm text-gray-200">
                  {array.process
                    ? array.process.map((value, index) => (
                        <li key={index}>{value}</li>
                      ))
                    : ""}
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white">Technologies</h3>
                <ul className="flex flex-wrap gap-2">
                  {array.technologies
                    ? array.technologies.map((value, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center p-2 border rounded bg-gray-200 shadow-sm"
                        >
                          {value == "jinja" ? 
                          <img
                            src="https://img.icons8.com/?size=100&id=ozhjyQgunVVO&format=png&color=000000"
                            alt={value}
                            title={value}
                            className="w-8 h-8 mr-2"
                          /> :
                          value == "SqlAlchemy" ? 
                          <img
                            src={`https://img.icons8.com/color/48/000000/sql.png`}
                            alt={value}
                            title={value}
                            className="w-8 h-8 mr-2"
                          /> : 
                          <img
                            src={`https://img.icons8.com/color/48/000000/${value
                              .toLowerCase()
                              .replace(/\s+/g, "-")}.png`}
                            alt={value}
                            title={value}
                            className="w-8 h-8 mr-2"
                          /> }
                          <span className="text-sm">{value}</span>
                        </div>
                      ))
                    : ""}
                </ul>
              </div>
               <div className="mb-4">
                <h3 className="text-lg font-semibold text-white">Links to Games</h3>
                
              {array.listLinks ? array.listLinks.map((value,index) => (
                
                <li className="text-[#5a84d2]"><a href={value[1]}>{value[0]}</a></li>
    )) : ""}
              <div>
                </div>
              
                <h3 className="text-lg font-semibold text-white">Features</h3>
                <ul className="list-disc list-inside text-sm text-gray-200">
                  {array.features
                    ? array.features.map((value, index) => (
                        <li key={index}>{value}</li>
                      ))
                    : ""}
                </ul>
              </div>

            </div>

            <div
              className="w-full md:w-1/3 mt-4 md:mt-0 md:ml-4 bg-[#658954] p-4 rounded-lg"
              style={{
                background: "rgba(76,208,17,0.4)",
              }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">Gallery</h3>
              <div className="grid grid-cols-2 gap-2">
                {array.images.map((img, index) => (
                  <div key={index} className="imageCard">
                    <img
                      src={img}
                      alt={`Image ${index + 1}`}
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ),
      };
    }),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(cards[0])
  useEffect(() => {
    

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Only slide up to the third last card
         let element  = document.getElementsByClassName("cardProject")[0]
         element = element.style.width;
        if(element == "31.9%"){

          console.log("167", cardWidth)
if (prevIndex >= (cards[0].length - 3)) {
          return 0;
        } else {
          return prevIndex + 1;
        }
        }
        else{
          if (prevIndex >= (cards[0].length -1 )) {
          return 0;
        } else {
          return prevIndex + 1;
        }
        }
        
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [cards[0].length]);

  let [content, setContent] = useState(null);
  let [expanded, seExp] = useState(["false", -1]);
  function loadCardInfo(index) {
    <Message message="Rendering Cards" />
    content = document.querySelector(".content");
    if (expanded[0]) {
      if (expanded[1] == index) {
        seExp(["false", -1]);
        setContent("");
        document.getElementById("contentCircle").style.display = "none";
        content.style.height = "60vh";
        content.style.transition = "height 0.5s ease"; // Add animation
        content.style.height = "0"; // Set height to 0
        document.getElementById("menu").scrollIntoView({ behavior: "smooth" });

        return;
      }
    }
    seExp([true, index]);

    const card = cards[0][index];

    content.style.height = "0"; // Reset height
    content.style.transition = "height 0.5s ease"; // Add animation
    content.style.height = "60vh"; // Set desired height
    setContent(card.content);
    // Scroll to the content
    console.log("scroll");
    setTimeout(() => {
      content.scrollIntoView({ behavior: "smooth" });
      document.getElementById("contentCircle").style.display = "block";
    }, 500);
  }

  useEffect(() => {
  
 let node = document.getElementById("imageText").childNodes;
 let time = 1
 for(let i =0; i< node.length; i++){
  node[i].style.animation = "imageTextAnimate 1s ease-in"
  node[i].style.animationDelay = time+"s"
  // node[i].setAttribute("id", "rotateExclamation")
  time+=0.15;
 }

  }, [])
  const text = Array.from({ length: 16 }, (_, i) => (
    <span className="rotateExclamation" key={i}>{"!".repeat(110)+"\n"}</span>
  ));
  return (
    <div className="w-full flex flex-col items-center justify-center px-[2vw] font-[family-name:var(--font-geist-sans)] min-h-[80vh]">
      <Message message="Mounting Home Start" />
      <main className="flex flex-col gap-6 px-2 md:px-8 w-full max-w-[1400px]">
        <div className="home-intro grid grid-cols-1 sm:grid-cols-3 gap-4 sm:h-[58.28vh] pb-[2vh]">
          <div className="head-and-desc sm:col-span-2 w-full h-full flex flex-col justify-between stamp-border" style={{zIndex : "-1"}}>
            <div
              className="head pt-2"
              style={{ fontSize: "clamp(16px, 2.5vw, 24px)", marginBottom: "0.5vh" }}
            >
              <div className="flex flex-wrap items-center" id="main">
                <div className="head-1 text-[#9EB0C5]" style={{fontSize : "34px", color : "#fafafa"}}>Myself</div>
                <div className="head-2 text-[#FF6500] ml-2 flex items-center" style={{fontSize : "34px", fontWeight : "500", color : "#000"}}>
                  Aman Kumar
                </div>
                <div className="pl-[1vh] svgs flex gap-[0.5vh]">
                  
                  <div className="profilesSVG" style={{zIndex : "200"}}>
                     <a href="https://github.com/23f2005380/">
                   
                    {/* <img
                      src="/icons8-github.svg"
                      alt="Github"
                      className="inline-block"
                      style={{ width: "3.5vh", height: "3.5vh", minWidth: 18, minHeight: 18 }}
                    /> */}
                    </a>
                  </div>
                  <div className="profilesSVG">
                    <a href="https://www.linkedin.com/in/aman-kumar-a841352a4/">
                    {/* <img
                      src="/icons8-linkedin.svg"
                      alt="LinkedIn"
                      className="inline-block"
                      style={{ width: "3.5vh", height: "3.5vh", minWidth: 18, minHeight: 18 }}
                    /> */}
                    
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="text-[#fff] mt-2"
                style={{
                  fontSize: "clamp(12px, 1.8vw, 16px)",
                  width: "100%",
                  marginBottom: "0.5vh",
                  fontFamily : "cursive"
                }}
              >
                {Details["data"].map((value, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-2 details gap-x-2 gap-y-1"
                    style={{ marginBottom: "0.2vh" }}
                  >
                    <div className="detailLabel detail" style={{fontSize : "22px", color :"blanchedalmond"}}>{value.label}</div>
                    <div className="detailValue detail" style={{fontSize : "18px"}}>{value.value}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "0.5vh" }}>
                <Learning />
              </div>
            </div>
          </div>
          <div className="merged-image-con flex sm:justify-end justify-center items-center h-full bg-[#000] p-2" style={{borderRadius : "12px"}}>
            <div className="merge-text w-full h-full flex items-center justify-center bg-[oklch(0.5 0.11 242.99)]" style={{borderRadius : "10px", backgroundColor : "oklch(0.5 0.11 242.99)"}}>
              <pre
                className="clamation"
                id="imageText"
                style={{
                  backgroundImage: 'url("/aman.png")',
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition : "center",
                  // margin: 0,
                  // padding: 0,
                  // height: "100%",
                  // width: "100%",
                  
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {text}
              </pre>
            </div>
          </div>
        </div>

        <div
          className="slider bg-[#1a956a] mt-2 w-full md:w-[70vw] rounded-lg relative border border-[#658932]-500 p-2 flex items-center"
          style={{ height: "25.9vh", minHeight: "120px", maxHeight: "25.9vh" }}
        >
          <div className="overflow-hidden relative w-full p-0.5 flex justify-center items-center h-full">
            <div
              className="flex transition-transform w-full items-center duration-500 ease-in-out gap-3 h-full"
              style={{
                // Only slide up to the third last card
                transform: cardWidth == "31.9%" ? `translateX(-${currentIndex * 33.5}%)` : `translateX(-${currentIndex * 103.9}%)`,
                width: "100%",
                height: "100%",
              }}
            >
             
              {cards[0].map((card, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex justify-center items-center cardProject"
                  style={{
                   
                    height: "20vh",
                    minHeight: "80px",
                    maxHeight: "20vh",
                    borderRadius: "8px",
                    overflow: "hidden",
                    position: "relative",
                    margin: "0 0.2vw",
                  }}
                  onClick={() => loadCardInfo(index)}
                >
                  <div className="absolute justify-left items-start top-[2px] left-[2px] bg-[#0b192c] p-1 rounded" style={{fontSize : "18px", fontWeight : "400", color : "cyan"}}>
                  {card.title}</div>
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
         <div className="relative w-full md:w-[70vw] p-[2vh] px-2">
        <div
          id="contentCircle"
          className="hidden"
          style={{
            borderRadius: "50%",
            position: "absolute",
            width: "100px",
            height: "100px",
            background: "#326589",
            bottom: "-8%",
            right: "-6%",
            zIndex: 0,
          }}
        ></div>
        <div
          className="flex flex-col "
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            backdropFilter: "blur(2px)",
            WebkitBackgroundFilter: "blur(4px)",
            borderRadius: "10px",
            border: "1px solid rgba(255, 255, 255, 0.18",
            minHeight: "0",
            maxHeight: "60vh",
            overflowY: "auto",
            padding: "1vh 1vw",
            zIndex: 1,
            display : "flex",
            justifyContent : "flex-start",
            alignItems : "flex-start",
            
          }}
        >
          <div
            className="content"
            style={{
              fontSize: "clamp(12px, 1.5vw, 16px)",
              margin: 0,
              padding: 0,
              width: "100%",
              height: "100%",
              boxSizing: "border-box",
            }}
          >
            {content}
          </div>
        </div>
      </div>

      </main>
     
      <footer className="w-full" style={{ minHeight: "2vh" }}></footer>
      
    </div>
  );
}
