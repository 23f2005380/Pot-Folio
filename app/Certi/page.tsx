import Image from "next/image";

export default function Certificate() {
    const list = ["swift", "c", "cpp", "java", "jquery"];
    return (
        <div className="min-h-screen  flex items-center justify-center">
            <div className="certificate p-10 shadow-2xl flex flex-wrap gap-8 justify-center">
                {list.map((data, index) => (
                    <div
                        key={index}
                        className="certificateCard p-6 bg-white rounded-xl shadow-lg border border-gray-300 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl"
                    >
                        <Image
                            src={`/${data}.png`}
                            alt={data + " certificate"}
                            width={320}
                            height={240}
                            className="certificateImage rounded-lg mb-4 border border-gray-200"
                        />
                        <div className="certificateText text-lg font-semibold text-gray-700 tracking-wide">
                            {data.toUpperCase()}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}