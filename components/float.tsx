"use client"
import {useState} from "react"
import "../app/styles.css"
import Image from "next/image";
import Link from "next/link";

export default function Float(){
  const [menuOpen, setMenuOpen] = useState(true);
  function show(){
    let c1 = document.getElementById("circle1")
    let c2 = document.getElementById("circle2")
    let c3 = document.getElementById("circle3")
    let c4 = document.getElementById("circle4")
console.log(menuOpen)
    if(menuOpen == true){
    c4.style.bottom = "70px"
    
    c4.style.background = "#94becadb"
    c3.style.bottom = "140px"
    
    c3.style.background = "#94becadb"
    c2.style.bottom = "210px"
    
    c1.style.background = "#94becadb"
    c1.style.bottom = "280px"
    
    c2.style.background = "#94becadb"
    c1.style.opacity = "1"
      c2.style.opacity = "1"
      c3.style.opacity = "1"
      c4.style.opacity = "1"
    }
    else {
      c1.style.bottom = "0%"
      c2.style.bottom = "0%"
      c3.style.bottom = "0%"
      c4.style.bottom = "0%"
      c1.style.right = "0%"
      c2.style.right = "0%"
      c3.style.right = "0%"
      c4.style.right = "0%"

// c1.style.opacity = "0"
//       c2.style.opacity = "0"
//       c3.style.opacity = "0"
//       c4.style.opacity = "0"
    }
  }
    return (
        <div className="float fixed bottom-[5%] right-[5%]">
          <div className="circle flex justify-center items-center" id="circle1">
          <Link href="/">
          <img src={"https://img.icons8.com/?size=100&id=2797&format=png&color=000000"} width={40} height={40} alt={"Resume"}/>
          </Link> 
        </div>
        <div className="circle circle2 flex justify-center items-center" id="circle2">
          <Link href="/Certi">
          <img src={"https://img.icons8.com/?size=100&id=11215&format=png&color=000000"} width={40} height={40} alt={"Resume"}/>
          </Link>
        </div>
        <div className="circle circle3 flex justify-center items-center" id="circle3">
          <Link href="/Resum">
          <img src={"https://img.icons8.com/?size=100&id=23882&format=png&color=000000"} width={40} height={40} alt={"Resume"}/>
          </Link>
        </div>
        <div className="circle circle4 flex justify-center items-center" id="circle4">
          <Link href="/Contact">
          <img src={"https://img.icons8.com/?size=100&id=7863&format=png&color=000000"} width={40} height={40} alt={"Resume"}/>
          </Link>
        </div>
        <div className="sm:hidden relative flex items-center z-[1000] bg-[#1bad1b] w-[60px] h-[60px] flex justify-center items-center" style={{borderRadius : "50%"}}>
          <button
            className="relative w-8 h-8 flex flex-col justify-center items-center group"
            onClick={() => {setMenuOpen((prev) => !prev); show()}}
            aria-label="Toggle menu"
          >
            {/* Hamburger/Close icon */}
            <span
              className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out
                ${!menuOpen ? "rotate-45 translate-y-2" : "-translate-y-2"}
              `}
            />
            <span
              className={`block absolute h-0.5 w-6 bg-white transition-all duration-300 ease-in-out
                ${!menuOpen ? "opacity-0" : "opacity-100"}
              `}
            />
            <span
              className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out
                ${!menuOpen ? "-rotate-45 -translate-y-2" : "translate-y-2"}
              `}
            />
          </button>
        </div>
        
      </div>
    )
}