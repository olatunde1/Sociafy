import React from "react";
import {
  FaUserCircle,
  FaBox,
} from "react-icons/fa";
import Castine from "../../assets/images/castine.png";
import WalletBalance from "../../assets/images/wallet-balance.png";
import TotalOrder from "../../assets/images/total-order.png";
import TotalDeposit from "../../assets/images/total-deposit.png";
import SociafyCornerImage from "../../assets/images/socccialffy-corner.png";

const AdminDashBoard = () => {
  const user = {
    name: "Castine",
    email: "castiin@sociafy.com",
    balance: "NGN 179,000",
    add: "Add New Log",
    image: Castine,
  };

  const menuItems = [
    { name: "Overview", path: "/admin-dashboard" },
    {
      name: "Social Logs",
      iconSrc: FaBox,
      submenu: [
        { name: "All Logs", path: "/admin/logs" },
        { name: "Add New Logs", path: "/admin/add-logs" },
      ],
    },
    { name: "Orders", path: "/admin/orders" },
    { name: "User Management", path: "/admin/users" },
    { name: "Wallet Management", path: "/admin/wallet" },
    { name: "Report & Analytics", path: "/admin/reports" },
    { name: "Log Out", path: "/" },
  ];

  return (
    <div className=" font-custom">
      {/* ───────────── User Info & Balance ───────────── */}
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
        <div className="px-4 py-2">
          {/* <span className="text-gray-600 font-medium mr-2">Balance:</span> */}
          <span className="rounded-lg px-8 py-4 font-medium bg-gradient-to-r from-[#622BB9] to-[#351A60] cursor-pointer text-white">
            {user.add}
          </span>
        </div>
      </div>

      {/* ───────────── Cards Section ───────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 mt-10">
        {/* Card 1 - Wallet Balance */}
        <div className="bg-white rounded-2xl shadow-md border flex flex-col w-full">
          {/* Icon and Title */}
          <div className="flex flex-col mb-6">
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
            <p className="text-2xl font-bold">₦ 179,000</p>
            <button className="bg-gradient-to-r from-[#622BB9] to-[#351A60] cursor-pointer text-white px-4 py-2 rounded-lg whitespace-nowrap">
              Fund Wallet
            </button>
          </div>
        </div>

        {/* Card 2 - Total Orders */}
        <div className="relative bg-white rounded-2xl shadow-md border flex flex-col w-full overflow-hidden">
          {/* Icon and Title */}
          <div className="flex flex-col mb-6">
            <div className="p-4 rounded-full text-white mb-2">
              <img
                src={TotalOrder}
                alt="Total Orders Icon"
                className="w-10 h-10"
              />
            </div>
            <h4 className="text-[#515151] font-medium text-[16px] p-4">
              Total Orders
            </h4>
          </div>

          {/* Amount Section */}
          <div className="flex items-center justify-between w-full p-[22px] rounded-bl-2xl rounded-br-2xl text-white">
            <p className="text-2xl font-bold text-black">38</p>
          </div>

          {/* Bottom Right Corner Image */}
          <img
            src={SociafyCornerImage}
            alt="Corner Logo"
            className="absolute bottom-0 right-0 w-[132.54px] h-[119px] opacity-70"
          />
        </div>

        {/* Card 3 - Total Deposit */}
        <div className="relative bg-white rounded-2xl border shadow-md flex flex-col w-full overflow-hidden">
          {/* Icon and Title */}
          <div className="flex flex-col mb-6">
            <div className="p-4 rounded-full text-white mb-2">
              <img
                src={TotalDeposit}
                alt="Total Deposits Icon"
                className="w-10 h-10"
              />
            </div>
            <h4 className="text-[#515151] font-medium text-[16px] p-4">
              Total Deposits
            </h4>
          </div>

          {/* Amount Section */}
          <div className="flex items-center justify-between w-full p-[22px] rounded-bl-2xl rounded-br-2xl text-white">
            <p className="text-2xl font-bold text-black">₦ 312,000</p>
          </div>

          {/* Bottom Right Corner Image */}
          <img
            src={SociafyCornerImage}
            alt="Corner Logo"
            className="absolute bottom-0 right-0 w-[132.54px] h-[119px] opacity-70"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
