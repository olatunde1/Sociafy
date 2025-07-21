import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import SociafyLogo from '../../assets/images/logo.png'; // replace with your actual logo path
import Telegram from '../../assets/images/telegram-icon.png'
import Whatsapp from '../../assets/images/whatssap-icon.png'
import { Link } from "react-router-dom";



export default function Footer() {
  return (
    <footer className="container mx-auto px-4 w-full max-w-[1200px] p-6 py-6 bg-[#F8F8F8]">
      <div className="max-w-[1200.5px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left - Logo */}
        <div className="flex-shrink-0">
          <img src={SociafyLogo} alt="Sociafy Logo" className="h-10 w-auto" />
        </div>

        {/* Center - Text */}
        <p className="text-center text-gray-600 text-sm">
          2025 © All rights reserved by <span className="font-semibold text-[#7B36E7]">Sociafy</span>
        </p>

        {/* Right - Icons */}
        <div className="flex space-x-4 text-[#7B36E7] text-xl">
            <Link to="http://T.me/castiin">
              <a href="#" aria-label="Telegram" className="hover:text-purple-700 transition">
                <img src={Telegram} alt="" />
              </a>
            </Link>
        
          <a href="#" aria-label="WhatsApp" className="hover:text-purple-700 transition">
           <img src={Whatsapp} alt="" />
          </a>
        </div>
        
      </div>
    </footer>
  );
}
