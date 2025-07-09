import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Navbar from "../Header/Navbar";
import getAdminLogs from "@/hooks/api/queries/super-admin/adminLogs/getAdminLogs";
import Loader from "../Loader";

const LogDetailsPage = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const { category } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const { data, isPending } = getAdminLogs({ category });
  const logs = data?.data?.result || [];

  const readableCategory = category.replace(/-/g, " ");

  // Group logs by subcategory
  const groupedLogs = logs.reduce((acc, log) => {
    const key = log.subcategory || "others";
    if (!acc[key]) acc[key] = [];
    acc[key].push(log);
    return acc;
  }, {});

  console.log(groupedLogs, "groupedLogs");

  return (
    <div className="px-4 sm:px-6 lg:px-8 xl:px-12 font-custom">
      {/* Header */}
      <Navbar />

      {/* Breadcrumb */}
      <div className="flex items-center mb-4 sm:mb-6">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-gray-500 hover:text-[#351A60] flex items-center"
        >
          <span className="mr-1">←</span> Go Back
        </button>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-sm text-[#351A60] font-semibold capitalize">
          {readableCategory} Logs
        </span>
      </div>

      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 capitalize">
        {state?.log?.name || readableCategory}
      </h1>

      {/* Loop over each subcategory */}
      {isPending ? (
        <Loader />
      ) : logs.length === 0 ? (
        <div className="text-center text-gray-500 py-12">No data available</div>
      ) : (
        Object.entries(groupedLogs).map(([subcat, products], idx) => (
          <div key={idx} className="mb-8 sm:mb-10">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-[#2B1351] text-white p-3 sm:p-4 rounded-t-md">
              <h2 className="font-semibold text-base sm:text-lg mb-2 sm:mb-0 capitalize">
                {readableCategory} {subcat} ({products.length})
              </h2>
              <Button
                variant="ghost"
                className="text-[#7B36E7] bg-white px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base"
                onClick={() =>
                  navigate("/logs/all", {
                    state: {
                      title: `${readableCategory} ${subcat}`,
                      logs: products,
                    },
                  })
                }
              >
                View More
              </Button>
            </div>

            {/* Table Headers */}
            <div className="hidden sm:grid sm:grid-cols-5 gap-4 bg-[#EDF2F7] font-semibold text-sm text-gray-500 py-3 px-4 border-b">
              <p>Product</p>
              <p>Price</p>
              <p>2 FA</p>
              <p>UserName</p>
              <p>Action</p>
            </div>

            {/* Product Rows */}
            {products.map((product, i) => (
              <div
                key={product._id || i}
                className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-4 items-center text-sm py-3 px-2 sm:px-4 border-b"
              >
                <p className="font-medium truncate">{product.name}</p>
                <p className="font-medium">₦{product.price.toLocaleString()}</p>
                <p className="font-medium truncate">{product.twoFa}</p>
                <p className="font-medium truncate">{product.username}</p>
                <div className="flex justify-end sm:justify-start">
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="text-lg font-extrabold text-black hover:text-black focus:outline-none">
                        ...
                      </button>
                    </PopoverTrigger>
                    <PopoverContent
                      side="bottom"
                      align="end"
                      className="w-[150px] p-2 bg-white shadow-lg rounded-md z-50"
                    >
                      <div className="flex flex-col gap-1 text-sm">
                        <button
                          onClick={() => console.log("Modify", product)}
                          className="px-3 py-2 text-left hover:bg-gray-100 rounded"
                        >
                          Modify
                        </button>
                        <button
                          onClick={() => setOpenAlert(true)}
                          className="px-3 py-2 text-left text-red-600 hover:bg-red-50 rounded"
                        >
                          Remove
                        </button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            ))}
          </div>
        ))
      )}

      {/* Alert Dialog */}
      <AlertDialog open={openAlert} onOpenChange={setOpenAlert}>
        <AlertDialogTrigger></AlertDialogTrigger>
        <AlertDialogContent className="max-w-[90vw] sm:max-w-md rounded-lg">
          <AlertDialogHeader className="px-6 pt-6">
            <AlertDialogTitle className="text-center text-lg sm:text-xl font-bold text-[#1B121B]">
              Remove Log
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-base text-[#1B121B] pt-2 pb-6">
              Are you sure you want to remove this Log from the list?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex flex-col sm:flex-row justify-center gap-3 px-6 pb-6">
            <AlertDialogCancel className="w-full sm:w-auto px-8 py-3 border border-gray-300">
              No
            </AlertDialogCancel>
            <AlertDialogAction className="w-full sm:w-auto px-8 py-3 bg-[#2B1351] hover:bg-[#3a1a6e] text-white">
              Yes
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default LogDetailsPage;
