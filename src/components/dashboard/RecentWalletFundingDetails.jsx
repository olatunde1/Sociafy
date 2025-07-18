import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X } from "lucide-react";

const RecentWalletFundingDetails = ({ isOpen, onClose, funding }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300); // Wait for animation to complete
  };

  const formatDate = (isoDate) => {
    const dateObj = new Date(isoDate);
    const date = dateObj.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    const time = dateObj.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${date} • ${time}`;
  };

  if (!isOpen) return null;

  if (!funding) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg">
          <p className="text-red-500">Invalid or missing funding data.</p>
          <Button onClick={handleClose} className="mt-4">
            Close
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[720px] p-10 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="text-sm text-gray-600 mt-6 hover:text-black"
            >
              <ArrowLeft className="w-4 h-4 mr-1" /> Back
            </Button>
           
          </div>
        <div className="flex items-center justify-between p-4 bg-white sticky top-0">
          
           <h1 className="text-lg font-bold text-[#515151]">Wallet Funding Details</h1>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="text-gray-600 hover:text-white  hover:bg-red-600"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4 overflow-y-auto h-full pb-20 ">
          <Card className="bg-[#F2F2F7]">
  <CardContent className="p-4 space-y-4">
    {/* Status aligned right */}
    <div className="flex justify-between items-center">
      <h2 className="text-base font-medium text-[#515151]">Funding Status</h2>
      <Badge
        className={
          funding.status === "success"
            ? "bg-[#12B64A] text-sm text-white"
            : funding.status === "pending"
            ? "bg-[#FFC107] text-white"
            : "bg-[#FF3D00] text-white"
        }
      >
        {funding.status}
      </Badge>
    </div>

    {/* Uniformly spaced rows */}
    <div className="flex justify-between">
      <p className="text-sm text-gray-500">User ID:</p>
      <p className="text-base font-medium text-right">{funding.userId}</p>
    </div>

    <div className="flex justify-between">
      <p className="text-sm text-gray-500">Transaction ID:</p>
      <p className="text-base font-semibold text-right text-[#515151]">
        #{funding.transactionId}
      </p>
    </div>

    <div className="flex justify-between">
      <p className="text-sm text-gray-500">Amount:</p>
      <p className="text-xl font-semibold text-right text-[#515151]">
        ₦{funding.amount.toLocaleString()}
      </p>
    </div>

    <div className="flex justify-between">
      <p className="text-sm text-gray-500">Date & Time:</p>
      <p className="text-base font-medium text-right">{formatDate(funding.createdAt)}</p>
    </div>

    {funding.paymentMethod && (
      <div className="flex justify-between">
        <p className="text-sm text-gray-500">Payment Method:</p>
        <p className="text-base font-medium text-right">{funding.paymentMethod}</p>
      </div>
    )}

    {funding.metadata && (
      <div>
        <p className="text-sm text-gray-500 mb-1">Additional Info:</p>
        <pre className="text-xs bg-gray-100 p-2 rounded whitespace-pre-wrap">
          {JSON.stringify(funding.metadata, null, 2)}
        </pre>
      </div>
    )}
  </CardContent>
</Card>

        </div>
      </div>
    </>
  );
};

export default RecentWalletFundingDetails;