import React, { useState, useRef, useEffect, Fragment } from "react";
import { Dialog } from "@headlessui/react";
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

  const [activeMenu, setActiveMenu] = useState(null);
  const [logToDelete, setLogToDelete] = useState(null);
  const menuRef = useRef();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="font-custom">
      {/* Header Section */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
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

        <button className="rounded-lg px-6 py-3 bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white font-medium hover:opacity-90 transition-all">
          {user.add}
        </button>
      </div>

      {/* Logs Grid */}
      <div className="bg-white py-6 mb-8">
        <h2 className="text-[20px] font-bold mb-6">All Available Logs</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {logCategories.map((log, index) => (
            <div
              key={index}
              className="bg-white border shadow-md rounded-xl p-5 relative flex flex-col justify-between hover:shadow-lg transition-all"
              style={{ backgroundImage: `url(${BackgroundImage})` }}
            >
              {/* Three Dots Dropdown Trigger */}
              <div
                className="absolute top-4 right-4 text-gray-600 cursor-pointer"
                onClick={() => setActiveMenu(activeMenu === index ? null : index)}
              >
                <BsThreeDots size={20} />
              </div>

              {/* Dropdown Menu */}
              {activeMenu === index && (
                <div
                  ref={menuRef}
                  className="absolute top-10 right-4 bg-white border shadow-lg rounded-md w-32 z-10"
                >
                  <button className="w-full px-4 py-2 text-sm text-left hover:bg-gray-100">
                    Edit
                  </button>
                  <button
                    className="w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-red-50"
                    onClick={() => setLogToDelete(log)}
                  >
                    Remove
                  </button>
                </div>
              )}

              {/* Log Image */}
              <img
                src={log.image}
                alt={log.name}
                className="w-[184px] h-[56px] object-contain mb-6"
              />

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

          {/* Add New Category */}
          <div className="bg-white border shadow-md rounded-xl p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all cursor-pointer">
            <div className="text-[#351A60] text-3xl mb-2 bg-[#F2F2F7] w-[60px] h-[60px] rounded-full flex items-center justify-center">+</div>
            <p className="text-[#351A60] font-semibold">Add New Category</p>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {logToDelete && (
        <Dialog as={Fragment} open={!!logToDelete} onClose={() => setLogToDelete(null)}>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <Dialog.Panel className="bg-white rounded-lg p-6 w-full max-w-sm shadow-lg">
              <Dialog.Title className="text-lg font-bold text-gray-800">
                Delete "{logToDelete.name}"?
              </Dialog.Title>
              <Dialog.Description className="text-sm text-gray-600 mt-2">
                This action cannot be undone. Are you sure you want to remove this log?
              </Dialog.Description>

              <div className="mt-4 flex justify-end gap-2">
                <button
                  onClick={() => setLogToDelete(null)}
                  className="px-4 py-2 text-sm bg-gray-100 rounded hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    // TODO: handle actual delete logic
                    console.log("Deleting", logToDelete);
                    setLogToDelete(null);
                  }}
                  className="px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default AvailableLogs;
