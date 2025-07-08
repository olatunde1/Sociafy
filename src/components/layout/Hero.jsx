import React from "react";
import HeroImage from '../../assets/images/hero-image.png';

const Hero = () => {
    return (
        <section className="bg-[#F2EBFD] py-8 sm:py-12 md:py-16 w-full overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-6 sm:gap-10 md:gap-20">
                
                {/* Left Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 leading-snug md:leading-tight font-urbanist">
                        A Market For All Your <span className="text-[#7B36E7]">Unique Verified</span> Safe Social Media <span className="text-[#7B36E7]">Accounts.</span>
                    </h1>
                    <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:leading-8">
                        Get access to aged and high-engagement accounts on Instagram, Facebook, TikTok, and more.
                    </p>
                    <button className="mt-4 sm:mt-6 md:mt-10 bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white px-6 sm:px-8 md:px-12 py-2 sm:py-3 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 text-sm sm:text-base">
                        Browse Accounts
                    </button>
                </div>

                {/* Right Image */}
                <div className="w-full md:w-1/2 flex justify-center mb-4 sm:mb-0">
                    <img
                        src={HeroImage}
                        alt="Hero"
                        className="w-full max-w-[280px] xs:max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;