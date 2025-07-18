import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { toast } from "@/components/ui/use-toast"; // If using shadcn/ui toast

const AdminViewOrder = ({ onClose, orderData }) => {
  if (!orderData) return null;

  // Function to copy full order info
  const copyOrderInfo = () => {
    const info = `
Order ID: ${orderData.id}
Product: ${orderData.product}
Amount: ₦${orderData.amount.toLocaleString()}
Date: ${orderData.date} ${orderData.time}
Status: ${orderData.paymentStatus}
Buyer's Name: ${orderData.name}
Email: ${orderData.email || "Not provided"}
Username: ${orderData.username || "Not provided"}
Password: ${orderData.password || "Not provided"}
${orderData.rawData?.createdAt ? `Date Created: ${new Date(orderData.rawData.createdAt).toLocaleString()}` : ""}
    `.trim();

    navigator.clipboard.writeText(info).then(() => {
      toast({
        title: "Copied!",
        description: "Order information copied to clipboard.",
      });
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/30 backdrop-blur-sm">
      <div className="w-full sm:w-[720px] bg-white h-full p-6 sm:p-10 overflow-y-auto shadow-2xl slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between mt-4 sm:mt-13">
          <p className="text-sm text-gray-600 cursor-pointer" onClick={onClose}>
            Go Back / Account
          </p>
          <button
            onClick={onClose}
            className="text-gray-600 flex items-center gap-1 hover:text-red-600 font-medium"
          >
            <X className="bg-[#949494] border rounded p-1 text-black" size={20} />
            <span className="hidden sm:inline">Close</span>
          </button>
        </div>

        {/* Order Summary */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mt-8 sm:mt-16 gap-2">
          <h2 className="text-xl font-semibold">{orderData.product}</h2>
          <span
            className={`text-sm px-3 py-1 rounded-full w-fit ${
              orderData.paymentStatus === "Success"
                ? "bg-green-500 text-white"
                : orderData.paymentStatus === "Pending"
                ? "bg-yellow-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {orderData.paymentStatus}
          </span>
        </div>

        <p className="text-sm text-gray-600 mt-2">
          {orderData.info || "No additional information"}
        </p>

        {/* Buyer Info */}
        <div className="mt-8 sm:mt-16">
          <h3 className="text-[20px] font-semibold mb-4 sm:mb-8">
            Buyer Information
          </h3>
          <div className="space-y-4 sm:space-y-8 text-[16px]">
            <div className="flex flex-col sm:flex-row">
              <span className="font-medium sm:w-40">Buyer's Name:</span>
              <strong className="">{orderData.name}</strong>
            </div>
            <div className="flex flex-col sm:flex-row">
              <span className="font-medium sm:w-40">Buyer's Email:</span>
              <strong className="">
                {orderData.email || "Not provided"}
              </strong>
            </div>
            <div className="flex flex-col sm:flex-row">
              <span className="font-medium sm:w-40">Transaction ID:</span>
              <strong className="">{orderData.id}</strong>
            </div>
            <div className="flex flex-col sm:flex-row">
              <span className="font-medium sm:w-40">Amount:</span>
              <strong className="">
                ₦{orderData.amount.toLocaleString()}
              </strong>
            </div>
            <div className="flex flex-col sm:flex-row">
              <span className="font-medium sm:w-40">Date:</span>
              <strong className="">
                {orderData.date} at {orderData.time}
              </strong>
            </div>
          </div>
        </div>

        {/* Log Details */}
        <div className="mt-6 sm:mt-16">
          <div className="flex items-center justify-between mb-4 sm:mb-8">
            <h3 className="sm:text-[20px] font-semibold">Log Details</h3>
            <Button
              size="sm"
              variant="ghost"
              className="text-sm sm:text-md text-[#7B36E7] font-semibold hover:bg-purple-50"
              onClick={copyOrderInfo}
            >
              Copy Info
            </Button>
          </div>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 bg-[#F2F2F7]">
            <div className="space-y-4 sm:space-y-8  text-[16px] p-2 sm:p-10">
              <div className="flex flex-col sm:flex-row">
                <span className="font-medium sm:w-40">Username:</span>
                <strong className="">
                  {orderData.username || "Not provided"}
                </strong>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-medium sm:w-40">Password:</span>
                <strong className="">
                  {orderData.password || "Not provided"}
                </strong>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-medium sm:w-40">Email:</span>
                <strong className="">
                  {orderData.email || "Not provided"}
                </strong>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-medium sm:w-40">Amount:</span>
                <strong className="">
                  ₦{orderData.amount.toLocaleString()}
                </strong>
              </div>
              {orderData.rawData?.createdAt && (
                <div className="flex flex-col sm:flex-row">
                  <span className="font-medium sm:w-40">Date Created:</span>
                  <strong className="">
                    {new Date(
                      orderData.rawData.createdAt
                    ).toLocaleString()}
                  </strong>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminViewOrder;
