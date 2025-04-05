import { useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/sociafy-login-icon-logo.png";
import RightImage from "../../assets/images/sociafy-login.png";
import GoogleLogo from '../../assets/images/google-logo.png'
import { Link } from "react-router-dom";

export default function ResetPassword() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="md:h-[1189px] h-full flex items-center justify-center bg-white px-4 md:px-0">
      <div className="w-full max-w-6xl flex flex-col md:flex-row overflow-hidden h-full">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-[#000] h-full">
          {/* You can add additional content or styling here if needed */}
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col bg-white h-full">
          {/* Breadcrumb */}
          <nav className="flex justify-between items-center text-sm mb-[61px]" aria-label="Breadcrumb">
            <ol className="list-reset flex items-center">
              <li>
                <a href="./profile" className="hover:underline">
                  Go Back
                </a>
              </li>
              <li>
                <span className="mx-2 text-gray-500">/</span>
              </li>
              <li className="text-gray-700 font-semibold">
                Update Password
              </li>
            </ol>
            <Link to="/profile">
                <button className="flex items-center text-gray-600 hover:text-gray-800">
                <FaTimes className="mr-1 rounded-md bg-[#515151] text-gray-800" />
                <span>Close</span>
                </button>
            </Link>
           
          </nav>

          {/* Title */}
          <h1 className="text-[20px] font-bold mb-10">Update your Password</h1>

          {/* Form */}
          <form className="space-y-6">
            {/* Current Password */}
            <div>
              <label className="block text-sm font-semibold mb-4" htmlFor="username">
                Current Password
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your current password"
                required
                className="w-full border border-[#949494] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#7B36E7]"
              />
            </div>

            {/* New Password Field */}
            <div>
              <label className="block text-sm font-semibold mb-4" htmlFor="password">
                New Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Create your password"
                required
                className="w-full border border-[#949494] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#7B36E7]"
              />
            </div>
            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-semibold mb-4" htmlFor="password">
                Confirm Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Confirm your password"
                required
                className="w-full border border-[#949494] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#7B36E7]"
              />
            </div>

            {/* Reset Password Button */}
            <Link to="/profile">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white px-8 py-3 mt-[3.75rem] rounded-lg font-semibold hover:bg-purple-700 transform transition-transform duration-300 hover:scale-100"
              >
                Reset Password
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
