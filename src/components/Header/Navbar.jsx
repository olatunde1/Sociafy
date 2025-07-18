import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Castine from "../../assets/images/castine.png";
import { useNavigate } from "react-router-dom";

const Navbar = ({ dashBoardUser }) => {
    const navigate = useNavigate();
  const user = {
    name: "Castine",
    email: "castiin@sociafy.com",
    balance: "NGN 179,000",
    add: "Add New Log",
    image: Castine,
  };
  
  return (
    <div className="flex items-center justify-between gap-4 mb-8">
      {/* Desktop User Info (Left Side) */}
      <div className="hidden md:flex items-center gap-4">
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

      {/* Mobile User Info (Top Right) with Email */}
      <div className="md:hidden ml-auto">
        <div className="flex items-center gap-2">
          {user.image ? (
            <img
              src={user.image}
              alt="User"
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <FaUserCircle className="text-gray-400 w-10 h-10" />
          )}
          <div className="text-right">
            <p className="font-medium text-sm">{user.name}</p>
            <p className="text-xs text-gray-500 truncate max-w-[120px]">
              {user.email}
            </p>
          </div>
        </div>
      </div>

      {/* Wallet Balance Summary or CTA - Hidden on mobile */}
      {/* Wallet Balance Summary or CTA - Hidden on mobile */}
      <div className="hidden md:block px-4 py-2">
        <span
          onClick={() => navigate("/admin/add-logs")}
          className="rounded-lg px-8 py-4 font-medium bg-gradient-to-r from-[#622BB9] to-[#351A60] cursor-pointer text-white"
        >
          {user.add}
        </span>
      </div>
    </div>
  );
};

export default Navbar;