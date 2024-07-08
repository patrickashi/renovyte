import React from "react"

const Secthree = () => {
    return (
        <div className="bg-[#D6CEAD] w-full pt-32 pb-24 px-2 md:px-10 lg:px-16">
            <h2 className="mb-14 font-bold">US IN NUMBERS</h2>
            <div className="flex flex-col md:flex-row gap-4 text-white font-bold justify-between">
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