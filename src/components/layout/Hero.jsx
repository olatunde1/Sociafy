import React, { useLayoutEffect, useRef, useState } from 'react';
import HeroImage from '../../assets/images/hero-image.png';
import { Link } from "react-router-dom";


const Hero = () => {
    
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useLayoutEffect(() => {
    let ticking = false;

    // Smooth scroll implementation
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          
          // Check visibility of elements
          const elements = document.querySelectorAll('.fade-in');
          const newVisibility = {};
          
          elements.forEach((element, index) => {
            const rect = element.getBoundingClientRect();
            const isElementVisible = rect.top < window.innerHeight * 0.85;
            newVisibility[index] = isElementVisible;
          });
          
          setIsVisible(prev => ({ ...prev, ...newVisibility }));
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add smooth scroll CSS
    document.documentElement.style.scrollBehavior = 'smooth';

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  // Parallax transform calculation
  const getParallaxTransform = (speed = 0.5) => {
    return `translateY(${scrollY * speed}px)`;
  };

  // Fade in animation class
  const getFadeInClass = (index, delay = 0) => {
    const visible = isVisible[index];
    return `transition-all duration-1000 ease-out ${delay > 0 ? `delay-${delay}` : ''} ${
      visible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-12'
    }`;
  };

    return (
        <section ref={containerRef} className="bg-[#F2EBFD] py-8 sm:py-12 md:py-16 w-full overflow-hidden"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-6 sm:gap-10 md:gap-20"
            style={{ transform: getParallaxTransform(0.3) }}
            >
                
                {/* Left Content */}
                <div className="w-full md:w-1/2 text-center md:text-left"
                >
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 leading-snug md:leading-tight font-urbanist">
                        A Market For All Your <span className="text-[#7B36E7]">Unique Verified</span> Safe Social Media <span className="text-[#7B36E7]">Accounts.</span>
                    </h1>
                    <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:leading-8">
                        Get access to aged and high-engagement accounts on Instagram, Facebook, TikTok, and more.
                    </p>
                    <Link to="/login">
                     <button className="mt-4 sm:mt-6 md:mt-10 bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white px-20 sm:px-8 md:px-12 py-3 sm:py-3 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 text-sm sm:text-base">
                        Browse Accounts
                    </button>
                    </Link>
                   
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