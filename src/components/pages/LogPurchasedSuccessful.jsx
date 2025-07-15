import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import SuccessIcon from '../../assets/images/Success.png';
import { format } from "date-fns";

const LogPurchasedSuccessful = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { response, product } = location.state || {};

  console.log(response, product,  "resp")

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
        <div className="flex flex-col items-center text-center mb-6">
          <img
            src={SuccessIcon}
            alt="Success"
            className="w-[140px] h-[125.74px] mb-20"
          />
          <h2 className="text-2xl font-bold text-[#351A60] mb-2">
            Log Purchased
          </h2>
          <p className="text-sm text-gray-700 tracking-wide max-w-[400px]">
            You have successfully purchased the log, see the log credentials
            below.
          </p>
        </div>

        {/* Copy Button */}
        <div className="flex justify-end mb-8">
          <button className="px-6 py-2 text-[#351A60] rounded-full font-medium hover:bg-[#351A60] hover:text-white transition-colors">
            Copy Info
          </button>
        </div>

        {/* Credentials */}
        <div className="bg-[#F2F2F7] border-2 border-dashed rounded-lg p-6 mb-10 space-y-5">
          <div className="flex gap-6 justify-stretch">
            <p className="text-sm text-gray-500 w-32">Username:</p>
            <p className="text-base font-medium break-all">
              @{product?.username ?? "nil"}
            </p>
          </div>

          <div className="flex gap-6 justify-stretch">
            <p className="text-sm text-gray-500 w-32">Password:</p>
            <p className="text-base font-medium break-all">
              {product?.password}
            </p>
          </div>

          <div className="flex gap-6 justify-stretch">
            <p className="text-sm text-gray-500 w-32">E-mail:</p>
            <p className="text-base font-medium break-all">
              {product?.accountemail}
            </p>
          </div>

          <div className="flex gap-6 justify-stretch">
            <p className="text-sm text-gray-500 w-32">E-mail password:</p>
            <p className="text-base font-medium break-all">*****</p>
          </div>

          <div className="flex gap-6 justify-stretch">
            <p className="text-sm text-gray-500 w-32">Date created:</p>
            <p className="text-base font-medium">
              {format(new Date(response?.payment?.createdAt), "MMM, dd, yyyy")}
            </p>
          </div>
        </div>

        {/* Thank You */}

        {/* Done Button */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/accounts")}
            className="w-[350px] bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Thank you
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogPurchasedSuccessful;
