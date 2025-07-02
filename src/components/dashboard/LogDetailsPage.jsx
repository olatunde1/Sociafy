import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Castine from "../../assets/images/castine.png";

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

const sampleProducts = [
  { title: "USA 🇺🇸 Standard FB", age: "Less than 1 year", friends: "500+", amount: "₦30,000" },
  { title: "USA 🇺🇸 Standard FB", age: "8 years", friends: "100+", amount: "₦24,000" },
  { title: "USA 🇺🇸 Standard FB", age: "2 years", friends: "1,000+", amount: "₦16,000" },
  { title: "USA 🇺🇸 Standard FB", age: "1 year", friends: "------", amount: "₦25,000" },
  { title: "USA 🇺🇸 Standard FB", age: "8 years", friends: "1,500+", amount: "₦19,000" },
];

const LogDetailsPage = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const { category } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const log = state?.log;
  const readableCategory = category.replace(/-/g, " ");

  const user = {
    name: "Castine",
    email: "castiin@sociafy.com",
    balance: "NGN 179,000",
    add: "Add New Log",
    image: Castine,
  };

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-12 font-custom">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          {user.image ? (
            <img src={user.image} alt="User" className="w-14 h-14 rounded-full object-cover" />
          ) : (
            <FaUserCircle className="text-gray-400 w-14 h-14" />
          )}
          <div>
            <h2 className="text-xl font-bold">Welcome, {user.name}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        <Button
          onClick={() => console.log("Add New Log")}
          className="bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white"
        >
          {user.add}
        </Button>
      </div>

      <div
        className="text-sm text-gray-500 mb-2 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        Go Back /{" "}
        <span className="text-[#351A60] font-semibold capitalize">
          {readableCategory} Logs
        </span>
      </div>
      <h1 className="text-2xl font-bold mb-6">
        {log?.name || readableCategory}
      </h1>

      {/* Log Sections */}
      {[1, 2, 3].map((_, idx) => (
        <div key={idx} className="mb-10">
          <div className="flex justify-between items-center bg-[#2B1351] text-white p-3 sm:p-4 rounded-t-md">
            <h2 className="font-semibold text-lg">
              {sampleProducts[0].title} ({log?.count || 231})
            </h2>
            <Button variant="ghost" className="text-[#7B36E7] bg-white px-4 py-2">
              View More
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 bg-[#EDF2F7] font-semibold text-sm text-gray-500 py-3 px-4 border-b">
            <p>Product</p>
            <p>Age</p>
            <p className="hidden sm:block">Friends</p>
            <p className="hidden sm:block">Amount</p>
            <p className="text-right sm:text-left">Action</p>
          </div>

          {sampleProducts.map((product, i) => (
            <div
              key={i}
              className="grid grid-cols-2 sm:grid-cols-5 gap-4 items-center text-sm py-3 px-4 border-b"
            >
              <p>{product.title}</p>
              <p>{product.age}</p>
              <p className="hidden sm:block">{product.friends}</p>
              <p className="hidden sm:block">{product.amount}</p>
              <div className="text-right sm:text-left">
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="text-lg font-extrabold text-black hover:text-black">...</button>
                  </PopoverTrigger>
                  <PopoverContent
                    side="bottom"
                    align="center"
                    className="w-[150px] p-2 bg-white shadow-md rounded-md z-50"
                  >
                    <div className="flex flex-col gap-2 text-sm">
                      <button
                        onClick={() => {
                          console.log("Modify");
                        }}
                        className="px-3 py-2 text-left hover:bg-gray-100 rounded"
                      >
                        Modify
                      </button>
                      <button
                        onClick={() => {
                          setOpenAlert(true);
                        }}
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
      ))}

      {/* Alert Confirmation */}
     <AlertDialog open={openAlert} onOpenChange={setOpenAlert}>
  <AlertDialogTrigger>Open</AlertDialogTrigger>

  <AlertDialogContent className="sm:max-w-[446px] flex flex-col justify-center items-center text-center">
    <AlertDialogHeader className="w-full">
      <AlertDialogTitle className="text-center text-[#1B121B] font-bold pb-4 pt-10">Remove Log</AlertDialogTitle>
      <AlertDialogDescription className="text-center text-[#1B121B] text-[16px] font-medium pb-[43px]">
        Are you sure you want to remove this Log from the list?
      </AlertDialogDescription>
    </AlertDialogHeader>

    <AlertDialogFooter className="flex justify-center gap-4">
      <AlertDialogCancel className='px-[85.5px] py-[24px]'>No</AlertDialogCancel>
      <AlertDialogAction className='px-[85.5px] py-[24px] bg-[#2B1351] text-white'>Yes</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

    </div>
  );
};

export default LogDetailsPage;
