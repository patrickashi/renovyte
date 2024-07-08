import React, {useState} from "react"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
// import blackbullLogo from "../Assets/blackbullLogo.jpg"


const  Navbar = ({ handleContactClick }) => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        // the opposite of nav
        setNav(!nav)
    }

    const handleLinkClick = (sectionId) => {
        setNav(!nav); // Close the navbar
        if (sectionId) {
          document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' }); // Scroll to the section
        }
      };
    return ( 
        <div className="flex justify-between items-center fixed top-0 left-0 right-0 z-50 py-2 mx-2  md:mx-5 rounded-full bg-transparent mt-4 px-2 text-white font-Montserrat ">
            <div>
                {/* <img className="w-40"  size={20} alt="logo" /> */}
                <div className="flex align-middle ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-white font-semibold align-middle ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                    </svg>

                    <h2 className="text-white font-semibold text-3xl ml-2">Renovyte.</h2>
                </div>
            </div>
            
            <div>
                <ul className="hidden mobile:hidden  md:flex lg:flex xl-flex 2xl:flex text-white mx-auto  ">
                    <li className="p-4 hover:underline hover:cursor-pointer"><a href="#services">SERVICES</a></li>
                    <li className="p-4 hover:underline hover:cursor-pointer"><a href="#about">PROJECTS</a></li>
                    <li className="p-4 hover:underline hover:cursor-pointer"><a href="#faq">ABOUT US</a></li>
                    <li className="p-4 hover:underline hover:cursor-pointer bg-[#847539] rounded-lg" onClick={() => { handleContactClick();  }}><a href="#contactus">GET A QUOTE</a></li>
                    
                </ul>
            </div>

            <button className="block md:hidden p-2 hover:underline hover:cursor-pointer bg-[#847539] rounded-lg text-xs">GET A QUOTE</button>

            <div onClick={handleNav} className="mobile:block md:hidden 2xl:hidden lg:hidden xl:hidden z-20">
                {nav ? <AiOutlineClose className="text-white z-80" size={20}/> : <AiOutlineMenu className="white " size={20}/>} 
            </div>

            {/* toggle menu */}
            <div className={nav ? "fixed left-0 top-0 h-full w-[90%] ease-out duration-500 bg-gray-100" : "fixed left-[-100%]"}>

                <div className="flex align-middle mt-4 ml-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-gray-600 font-semibold align-middle ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                    </svg>

                    <h2 className="text-gray-600 font-semibold text-3xl ml-2">Renovyte.</h2>
                </div>

                <ul className="flex flex-col p-4 my-6 gap-16 text-black">
                    <li className="p-4 border-l border-blue-600" onClick={() => { handleLinkClick() } }><a href="#services">SERVICES</a></li>
                    <li className="p-4 border-l border-green-600" onClick={() => { handleLinkClick() } }><a href="#about">PROJECTS</a></li>
                    <li className="p-4 border-l border-red-600" onClick={() => { handleLinkClick() } }><a href="#faq">ABOUT US</a></li>
                    <li className="p-4 border-l border-pink-600" onClick={() => { handleContactClick(); handleLinkClick(); }}><a href="#contactus">GET A QUOTE</a></li>
                </ul>

               
            </div>
        </div>
     );
}
 
export default Navbar;