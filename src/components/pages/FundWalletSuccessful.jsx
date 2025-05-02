import React from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import SuccessIcon from '../../assets/images/Success.png';

const FundWalletSuccessful = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-black">
      {/* Left black background div */}
      <div className="flex-1 bg-black hidden md:block"></div>

      {/* Right content div */}
      <div className="flex-1 p-6 bg-white flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          {/* <button
            onClick={() => navigate(-1)}
            className="text-sm text-[#371868] font-medium hover:underline"
          >
            ← Go Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="text-gray-500 hover:text-red-600 flex items-center gap-2"
          >
            <X className="w-6 h-6 bg-[#E5E5EA] rounded-full p-1" /> Close
          </button> */}
        </div>

        {/* Success Title */}
        <h2 className="text-4xl font-semibold text-[#188030] mb-20 mt-8 text-center">
          Successful
        </h2>

        {/* Success Message */}
        <div className="flex flex-col items-center text-center mb-[89.5px]">
          <img src={SuccessIcon} alt="Success" className="w-[140px] h-[125.74px] mb-20" />
          <h2 className="text-2xl font-bold text-[#351A60] mb-2">
            Wallet Funded
          </h2>
          <p className="text-sm text-gray-700 tracking-wide max-w-[400px]">
          You have successfully funded your wallet with ₦5,000, Click on the button below to continue.
          </p>
        </div>

        {/* Done Button */}
        <div className="flex justify-center">
          <button 
            onClick={() => navigate("/wallet")}
            className="w-[350px] bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
             Back Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default FundWalletSuccessful;
