import React from "react"
import { useInView } from 'react-intersection-observer';
import Imageslider from "./Imageslider";


const Secfour = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1, // Adjust based on when you want the animation to start
    });
    return (
        <div className="bg-[#FFFFFF] w-full pt-32 pb-24 px-2 md:px-10 lg:px-16">
           <h2 className="text-2xl">FEATURED REMODELS</h2>
           <h2
           ref={ref}
           className={`transition-opacity duration-1000 ease-in-out text-5xl my-2 ${inView ? 'slide-in-from-left' : 'opacity-0'}`}>We Create Spaces You'll Love</h2>
           <button className="bg-[#171200] text-white px-4 py-2 rounded-lg mt-4 mb-10">ALL PROJECTS</button>
           <Imageslider />
        </div>
    )
}

export default Secfour;