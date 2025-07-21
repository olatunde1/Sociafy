import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { useBuyLogs } from "@/hooks/api/mutation/user/useBuyLogs";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY_Accs } from "@/hooks/api/queries/user/accounts/getAvailableAcc";

const BuyAccountPage = () => {
  const { productName } = useParams();

  const location = useLocation();
  const { product } = location.state || {};
  console.log("Received product:", product);
  const navigate = useNavigate();

  const [qty, setQty] = useState("");

  const { mutate, isPending } = useBuyLogs();

  const queryClient = useQueryClient();

  const handleBuyLog = () => {
    if (!qty) {
      toast.warning("Please enter a quanity amount");
      return;
    }

    mutate(
      {
        name: product?.name,
        quantity: qty ?? "0",
      },
      {
        onSuccess: (response) => {
          toast.success(response?.data?.message || "Paid!");
          //   console.log(response, "response");
          queryClient.invalidateQueries({ queryKey: [QUERY_KEY_Accs] });
          navigate("/log-purchased-successful", {
            state: { response: response?.data?.data, product },
          });
        },
        onError: (error) => {
          toast.error(error?.response?.data?.message || "Log Failed!");
          console.error("Error buying log:", error);
        },
      }
    );
  };
  //   const handleBuyLog = () => {
  //     navigate("/log-purchased-successful");
  //   };

  return (
    <div className="flex min-h-screen bg-transparent">
      {/* Left black background div */}
      <div className="flex-1 bg-transparent"></div>

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
          <button
            onClick={() => navigate(-1)}
            className="text-gray-500 hover:text-red-600 gap-2 flex"
          >
            <X className="w-6 bg-[#E5E5EA] h-6" /> Close
          </button>
        </div>

        {/* Title & Quantity */}
        <h2 className="text-xl font-semibold  text-gray-800 mb-[60px] mt-[61px]">
          Log Details
        </h2>
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            {productName}
          </h2>
          <p className="px-4 py-2 bg-[#E5E5EA] rounded-full text-sm">
            {product?.quantity} pc/pcs
          </p>
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
            <li>Username: {product?.name ?? "nil"}</li>
            <li>Password: ********</li>
            <li>Email: {product?.accountemail ?? "nil"}</li>
            <li>Email Password: ********</li>
          </ul>
        </div>

        {/* Amount */}
        <div className="text-lg font-bold text-[#351A60] mb-5">
          ₦{product?.price ?? "0"}
        </div>

        <label className="block text-sm font-medium mb-4" htmlFor="email">
          Quantity Amount
        </label>
        <input
          name="qty"
          type="number"
          id="qty"
          onChange={(e) => setQty(e.target.value)}
          placeholder="Enter your the amount of quantity"
          required
          className="w-full border border-gray-300 rounded-lg p-3 mb-5 focus:outline-none focus:ring-2 focus:ring-[#7B36E7]"
        />

        {/* Buy Button */}
        <div className="flex justify-center">
          <button
            onClick={handleBuyLog}
            className="w-[350px] bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white py-3 rounded-lg font-semibold hover:opacity-90"
          >
            {isPending ? "Buying" : "Buy Log"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyAccountPage;
