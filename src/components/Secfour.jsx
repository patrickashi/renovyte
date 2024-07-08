import React from "react"
import building1 from "../Assets/building1.jpg";
import Imageslider from "./Imageslider";

const Secfour = () => {
    return (
        <div className="bg-[#FFFFFF] w-full pt-32 pb-24 px-2 md:px-10 lg:px-16">
           <h2 className="text-2xl">FEATURED REMODELS</h2>
           <h2 className="text-5xl my-2">We Create Spaces You'll Love</h2>
           <button className="bg-[#171200] text-white px-4 py-2 rounded-lg mt-4 mb-10">ALL PROJECTS</button>
           <Imageslider />
        </div>
    )
}

export default Secfour;