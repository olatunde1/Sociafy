import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "../Header/Navbar";
import LogDetails from "../pages/LogDetails";

const AllLogsView = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const title = state?.title || "Log";
  const logs = state?.logs || [];

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 bg-white min-h-screen font-custom">
      {/* Header with responsive padding */}
      <Navbar />
      
      {/* Breadcrumb navigation */}
      <div className="flex items-center mb-4">
        <button 
          onClick={() => navigate(-1)}
          className="text-sm text-gray-600 hover:text-[#351A60] flex items-center"
        >
          <span className="mr-1">←</span> Go Back
        </button>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-sm text-[#351A60] font-semibold">
          Facebook Logs
        </span>
      </div>

      {/* Page title */}
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{title}</h1>

      {/* Table header - responsive columns */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-4 text-gray-500 font-semibold text-xs sm:text-sm border-b py-3 px-2 sm:px-4 bg-[#EDF2F7]">
        <p className="truncate">Product</p>
        <p className="text-center sm:text-left">Age</p>
        <p className="hidden sm:block">Friends</p>
        <p className="hidden sm:block">Amount</p>
        <p className="text-right sm:text-left">Action</p>
      </div>

      {/* Log items */}
      {logs.map((log, i) => (
        <div
          key={i}
          className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-4 items-center text-xs sm:text-sm py-3 px-2 sm:px-4 border-b hover:bg-gray-50 transition-colors"
        >
          <p className="truncate font-medium">{log.title}</p>
          <p className="text-center sm:text-left">{log.age}</p>
          <p className="hidden sm:block">{log.friends}</p>
          <p className="hidden sm:block font-medium">{log.amount}</p>
          <div className="flex justify-end sm:justify-start">
            <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm px-3 py-1 font-medium text-[#351A60] border-[#351A60] hover:bg-[#351A60] hover:text-white"
                onClick={() => navigate("/admin/log-details", { state: { log } })}
              >
                View Info
              </Button>

          </div>
        </div>
      ))}

      {/* Empty state */}
      {logs.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No logs available
        </div>
      )}
    </div>
  );
};

export default AllLogsView;