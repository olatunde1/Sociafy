import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import Castine from "../../assets/images/castine.png";
import FacebookAdmin from "../../assets/images/admin-facebook.png";
import InstagramAdmin from "../../assets/images/admin-instagram.png";
import TikTokAdmin from "../../assets/images/admin-tiktok.png";
import SnapchatAdmin from "../../assets/images/admin-snapchat.png";
import TwitterAdmin from "../../assets/images/admin-twitter.png";
import PIA_VPNAdmin from "../../assets/images/admin-pia.png";
import Google_VoiceAdmin from "../../assets/images/admin-google-voice.png";
import BackgroundImage from "../../assets/images/background-image.png";

const logCategories = [
  { name: "Facebook", image: FacebookAdmin, count: 2134 },
  { name: "Instagram", image: InstagramAdmin, count: 2134 },
  { name: "TikTok", image: TikTokAdmin, count: 2134 },
  { name: "Snapchat", image: SnapchatAdmin, count: 2134 },
  { name: "Twitter", image: TwitterAdmin, count: 2134 },
  { name: "PIA VPN", image: PIA_VPNAdmin, count: 2134 },
  { name: "Google Voice", image: Google_VoiceAdmin, count: 2134 },
];

const AvailableLogs = () => {
  const user = {
    name: "Castine",
    email: "castiin@sociafy.com",
    balance: "NGN 179,000",
    add: "Add New Log",
    image: Castine,
  };

  return (
    <div className="font-custom">
      {/* ───────────── User Info & Balance ───────────── */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
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
        <div>
          <button className="rounded-lg px-6 py-3 bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white font-medium hover:opacity-90 transition-all">
            {user.add}
          </button>
        </div>
      </div>

      <div className="bg-white py-6 mb-8">
        <h2 className="text-[20px] font-bold mb-6">All Available Logs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {logCategories.map((log, index) => (
          <div
          style={{ backgroundImage: `url(${BackgroundImage})` }}
            key={index}
            className="bg-white border shadow-md rounded-xl p-5 flex flex-col justify-between relative hover:shadow-lg transition-all"
          >
            {/* 3 dots at top right */}
            <div className="absolute top-4 right-4 text-gray-500 cursor-pointer">
              <BsThreeDots size={20} />
            </div>

            <img
              src={log.image}
              alt={log.name}
              className="w-[184px] h-[56px] object-contain mb-6"
            />

            {/* <h3 className="text-lg font-semibold text-center mb-2">{log.name}</h3> */}

            <div className="flex items-center justify-between mt-auto">
              <div>
                <p className="text-sm text-gray-500">Total Logs:</p>
                <p className="text-xl font-bold text-[#351A60]">{log.count}</p>
              </div>
              <button className="hover:bg-gradient-to-r from-[#622BB9] to-[#351A60] hover:text-white text-black shadow-md px-4 py-2 rounded-lg hover:opacity-90 transition-all text-sm">
                View Logs
              </button>
            </div>
          </div>
        ))}

        {/* Add New Category Card */}
        <div className="bg-white border shadow-md rounded-xl p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all cursor-pointer">
          <div className="text-[#351A60] text-3xl mb-2 bg-[#F2F2F7] w-[60px] h-[60px] rounded-full flex items-center justify-center">+</div>
          <p className="text-[#351A60] font-semibold">Add New Category</p>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default AvailableLogs;
