import React, { useState } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import WalletBalance from "../../assets/images/wallet-balance.png";
import TotalOrder from "../../assets/images/total-order.png";
import TotalDeposit from "../../assets/images/total-deposit.png";
import SociafyCornerImage from "../../assets/images/socccialffy-corner.png";
import Loader from "../Loader";
import {
  useOrders,
  usePayment,
} from "@/hooks/api/queries/user/dashboard/getHistories";
import { useUserOverview } from "@/hooks/api/queries/user/dashboard/getOverview";
import { useNavigate } from "react-router-dom";
import FundWalletModal from "./FundWalletModal";

const UserDashBoard = () => {
  const navigate = useNavigate();

  const { data: userOverview, isPending } = useUserOverview();
  const { data: paymentHistory, isPending: payPend } = usePayment({
    limit: 5,
  });
  const { data: orderHistory, isPending: orderPend } = useOrders({
    limit: 5,
  });

  // console.log("paymentHistory Data:", paymentHistory);
  // console.log("orderHistory Data:", orderHistory);

  const OverviewData = userOverview?.data;
  const [open, setOpen] = useState(false);
 

  return (
    <div className="">
    
      {isPending || payPend || orderPend ? (
        <Loader />
      ) : (
        <>
          {/* ───────────── Cards Section ───────────── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 ">
            {/* Card 1 - Wallet Balance */}
            {/* Card 1 - Wallet Balance */}
            <div className="bg-white rounded-2xl shadow-md  flex flex-col w-full">
              {/* Icon and Title */}
              <div className="flex flex-col  mb-6">
                <div className="p-4 rounded-full text-white mb-2">
                  <img
                    src={WalletBalance}
                    alt="Wallet Icon"
                    className="w-10 h-10"
                  />
                </div>
                <h4 className="text-[#515151] font-medium text-[16px] p-4">
                  Wallet Balance
                </h4>
              </div>

              {/* Amount and Button */}
              <div className="flex items-center justify-between w-full mt-auto bg-black p-[22px] rounded-bl-2xl rounded-br-2xl text-white">
                <p className="text-2xl font-bold">
                  ₦ {OverviewData?.walletBalance || "0"}
                </p>
                <button  onClick={() => setOpen(true)} className="bg-gradient-to-r from-[#622BB9] to-[#351A60] cursor-pointer text-white px-4 py-2 rounded-lg whitespace-nowrap">
                  Fund Wallet
                </button>
              </div>
            </div>

            {/* Card 2 - Total Orders */}

            <div className="relative bg-white rounded-2xl shadow-md flex flex-col w-full overflow-hidden">
              {/* Icon and Title */}
              <div className="flex flex-col mb-6">
                <div className="p-4 rounded-full text-white mb-2">
                  <img
                    src={TotalOrder}
                    alt="Wallet Icon"
                    className="w-10 h-10"
                  />
                </div>
                <h4 className="text-[#515151] font-medium text-[16px] p-4">
                  Total Orders
                </h4>
              </div>

              {/* Amount Section */}
              <div className="flex items-center justify-between w-full p-[22px] rounded-bl-2xl rounded-br-2xl text-white">
                <p className="text-2xl font-bold text-black">
                  {OverviewData?.userOrderCount || "0"}
                </p>
              </div>

              {/* Bottom Right Corner Image */}
              <img
                src={SociafyCornerImage}
                alt="Corner Logo"
                className="absolute bottom-0 right-0 w-[132.54px] h-[119px] opacity-70"
              />
            </div>

            {/* Card 3 - Total Deposit */}

            <div className="relative bg-white rounded-2xl shadow-md flex flex-col w-full overflow-hidden">
              {/* Icon and Title */}
              <div className="flex flex-col mb-6">
                <div className="p-4 rounded-full text-white mb-2">
                  <img
                    src={TotalDeposit}
                    alt="Wallet Icon"
                    className="w-10 h-10"
                  />
                </div>
                <h4 className="text-[#515151] font-medium text-[16px] p-4">
                  Total Deposits
                </h4>
              </div>

              {/* Amount Section */}
              <div className="flex items-center justify-between w-full p-[22px] rounded-bl-2xl rounded-br-2xl text-white">
                <p className="text-2xl font-bold text-black">
                  ₦ {OverviewData?.totalDeposit || "0"}
                </p>
              </div>

              {/* Bottom Right Corner Image */}
              <img
                src={SociafyCornerImage}
                alt="Corner Logo"
                className="absolute bottom-0 right-0 w-[132.54px] h-[119px] opacity-70"
              />
            </div>
          </div>

          {/* ───────────── Tables Section ───────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {/* Payment History Table */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-bold">Payment History</h4>
                <button
                  onClick={() => navigate("/wallet")}
                  className="text-[#E94E30] hover:underline text-sm"
                >
                  View All
                </button>
              </div>

              <div className="overflow-x-auto">
                <div className="min-w-[600px] space-y-4">
                  {/* Table Headers */}
                  <div className="grid grid-cols-4 px-2 text-sm text-[#949494] bg-[#EDF2F7] font-semibold border-b border-b-[#EDF2F7] pb-[21px] pt-[21px]">
                    <div>Transaction ID</div>
                    <div>Amount</div>
                    <div>Date</div>
                    <div>Status</div>
                  </div>

                  {/* Table Rows */}
                  {Array.isArray(paymentHistory?.data?.result) &&
                  paymentHistory.data.result.length > 0 ? (
                    paymentHistory.data.result.map((txn) => (
                      <div
                        key={txn._id}
                        className="grid grid-cols-4 px-2 text-sm py-3 border-b border-b-[#EDF2F7] items-center"
                      >
                        <div className="truncate">{txn.transactionId}</div>
                        <div>₦{txn.amount.toLocaleString()}</div>
                        <div>
                          {new Date(txn.createdAt).toLocaleDateString("en-NG")}
                        </div>
                        <div>
                          {txn.status === "success" && (
                            <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
                              Success
                            </span>
                          )}
                          {txn.status === "pending" && (
                            <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-600">
                              Pending
                            </span>
                          )}
                          {txn.status === "failed" && (
                            <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-600">
                              Failed
                            </span>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-500 text-sm col-span-4">
                      No payment history found.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Order History Table */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-bold">Order History</h4>
                <button
                  onClick={() => navigate("/my-purchased")}
                  className="text-[#E94E30] hover:underline text-sm"
                >
                  View All
                </button>
              </div>

              {/* Responsive Table */}
              <div className="overflow-x-auto">
                <div className="min-w-[600px] space-y-4">
                  {/* Table Header */}
                  <div className="grid grid-cols-3 px-2 text-sm text-[#949494] bg-[#EDF2F7] font-semibold border-b border-b-[#EDF2F7] pb-[21px] pt-[21px]">
                    <div>Social Media</div>
                    <div>Amount</div>
                    <div>Date</div>
                  </div>

                  {/* Table Rows */}
                  {Array.isArray(orderHistory?.data?.result) &&
                  orderHistory.data.result.length > 0 ? (
                    orderHistory.data.result.map((item) => {
                      const productName = item.product.toLowerCase();
                      const isFacebook =
                        productName.includes("facebook") ||
                        productName.includes("fb");
                      const isInstagram =
                        productName.includes("instagram") ||
                        productName.includes("insta");
                      const isTwitter =
                        productName.includes("twitter") ||
                        productName.includes("tweet");

                      const Icon = isFacebook
                        ? FaFacebook
                        : isInstagram
                        ? FaInstagram
                        : isTwitter
                        ? FaTwitter
                        : null;

                      return (
                        <div
                          key={item._id}
                          className="grid grid-cols-3 text-sm py-3 px-2 border-b border-b-[#EDF2F7] items-center"
                        >
                          <div className="flex items-center gap-2 capitalize">
                            {Icon && (
                              <Icon
                                className={
                                  isFacebook
                                    ? "text-blue-600"
                                    : isInstagram
                                    ? "text-pink-500"
                                    : "text-blue-400"
                                }
                              />
                            )}
                            {item.product}
                          </div>
                          <div>₦{item.amount.toLocaleString()}</div>
                          <div>
                            {new Date(item.createdAt).toLocaleDateString(
                              "en-NG"
                            )}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-center text-sm py-4 text-gray-500 col-span-3">
                      No order history found.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
     {open && <FundWalletModal isOpen={open} onClose={() => setOpen(false)} />}
    </div>
  );
};

export default UserDashBoard;
