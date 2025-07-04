"use client"
import Image from "next/image";
import { useState } from "react";

export default function Certificate() {
    const checkPath = (src: string) => {
        try {
            require("../../public/" + src + ".png");
            return true;
        } catch (err) {
            return false;
        }
    };
    const [showImage, setImageShow] = useState("none");
    const [imageSrc, setImageSrc] = useState("");

    const list = ["swift", "python", "c", "cpp", "java", "sql", "jquery", "img19"];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-8">
            {/* Diploma image */}
            <div className="flex justify-center mb-10 w-full">
                <div className="
                    bg-white border-8 border-yellow-600 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden
                    w-[320px] h-[240px]
                    md:w-[960px] md:h-[480px]
                ">
                    
                    <div className="absolute inset-0 border-4  rounded-xl pointer-events-none"></div>
                    <iframe
                        src="https://drive.google.com/file/d/1yA1wCJi7HXGRtxZqtmZNJ1ueE_-iFnHF/preview"
                        width="100%"
                        height="100%"
                        allow="autoplay"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            border: "none",
                            borderRadius: "1rem",
                            background: "white",
                        }}
                    ></iframe>
                </div>
            </div>
            {/* Certificates grid */}
            <div className="certificate p-4 md:p-10 shadow-2xl flex flex-wrap gap-8 justify-center">
                {list.map((data, index) => (
                    <div
                        key={index}
                        className="certificateCard p-6 bg-white rounded-xl shadow-lg border border-gray-300 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl"
                    >
                        <Image
                            src={checkPath(data) ? `/${data}.png` : `/${data}.jpg`}
                            alt={data + " certificate"}
                            width={320}
                            height={240}
                            className="certificateImage rounded-lg mb-4 border border-gray-200"
                            onClick={() => {
                                setImageSrc(data);
                                setImageShow("flex");
                            }}
                        />
                        <div className="certificateText text-lg font-semibold text-gray-700 tracking-wide">
                            {data.toUpperCase()}
                        </div>
                    </div>
                ))}
            </div>
            {/* Popped Image */}
            <div className="PoppedImage justify-center absolute items-center w-1/2 h-1/2 rounded" style={{ display: showImage }}>
                <Image
                    src={checkPath(imageSrc) ? "/" + imageSrc + ".png" : "/" + imageSrc + ".jpg"}
                    alt={" certificate"}
                    width={320}
                    height={240}
                    className="certificateImage rounded-lg mb-4 border border-gray-200"
                />
            </div>
        </div>
    );
}
