import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { X } from "lucide-react";
import upload from '../../assets/images/upload.png';

const AddNewLog = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(45);
  const [category, setCategory] = useState("");

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.name.endsWith(".xlsx")) {
      setFile(selected);
      setUploading(true);
    } else {
      alert("Only .xlsx files are allowed");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end items-start sm:items-stretch">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => navigate(-1)}
      ></div>

      {/* Slide-over Panel */}
      <div
        className="relative h-full w-full sm:max-w-[720px] bg-white shadow-lg overflow-y-auto transition-all duration-300 ease-in-out transform translate-x-0"
      >
        <div className="px-4 py-6 sm:px-8 md:px-12 font-custom min-h-screen">
          {/* Header */}
          <div className="flex items-center justify-between mb-[61px]">
            <p
              onClick={() => navigate(-1)}
              className="text-sm text-gray-600 cursor-pointer"
            >
              Go Back /{" "}
              <span className="text-[#351A60] font-semibold">
                Add New Log
              </span>
            </p>
            <Button variant="ghost" onClick={() => navigate(-1)}>
              Close
            </Button>
          </div>

          <h1 className="text-2xl font-bold mb-2">Add New Log</h1>
          <p className="text-gray-500 mb-6">
            Upload the file below to add new logs.
          </p>
          <h1 className="text-xl font-semibold mb-4">Upload File</h1>
          {/* Upload Section */}
            <div className="border-dashed border-2 border-[#949494] bg-[#F2F2F7] rounded-lg mb-3 text-center">
            <label
                htmlFor="fileUpload"
                className="cursor-pointer flex items-center justify-center gap-x-4 py-10 text-gray-500 hover:text-[#351A60]"
            >
                <img src={upload} alt="upload a file" className="w-10 h-10 object-contain" />

                <div className="text-left">
                <div className="text-sm text-[#515151]">
                    Drag and drop here or{" "}
                    <span className="text-[#7B36E7] font-semibold underline">Choose a file</span>{" "}
                    to upload
                </div>
                </div>

                <input
                id="fileUpload"
                type="file"
                accept=".xlsx"
                onChange={handleFileChange}
                className="hidden"
                />
            </label>
            </div>


          {/* Category Select */}
          <div className="mb-6">
             <div className="text-[14px] mb-8 text-gray-400">
                *Only “.xlsx” file types are accepted
              </div>
            <label className="block mb-4 text-sm font-medium text-gray-700">
              Category
            </label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full sm:w-[640px] py-[22.5px] bg-white">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usa-standard">USA 🇺🇸 Standard FB</SelectItem>
                <SelectItem value="uk-standard">UK 🇬🇧 Standard FB</SelectItem>
                <SelectItem value="nigeria-premium">Nigeria 🇳🇬 Premium</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* File Upload Preview */}
          {file && (
            <div className="bg-[#F2EBFD] p-4 rounded-md shadow-sm mb-15 border ">
                <div className="flex justify-between items-center">
                <div>
                    <p className="font-medium text-sm">{file.name}</p>
                    <p className="text-xs text-gray-500">1.2MB • 3 seconds left</p>
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                    setFile(null);
                    setProgress(0);
                    }}
                >
                    <X className="w-4 h-4" />
                </Button>
                </div>

                {/* Custom Progress Bar with Text */}
                <div className="relative mt-3 h-3 rounded-full bg-gray-300 overflow-hidden">
                <div
                    className="absolute top-0 left-0 h-full bg-[#622BB9] transition-all duration-500"
                    style={{ width: `${progress}%` }}
                />
                </div>
                <p className="text-right text-xs mt-1 text-[#622BB9] font-medium">
                {progress}%
                </p>
            </div>
            )}

          <Button
            className="bg-[#351A60] text-white hover:bg-[#622BB9] w-full sm:w-[610px] py-[24px]"
            disabled={!file || !category}
            onClick={() => alert("Log Uploaded")}
          >
            Upload Log
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddNewLog;
