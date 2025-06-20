"use client"
import Image from "next/image";
import {useState} from "react"

export default function Certificate() {

    const checkPath = (src) => {
        try {
            console.log(src)
            require("../../public/"+src+".png")
            
            return true
        }
        catch(err){

            return false
        }
    }
    const [showImage, setImageShow] = useState("none")
    const [imageSrc, setImageSrc] = useState("")

    const list = ["swift" ,"python", "c", "cpp", "java", "sql", "jquery", "img19"];
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="certificate p-10 shadow-2xl flex flex-wrap gap-8 justify-center">
                {list.map((data, index) => (
                    <div
                        key={index}
                        className="certificateCard p-6 bg-white rounded-xl shadow-lg border border-gray-300 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl"
                    >

                        
                        <Image
                            src={checkPath(data) ? `/${data}.png`: `/${data}.jpg`}
                            alt={data + " certificate"}
                            width={320}
                            height={240}
                            className="certificateImage rounded-lg mb-4 border border-gray-200"
                            onClick={(e) => {
                              
                                setImageSrc(data)
                                setImageShow("flex")
                            }}
                        /> :
                      
                        <div className="certificateText text-lg font-semibold text-gray-700 tracking-wide">
                            {data.toUpperCase()}
                        </div>
                    </div>
                ))}
            </div>
            <div className="PoppedImage justify-center absolute items-center width-[50%] height-[50%] rounded" style={{"display" : showImage}}>
               <Image
                            src={checkPath(imageSrc) ? "/"+imageSrc+".png" : "/" + imageSrc + ".jpg"}
                            alt={  " certificate"}
                            width={320}
                            height={240}
                            className="certificateImage rounded-lg mb-4 border border-gray-200"
                        /> 
            </div>
        </div>
    );
}