import React from "react"
import { useInView } from 'react-intersection-observer';
import './animations.css';

const Secthree = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1, // Adjust based on when you want the animation to start
    });
    return (
        <div className="bg-[#D6CEAD] w-full pt-32 pb-24 px-2 md:px-10 lg:px-16">
            <h2 className="mb-14 font-bold">US IN NUMBERS</h2>
            <div
               ref={ref}
               className={`transition-opacity duration-1000 ease-in-out flex flex-col md:flex-row gap-4 text-white font-bold justify-between ${inView ? 'slide-in-from-bottom' : 'opacity-0'}`}>
                <div className="flex justify-center flex-col text-center bg-[#2C2713] py-20 px-20 rounded-md">
                    <h2 className="text-6xl">48</h2>
                    <p>Current Projects</p>
                </div>
                <div className="flex justify-center flex-col text-center bg-[#2C2713] py-20 px-20 rounded-md">
                    <h2 className="text-6xl">282</h2>
                    <p>Homes Renovated</p>
                </div>
                <div className="flex justify-center flex-col text-center bg-[#2C2713] py-20 px-20 rounded-md">
                    <h2 className="text-6xl">35</h2>
                    <p>Valued Partners</p>
                </div>
            </div>
        </div>
    )
}

export default Secthree;