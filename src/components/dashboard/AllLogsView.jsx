import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AllLogsView = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const title = state?.title || "Log";
  const logs = state?.logs || [];

  return (
    <div className="p-6 sm:px-8 md:px-16 lg:px-32 bg-white min-h-screen font-custom">
      <div
        className="text-sm text-gray-600 mb-2 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        Go Back /{" "}
        <span className="text-[#351A60] font-semibold">Facebook Logs</span>
      </div>
      <h1 className="text-2xl font-bold mb-6">{title}</h1>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-gray-500 font-semibold text-sm border-b py-2 px-4 bg-[#EDF2F7]">
        <p>Product</p>
        <p>Age</p>
        <p className="hidden sm:block">Friends</p>
        <p className="hidden sm:block">Amount</p>
        <p className="text-right sm:text-left">Action</p>
      </div>

      {logs.map((log, i) => (
        <div
          key={i}
          className="grid grid-cols-2 sm:grid-cols-5 gap-4 items-center text-sm py-3 px-4 border-b"
        >
          <p>{log.title}</p>
          <p>{log.age}</p>
          <p className="hidden sm:block">{log.friends}</p>
          <p className="hidden sm:block">{log.amount}</p>
          <div className="text-right sm:text-left">
            <Button
              variant="outline"
              className="text-sm px-4 py-1 font-medium text-[#351A60]"
              onClick={() => alert(`${log.age} | ${log.friends}`)}
            >
              View Info
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllLogsView;
