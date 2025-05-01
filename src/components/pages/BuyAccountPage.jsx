import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const BuyAccountPage = () => {
  const { platformName, productName } = useParams();
  const navigate = useNavigate();
  const handleBuyLog = () => {
    navigate("/log-purchased-successful");
  };

return (
    <div className="flex min-h-screen bg-black">
        {/* Left black background div */}
        <div className="flex-1 bg-black"></div>
        
        {/* Right content div */}
        <div className="flex-1 p-6 bg-white">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={() => navigate(-1)}
                    className="text-sm text-[#371868] font-medium"
                >
                    Go Back / Account
                </button>
                <button onClick={() => navigate(-1)} className="text-gray-500 hover:text-red-600 gap-2 flex">
                    <X className="w-6 bg-[#E5E5EA] h-6" /> Close
                </button>
            </div>

            {/* Title & Quantity */}
            <h2 className="text-xl font-semibold  text-gray-800 mb-[60px] mt-[61px]">Log Details</h2>
            <div className="flex justify-between">
                    <h2 className="text-xl font-semibold mb-2 text-gray-800">{productName}</h2>
                    <p className="px-4 py-2 bg-[#E5E5EA] rounded-full text-sm">231 pcs</p>
            </div>
            

            {/* Description */}
            <p className="text-sm text-gray-700 mb-10 tracking-wide">
                5-8yrs with posts | 1000 followers
            </p>

            {/* Credentials */}
            <div className="bg-[#F8F8F8] rounded-lg mb-10">
                <h3 className="font-semibold text-sm text-gray-700 mb-2">
                    Account Credentials:
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                    <li>Username: example_user</li>
                    <li>Password: ********</li>
                    <li>Email: example@email.com</li>
                    <li>Email Password: ********</li>
                </ul>
            </div>

            {/* Amount */}
            <div className="text-lg font-bold text-[#351A60] mb-20">₦9,000</div>

            {/* Buy Button */}
            <div className="flex justify-center">
            <button 
            onClick={handleBuyLog}
            className="w-[350px] bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white py-3 rounded-lg font-semibold hover:opacity-90"
          >
            Buy Log
          </button>
            </div>
        </div>
    </div>
);
};

export default BuyAccountPage;