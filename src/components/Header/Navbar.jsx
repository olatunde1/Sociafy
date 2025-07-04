import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Castine from "../../assets/images/castine.png";

const Navbar = ({ dashBoardUser }) => {
  const user = {
    name: "Castine",
    email: "castiin@sociafy.com",
    balance: "NGN 179,000",
    add: "Add New Log",
    image: Castine,
  };
  
  return (
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

      {/* Wallet Balance Summary or CTA */}
      <div className="px-4 py-2">
        <span className="rounded-lg px-8 py-4 font-medium bg-gradient-to-r from-[#622BB9] to-[#351A60] cursor-pointer text-white">
          {user.add}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
