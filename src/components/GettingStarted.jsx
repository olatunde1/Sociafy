import {
  FaUserPlus,
  FaCheckCircle,
  FaCreditCard,
  FaKey
} from "react-icons/fa";
import React, { useLayoutEffect, useRef, useState } from 'react';
import IconCreateAccount from "../assets/images/create-account-icon.png";
import IconChooseAccount from "../assets/images/choose-account-icon.png";
import IconMakePayment from "../assets/images/make-payment-icon.png";
import IconReceivePayment from "../assets/images/receive-payment-icon.png";
import Secure from "../assets/images/secure-transaction.png";
import Verified from "../assets/images/verified-accounts.png";
import Instant from "../assets/images/instant-delivery.png";

const steps = [
  {
    image: IconCreateAccount,
    title: "Create Account",
    description: "Register on Sociafy using valid information.",
  },
  {
    image: IconChooseAccount,
    title: "Choose an Account",
    description: "Pick from our verified social media accounts.",
  },
  {
    image: IconMakePayment,
    title: "Make Payment",
    description: "Pay securely using your preferred method.",
  },
  {
    image: IconReceivePayment,
    title: "Receive Login Instantly",
    description: "Receive account credentials right after payment.",
  },
];

export default function GetStarted() {
   const containerRef = useRef(null);
    // const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState({});
  
    useLayoutEffect(() => {
      let ticking = false;
  
      // Smooth scroll implementation
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            // setScrollY(window.scrollY);
            
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
    // const getParallaxTransform = (speed = 0.5) => {
    //   return `translateY(${scrollY * speed}px)`;
    // };
  
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
    <>
    <div  ref={containerRef} >

      {/* Get Started Steps */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className={`text-2xl md:text-4xl font-bold mb-12 fade-in ${getFadeInClass(0)}`}>
            Get Started in <span className="text-[#7B36E7]">4 Easy Steps</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center bg-white p-6 shadow-md rounded-xl w-full max-w-xs transform transition-transform duration-300 hover:scale-105  fade-in ${getFadeInClass(1, 400)}`}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Sociafy */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center"
        >
          <h2 className={`text-3xl md:text-4xl font-extrabold font-custom mb-20 fade-in ${getFadeInClass(1)}`}>
            Why Choose <span className="text-[#7B36E7]">Sociafy</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            {/* Secure Transactions */}
            <div className={`bg-[#EBE1FB] p-8 rounded-3xl flex flex-col justify-between shadow-md transform transition-transform hover:scale-105 max-w-sm w-full fade-in ${getFadeInClass(1)}`}>
              <div>
                <h3 className="text-2xl font-semibold mb-4 font-urbanist">Secure Transactions</h3>
                <p className="text-[#515151] leading-6">
                  We use encrypted payment gateways to ensure all transactions are safe and fraud-proof.
                </p>
              </div>
              <img src={Secure} alt="Secure Transactions" className="mt-6 w-full h-auto object-contain" />
            </div>

            {/* Verified Accounts */}
            <div className={`bg-[#DDEFFB] p-8 rounded-3xl flex flex-col justify-between shadow-md transform transition-transform hover:scale-105 max-w-sm w-full fade-in ${getFadeInClass(1)}`}>
              <div>
                <h3 className="text-2xl font-semibold mb-4 font-urbanist">Verified Accounts</h3>
                <p className="text-[#515151] leading-6">
                  Every account listed is pre-checked to ensure authenticity and legitimacy before being sold.
                </p>
              </div>
              <img src={Verified} alt="Verified Accounts" className="mt-6 w-full h-auto object-contain" />
            </div>

            {/* Instant Delivery */}
            <div className={`bg-[#DDF1E2] p-8 rounded-3xl flex flex-col justify-between shadow-md transform transition-transform hover:scale-105 max-w-sm w-full fade-in ${getFadeInClass(1)}`}>
              <div>
                <h3 className="text-2xl font-semibold mb-4 font-urbanist">Instant Delivery</h3>
                <p className="text-[#515151] leading-6">
                  Get your account details immediately after a successful purchase – no delays, no hassle.
                </p>
              </div>
              <img src={Instant} alt="Instant Delivery" className="mt-6 w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

    </div>
      
    </>
  );
}
