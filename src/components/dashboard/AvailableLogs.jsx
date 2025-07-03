import React, { useState, useRef, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
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

  
const navigate = useNavigate();

  const user = {
    name: "Castine",
    email: "castiin@sociafy.com",
    balance: "NGN 179,000",
    add: "Add New Log",
    image: Castine,
  };

  const [activeMenu, setActiveMenu] = useState(null);
  const [logToDelete, setLogToDelete] = useState(null);
  const [showAddLog, setShowAddLog] = useState(false);
  const menuRef = useRef();

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
    <div className="relative">
      {/* Main Content with blur when overlay is open */}
      <div
        className={`font-custom transition-all duration-300 ${
          showAddLog || logToDelete ? "blur-sm pointer-events-none select-none" : ""
        }`}
      >
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

          <button
            onClick={() => setShowAddLog(true)}
            className="rounded-lg px-6 py-3 bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white font-medium hover:opacity-90 transition-all"
          >
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
                <div
                  className="absolute top-4 right-4 text-gray-600 cursor-pointer"
                  onClick={() =>
                    setActiveMenu(activeMenu === index ? null : index)
                  }
                >
                  <BsThreeDots size={20} />
                </div>

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

                <img
                  src={log.image}
                  alt={log.name}
                  className="w-[184px] h-[56px] object-contain mb-6"
                />

                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <p className="text-sm text-gray-500">Total Logs:</p>
                    <p className="text-xl font-bold text-[#351A60]">
                      {log.count}
                    </p>
                  </div>
                  <button
                    onClick={() => navigate(`/logs/${log.name.toLowerCase().replace(/\s+/g, '-')}`, {
                      state: { log },
                    })}
                    className="hover:bg-gradient-to-r from-[#622BB9] to-[#351A60] hover:text-white text-black shadow-md px-4 py-2 rounded-lg hover:opacity-90 transition-all text-sm"
                  >
                    View Logs
                  </button>
                </div>
              </div>
            ))}

            {/* Add New Category */}
            <div
              onClick={() => setShowAddLog(true)}
              className="bg-white border shadow-md rounded-xl p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="text-[#351A60] text-3xl mb-2 bg-[#F2F2F7] w-[60px] h-[60px] rounded-full flex items-center justify-center">
                +
              </div>
              <p className="text-[#351A60] font-semibold">Add New Category</p>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {logToDelete && (
        <Dialog as={Fragment} open={!!logToDelete} onClose={() => setLogToDelete(null)}>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <Dialog.Panel className="bg-white rounded-lg p-6 w-full max-w-sm shadow-lg z-50">
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

      {/* Slide-in Add New Log Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          showAddLog ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h3 className="text-sm text-gray-500">
            Go Back / <span className="text-[#351A60] font-semibold">Add New Log</span>
          </h3>
          <button
            onClick={() => setShowAddLog(false)}
            className="text-gray-600 hover:text-gray-900 text-2xl font-bold"
            aria-label="Close"
          >
            &times; <span className="text-[16px] font-semibold">Close</span>
          </button>
        </div>
      <div className="p-6 space-y-6">
  <div>
    <h2 className="text-xl font-semibold text-[#351A60] mb-1">Add New Category</h2>
    <p className="text-sm text-gray-500">Fill in the details below to add a new category.</p>
  </div>

  {/* Upload Section */}
  <div className="border-dashed border-2 border-[#949494] bg-white p-6 rounded-lg text-center">
    <label
      htmlFor="fileUpload"
      className="cursor-pointer block text-[#515151] hover:text-[#351A60]"
    >
     <div className="flex flex-col items-center justify-center gap-4">
  {/* Logo */}
  <img
    src="/logo.png" // Replace with your local logo path or import if needed
    alt="App Logo"
    className="w-16 h-16 object-contain"
  />

  {/* Icons with Stroke */}
  <div className="flex items-center justify-center gap-6">
    {/* Edit Icon */}
    <button
      type="button"
      className="text-[#351A60] hover:text-[#622BB9] transition"
      title="Edit"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536M9 11l6 6M3 21h6l12-12a2.828 2.828 0 00-4-4L5 17v4z" />
      </svg>
    </button>

    {/* Divider */}
    <div className="w-px h-6 bg-gray-300" />

    {/* Delete Icon */}
    <button
      type="button"
      className="text-red-600 hover:text-red-800 transition"
      title="Delete"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</div>

      <input
        id="fileUpload"
        type="file"
        accept=".xlsx"
        className="hidden"
        onChange={(e) => console.log("Selected file:", e.target.files[0])}
      />
    </label>
  </div>

  {/* Name of Category */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Name of Category</label>
    <input
      type="text"
      placeholder="Enter the category name here"
      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-[#622BB9] focus:border-[#622BB9]"
    />
  </div>

  {/* Sub-Categories */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Sub-Categories</label>
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Enter sub-category"
        className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-[#622BB9] focus:border-[#622BB9]"
      />
      <button className="px-4 py-2 border-2 border-[#7B36E7] text-[#7B36E7] font-bold text-sm rounded-md hover:bg-[#4c1f8a] hover:text-white transition-all">
        Add Sub
      </button>
    </div>
  </div>

  {/* Preview Sub-Categories */}
  <div className="space-y-2">
    <div className="bg-[#F5F5F5] px-4 py-2 rounded-md text-sm">🇺🇸 USA Standard FB</div>
    <div className="bg-[#F5F5F5] px-4 py-2 rounded-md text-sm">🇩🇪 Germany Standard FB</div>
    <div className="bg-[#F5F5F5] px-4 py-2 rounded-md text-sm">🇮🇳 India Standard FB</div>
  </div>

  {/* Submit Button */}
  <div className="pt-4 flex justify-end">
    <button
      type="button"
      className="px-6 py-3 rounded-md bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white font-medium"
    >
      Add Category
    </button>
  </div>
</div>

      </div>
    </div>
  );
};

export default AvailableLogs;
