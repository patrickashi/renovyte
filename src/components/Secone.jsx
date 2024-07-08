import React from "react"

const Secone = () => {
    return (
        <div className="bg-black h-screen relative w-full overflow-hidden text-white ">
            <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
                <source src="/arduinohand.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="relative z-10 pt-40 px-2 md:px-10 lg:px-16 w-full md:w-120">
                <h2 className="text-4xl md:text-6xl"> Transforming Spaces,</h2>
                <h2 className="text-4xl md:text-6xl "> Enhancing homes</h2>
                <p className="my-6 text-xl mt-20 md:mt-4">Experienced & Reliable Remodelers since 1968</p>
                <button className="bg-white text-gray-800 px-4 py-4 rounded-md mt-40 md:mt-10">GET A QUOTE</button>
            </div>
        </div>
    )
}

export default Secone;