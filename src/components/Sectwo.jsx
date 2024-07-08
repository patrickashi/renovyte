import React from "react"
import building1 from "../Assets/building1.jpg";
import renovation3 from "../Assets/renovation3.jpg";

const Sectwo = () => {
    return (
        <div className="bg-[#FFFEED] w-full pt-32 pb-24 px-2 md:px-10 lg:px-16">
           <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="w-full md:w-[700px]">
                    <h2 className="text-2xl">About our company</h2>
                    <h2 className="text-4xl my-6">We provide professional solutions to deliver safe & efficient projects</h2>
                    <p>This is the space to introduce visitors to the business or brand. Briefly explain who's behind it,
                        what it does and what makes it unique. Share its core values and what this site has to offer.
                    </p>
                    <button className="bg-[#171200] text-white px-4 py-2 rounded-lg mt-4">READ MORE</button>
                </div>
                <div className="flex justify-end w-full mt-10 md:mt-0">
                    <img src={renovation3} alt="img" className="w-full md:w-[500px] h-[500px] object-cover rounded-lg" />
                </div>
           </div>
        </div>
    )
}

export default Sectwo;