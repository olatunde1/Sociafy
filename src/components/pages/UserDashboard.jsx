import React, { useState } from "react";
import {
  FaWallet,
  FaShoppingCart,
  FaMoneyBillWave,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import Castine from "../../assets/images/castine.png";
import WalletBalance from "../../assets/images/wallet-balance.png";
import TotalOrder from "../../assets/images/total-order.png";
import TotalDeposit from "../../assets/images/total-deposit.png";
import SociafyCornerImage from "../../assets/images/socccialffy-corner.png";
import Loader from "../Loader";
import { getOrders, getPayment } from "@/hooks/api/queries/user/dashboard/getHistories";
import { getUserOverview } from "@/hooks/api/queries/user/dashboard/getOverview";

const UserDashBoard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const user = {
    name: "Castine",
    email: "castiin@sociafy.com",
    balance: "NGN 179,000",
    image: Castine,
  };

  const { data: userOverview, isPending } = getUserOverview();
  const { data: paymentHistory } = getPayment();
  const { data: orderHistory } = getOrders();

  // console.log("paymentHistory Data:", paymentHistory);
  // console.log("orderHistory Data:", orderHistory);

  const OverviewData = userOverview?.data;

  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Accounts", path: "/accounts" },
    { name: "My Purchased", path: "/my-purchased" },
    { name: "Wallet", path: "/wallet" },
    { name: "Rules", path: "/rules" },
    { name: "Support", path: "/support" },
    { name: "My Profile", path: "/profile" },
    { name: "Sign Out", path: "/" },
  ];

  return (
    <div className="p-6 space-y-10 font-custom">
      <div className="flex items-center justify-between gap-4 mb-8">
        {/* User Info */}
        <div className="flex items-center gap-4">
          {user.image ? (
            <img
              src={user.image}
              alt="User"
              className="w-14 h-14 rounded-full object-cover"
            />
          ) : (
            <FaUserCircle className="text-gray-400 w-14 h-14" />
          )}
          <div>
            <h2 className="text-xl font-bold">Welcome, {user.name}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        {/* Wallet Balance Summary */}
        <div className=" px-4 py-2">
          <span className="text-gray-600 font-medium mr-2">Balance:</span>
          <span className=" rounded-lg px-4 py-2 font-medium bg-gradient-to-r from-[#622BB9] to-[#351A60] cursor-pointer text-white">
            {user.balance}
          </span>
        </div>
      </div>

      {isPending ? (
        <Loader />
      ) : (
        <>
          {/* ───────────── Cards Section ───────────── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 mt-10">
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
                <button className="bg-gradient-to-r from-[#622BB9] to-[#351A60] cursor-pointer text-white px-4 py-2 rounded-lg whitespace-nowrap">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {/* Payment History Table */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-bold">Payment History</h4>
                <button className="text-[#E94E30] hover:underline text-sm">
                  View All
                </button>
              </div>

              {/* Responsive Table */}
              <div className="overflow-x-auto">
                <div className="min-w-[600px] space-y-4  ">
                  <div className="grid grid-cols-4 px-2 text-sm text-[#949494] bg-[#EDF2F7] font-semibold border-b border-b-[#EDF2F7] pb-[21px] pt-[21px]">
                    <div>Transaction ID</div>
                    <div>Amount</div>
                    <div>Date</div>
                    <div>Status</div>
                  </div>

                  {/* Example Rows */}
                  <div className="grid grid-cols-4 px-2 text-sm py-3 border-b border-b-[#EDF2F7]  items-center">
                    <div>TRF7894903</div>
                    <div>₦250</div>
                    <div>2025-04-27</div>
                    <div>
                      <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
                        Success
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 px-2 text-sm py-3 border-b border-b-[#EDF2F7] items-center">
                    <div>TRF7894903</div>
                    <div>₦450</div>
                    <div>2025-04-25</div>
                    <div>
                      <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-600">
                        Pending
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 px-2 text-sm py-3 border-b border-b-[#EDF2F7] items-center">
                    <div>TRF7894903</div>
                    <div>₦300</div>
                    <div>2025-04-24</div>
                    <div>
                      <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-600">
                        Failed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order History Table */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-bold">Order History</h4>
                <button className="text-[#E94E30] hover:underline text-sm">
                  View All
                </button>
              </div>

              {/* Responsive Table */}
              <div className="overflow-x-auto">
                <div className="min-w-[600px] space-y-4">
                  <div className="grid grid-cols-3 px-2 text-sm text-[#949494] bg-[#EDF2F7] font-semibold border-b border-b-[#EDF2F7] pb-[21px] pt-[21px]">
                    <div>Social Media</div>
                    <div>Amount</div>
                    <div>Date</div>
                  </div>

                  {/* Example Rows */}
                  <div className="grid grid-cols-3 text-sm py-3 px-2 border-b border-b-[#EDF2F7]  items-center">
                    <div className="flex items-center gap-2">
                      <FaInstagram className="text-pink-500" /> Instagram
                    </div>
                    <div>₦299</div>
                    <div>2025-04-20</div>
                  </div>

                  <div className="grid grid-cols-3 text-sm py-3 px-2 border-b border-b-[#EDF2F7] items-center">
                    <div className="flex items-center gap-2">
                      <FaFacebook className="text-blue-600" /> Facebook
                    </div>
                    <div>₦150</div>
                    <div>2025-04-18</div>
                  </div>

                  <div className="grid grid-cols-3 text-sm py-3 px-2 border-b border-b-[#EDF2F7] items-center">
                    <div className="flex items-center gap-2">
                      <FaTwitter className="text-blue-400" /> Twitter
                    </div>
                    <div>₦120</div>
                    <div>2025-04-16</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserDashBoard;
