import React from "react";
import HeroImage from '../../assets/images/hero-image.png'

const Hero = () => {
    return (
        <section className="bg-[#F2EBFD] py-16 w-full overflow-hidden ">
            <div className="mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center">
                {/* Left Content */}
                {/* <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-800 text-center sm:text-left "> */}
                <div className=" text-center sm:text-left ">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:leading-16 leading-10 font-urbanist ">
                    A Market For All Your <span className="text-[#7B36E7]">Unique Verified</span> Safe  Social Media <span className="text-[#7B36E7]">Accounts.</span>
                    </h1>
                    <p className="text-gray-500 text-[20px] mb-6 md:leading-8 leading-8">
                    Get access to aged and high-engagement accounts on Instagram, Facebook, TikTok, and more.
                    </p>
                    <button className= "md:mt-12 mt-4 bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white  px-16 py-3 rounded-lg shadow-md hover:bg-gradient-to-r from-[#622BB9] to-[#351A60] transform transition-transform duration-300 hover:scale-105">
                        Browse Accounts
                    </button>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2 flex ">
                    <img
                        src={HeroImage}
                        alt="Hero"
                       className="w-full max-w-[798px] h-auto sm:w-[600px] md:w-[700px] lg:w-[798px] sm:h-[600px] md:h-[700px] lg:h-[803px] mx-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;