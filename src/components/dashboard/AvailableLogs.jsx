import React, { useState, useRef, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { BsThreeDots } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import Edit from "../../assets/images/edit.png";
import Trash from "../../assets/images/trash.png";
import uploadIcon from "../../assets/uploadIcon.png";

import FacebookAdmin from "../../assets/images/admin-facebook.png";
import InstagramAdmin from "../../assets/images/admin-instagram.png";
import TikTokAdmin from "../../assets/images/admin-tiktok.png";
import SnapchatAdmin from "../../assets/images/admin-snapchat.png";
import TwitterAdmin from "../../assets/images/admin-twitter.png";
import PIA_VPNAdmin from "../../assets/images/admin-pia.png";
import Google_VoiceAdmin from "../../assets/images/admin-google-voice.png";
import BackgroundImage from "../../assets/images/background-image.png";
import Navbar from "../Header/Navbar";
import { toast } from "sonner";
import useGetCategory from "@/hooks/api/queries/super-admin/category/GetCategory";
import {
  useAddCategory,
  useEditCategory,
} from "@/hooks/api/mutation/superAdmin/category/AddCategory";
import Loader from "../Loader";

const logCategories = [
  { name: "Facebook", image: FacebookAdmin, count: 2134 },
  { name: "Instagram", image: InstagramAdmin, count: 2134 },
  { name: "TikTok", image: TikTokAdmin, count: 2134 },
  { name: "Snapchat", image: SnapchatAdmin, count: 2134 },
  { name: "Twitter", image: TwitterAdmin, count: 2134 },
  { name: "PIA VPN", image: PIA_VPNAdmin, count: 2134 },
  { name: "Google Voice", image: Google_VoiceAdmin, count: 2134 },
];

const AvailableLogs = (dashBoardUser) => {
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState(null);
  const [logToDelete, setLogToDelete] = useState(null);
  const [showAddLog, setShowAddLog] = useState(false);
  const [subCategoryInput, setSubCategoryInput] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const menuRef = useRef();

  const [categoryName, setCategoryName] = useState("");
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [currentEditCategory, setCurrentEditCategory] = useState(null);

  const { data, refetch, isPending: getCategoryLoad } = useGetCategory();
  const { mutate, isPending: isLoading } = useAddCategory();
  const { mutate: editCategory, isPending: isUpdating } = useEditCategory();

  // console.log(data, "logs");

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAddSubCategory = () => {
    if (subCategoryInput.trim() !== "") {
      setSubCategories((prev) => [...prev, subCategoryInput.trim()]);
      setSubCategoryInput("");
    }
  };

  const handleSubmit = () => {
    if (!currentEditCategory) {
      if (!categoryName.trim() || !file) {
        toast.warning("Please provide category name and upload a logo.");
        return;
      }
    }

    const formData = new FormData();
    formData.append("categoryName", categoryName);
    formData.append("subCategories", subCategories.join(", "));
    // formData.append("file", file);
    if (file) formData.append("file", file);

    const onSuccess = () => {
      toast.success(`Category ${currentEditCategory ? "updated" : "added"}!`);
      setCategoryName("");
      setSubCategories([]);
      setFile(null);
      setImagePreview(null);
      setShowAddLog(false);
      setCurrentEditCategory(null);
      refetch();
    };

    const onError = () => toast.error("Something went wrong.");
    if (currentEditCategory) {
      editCategory(
        { formData, id: currentEditCategory._id },
        { onSuccess, onError }
      );
    } else {
      mutate({ formData }, { onSuccess, onError });
    }
  };

  const getSubCategoryCount = (subs) => {
    if (subs.length === 1 && subs[0].includes(",")) {
      return subs[0].split(",").length;
    }
    return subs.length;
  };

  return (
    <div className="relative font-custom">
      {/* Main Content */}
      <div
        className={`${
          showAddLog || logToDelete
            ? "blur-sm pointer-events-none select-none"
            : ""
        }`}
      >
        {/* Header */}
        <Navbar user={dashBoardUser} />

        {/* Logs */}
        <div className="bg-white py-6 mb-8">
          <h2 className="text-[20px] font-bold mb-6">All Available Logs</h2>

          {getCategoryLoad ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data?.data?.result?.map((log, index) => (
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
                      <button
                        onClick={() => {
                          setShowAddLog(true);
                          setCategoryName(log.name);
                          setSubCategories(
                            log.subCategories.length === 1 &&
                              log.subCategories[0].includes(",")
                              ? log.subCategories[0]
                                  .split(",")
                                  .map((s) => s.trim())
                              : log.subCategories
                          );
                          setImagePreview(log.image);
                          setCurrentEditCategory(log);
                        }}
                        className="w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
                      >
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
                  <div className="flex gap-1 items-center mb-6">
                    <img
                      src={log.image}
                      alt={log.name}
                      className="w-[84px] h-[56px] object-contain"
                    />
                    <p className="text-xl text-[#351A60]">{log.name}</p>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <p className="text-sm text-gray-500">Total Logs:</p>
                      <p className="text-xl font-bold text-[#351A60]">
                        {getSubCategoryCount(log.subCategories)}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        navigate(
                          `/admin/logs/${log.name
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`,
                          {
                            state: { log },
                          }
                        )
                      }
                      className="hover:bg-gradient-to-r from-[#622BB9] to-[#351A60] hover:text-white text-black shadow-md px-4 py-2 rounded-lg hover:opacity-90 transition-all text-sm"
                    >
                      View Logs
                    </button>
                  </div>
                </div>
              ))}

              {/* Add New Category */}
              <div
                onClick={() => {
                  setShowAddLog(true);
                  setCurrentEditCategory(null);
                }}
                className="bg-white border shadow-md rounded-xl p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="text-[#351A60] text-3xl mb-2 bg-[#F2F2F7] w-[60px] h-[60px] rounded-full flex items-center justify-center">
                  +
                </div>
                <p className="text-[#351A60] font-semibold">Add New Category</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Delete Modal */}
      {logToDelete && (
        <Dialog
          as={Fragment}
          open={!!logToDelete}
          onClose={() => setLogToDelete(null)}
        >
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <Dialog.Panel className="bg-white rounded-lg p-6 w-full max-w-sm shadow-lg z-50">
              <Dialog.Title className="text-lg font-bold text-gray-800">
                Delete "{logToDelete.name}"?
              </Dialog.Title>
              <Dialog.Description className="text-sm text-gray-600 mt-2">
                This action cannot be undone. Are you sure you want to remove
                this log?
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

      {/* Slide-In Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:max-w-[720px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          showAddLog ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-4 sm:px-6 py-4 sm:pb-[61px]">
          <h3 className="text-sm text-gray-500">
            Go Back /{" "}
            <span className="text-[#351A60] font-semibold">Add New Log</span>
          </h3>
          <button
            onClick={() => setShowAddLog(false)}
            className="text-gray-600 hover:text-gray-900 text-xl sm:text-2xl font-bold"
          >
            &times;{" "}
            <span className="text-sm sm:text-base font-semibold">Close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-6 overflow-y-auto max-h-[calc(100vh-4rem)]">
          {/* Title */}
          <div className="pb-15">
            <h2 className="text-lg sm:text-xl font-semibold text-[#351A60] mb-1">
              Add New Category
            </h2>
            <p className="text-sm text-gray-500">
              Fill in the details below to add a new category.
            </p>
          </div>

          {/* Upload Section */}
          <div className="border-dashed border-2 border-[#949494] bg-[#F2F2F7] p-4 sm:p-6 rounded-lg text-center">
            <label
              htmlFor="fileUpload"
              className="cursor-pointer block text-[#515151] hover:text-[#351A60]"
            >
              <div className="flex flex-col items-center justify-center gap-4">
                {imagePreview ? (
                  <>
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                    />
                    <div className="flex items-center justify-center gap-3">
                      <button
                        title="Edit"
                        type="button"
                        onClick={() =>
                          document.getElementById("fileUpload")?.click()
                        }
                      >
                        <img src={Edit} alt="Edit" />
                      </button>
                      <div className="w-px h-6 bg-[#949494]" />
                      <button
                        title="Delete"
                        type="button"
                        onClick={() => {
                          setFile(null);
                          setImagePreview(null);
                        }}
                      >
                        <img src={Trash} alt="Delete" />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src={uploadIcon}
                      alt="Default"
                      className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                    />
                    <p className="text-[#515151]">Click to upload logo</p>
                  </>
                )}
              </div>
              <input
                id="fileUpload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const selectedFile = e.target.files?.[0];
                  if (selectedFile) {
                    setFile(selectedFile);
                    setImagePreview(URL.createObjectURL(selectedFile));
                  }
                }}
              />
            </label>
          </div>

          {/* Category Name */}
          <div>
            <label className="block text-sm font-semibold text-[#1B1B1B] mt-8 mb-2">
              Name of Category
            </label>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="Enter the category name here"
              className="w-full border border-gray-300 rounded-md px-4 py-5 focus:outline-none focus:ring-[#622BB9] focus:border-[#622BB9]"
            />
          </div>

          {/* Sub-Categories Input */}
          <div>
            <label className="block text-sm font-semibold text-[#1B1B1B] mt-8 mb-2">
              Sub-Categories
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={subCategoryInput}
                onChange={(e) => setSubCategoryInput(e.target.value)}
                placeholder="Enter sub-categories here individually"
                className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-[#622BB9] focus:border-[#622BB9]"
              />
              <button
                onClick={handleAddSubCategory}
                className="px-10 py-5 border-1 border-[#7B36E7] text-[#7B36E7] font-bold text-sm rounded-md hover:bg-[#4c1f8a] hover:text-white hover:border-1 transition-all"
              >
                Add Sub
              </button>
            </div>
          </div>

          {/* Subcategories Preview (2 per row on all sizes) */}
          <div className="flex flex-wrap gap-3 mt-4">
            {subCategories.map((sub, index) => (
              <div
                key={index}
                className="bg-[#E5E5EA] px-4 py-2 rounded-md text-sm w-[48%] flex items-center justify-between"
              >
                <span>{sub}</span>
                <button
                  onClick={() =>
                    setSubCategories((prev) =>
                      prev.filter((_, i) => i !== index)
                    )
                  }
                  className="ml-2 text-red-500 hover:text-red-700"
                  title="Remove"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="pt-4 flex justify-end mt-[117px]">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full sm:w- px-6 py-3 rounded-md bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white font-medium"
            >
              {/* {isLoading ? "Submitting..." : "Add Category"} */}
              {isLoading || isUpdating
                ? "Submitting..."
                : currentEditCategory
                ? "Update Category"
                : "Add Category"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableLogs;
