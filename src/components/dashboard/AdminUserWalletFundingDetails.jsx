import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, X } from "lucide-react";

import { useRef } from "react";
import html2canvas from "html2canvas";
import domtoimage from "dom-to-image";
import jsPDF from "jspdf";

const AdminUserWalletFundingDetails = ({ funding, onClose }) => {
  const receiptRef = useRef(null);

  const formatDate = (isoDate) => {
    const dateObj = new Date(isoDate);
    return {
      date: dateObj.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      time: dateObj.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
  };

  const { date, time } = formatDate(funding.createdAt);

  const handleCopy = () => {
    const details = `
    User Name: ${funding?.userId?.username || "Unknown User"}
    Email: ${funding.userId?.email || "N/A"}
    Transaction ID: ${funding.transactionId}
    Amount: ₦${funding.amount.toLocaleString()}
    Date & Time: ${date}, ${time}
    Status: ${funding.status}
        `;
    navigator.clipboard.writeText(details);
  };

  const handleDownloadPDF = async () => {
    const node = receiptRef.current;

    try {
      const dataUrl = await domtoimage.toPng(node);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: "a4",
      });

      const img = new Image();
      img.src = dataUrl;

      img.onload = function () {
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        const margin = 20; // <-- Add padding around content
        const imgWidth = pageWidth - margin * 2;
        // const imgWidth = pageWidth;
        const imgHeight = (img.height * imgWidth) / img.width;

        pdf.addImage(img, "PNG", margin, margin, imgWidth, imgHeight);

        pdf.save(`WalletFundingReceipt-${funding.transactionId}.pdf`);
      };
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="p-4 sm:w-[640px] space-y-4 w-full mx-auto">
      {/* Top Navigation */}
      <div className="flex items-center justify-between mt-10">
        <div
          onClick={onClose}
          className="text-sm text-[#868e96] cursor-pointer hover:text-primary hover:font-bold transition-colors duration-200"
        >
          Go Back
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="hover:bg-gray-100 transition-colors duration-200"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>

      {/* Copy Info */}
      <div className="flex justify-end mt-10">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1 text-xs hover:bg-gray-50 transition-colors duration-200"
          onClick={handleCopy}
        >
          <Copy className="w-3 h-3" />
          Copy Info
        </Button>
      </div>

      {/* RECEIPT CARD */}
      <div
        ref={receiptRef}
        className="p-6 bg-white rounded-md w-full max-w-[700px] mx-auto"
      >
        <Card className="border rounded-lg p-4 space-y-4 transition-shadow duration-200 hover:shadow-md">
          <CardContent className="p-0 space-y-4">
            {/* User Info */}
            <div className="space-y-2">
              <h2 className="text-[16px] font-bold mb-8 ">User Information</h2>
              <div className="space-y-4 text-sm">
                <div className="grid grid-cols-[150px_1fr] gap-4">
                  <span className="font-medium text-[#868e96]">Name:</span>
                  <span className="font-bold">
                    {funding?.userId?.username || "Unknown User"}
                  </span>
                </div>
                <div className="grid grid-cols-[150px_1fr] gap-4">
                  <span className="font-medium text-[#868e96]">
                    User's Email:
                  </span>
                  <span className="font-bold">
                    {funding?.userId?.email || "N/A"}
                  </span>
                </div>
              </div>
            </div>

            {/* Transaction Info */}
            <div className="grid gap-y-4 text-sm">
              <h2 className="text-[16px] font-bold  mt-10 mb-10">
                Transaction Information
              </h2>
              <div className="grid grid-cols-[150px_1fr] gap-4">
                <span className="font-medium text-[#868e96]">
                  Transaction ID :
                </span>
                <span className="font-bold">{funding.transactionId}</span>
              </div>
              <div className="grid grid-cols-[150px_1fr] gap-4">
                <span className="font-medium text-[#868e96]">Amount :</span>
                <span className="font-bold">
                  ₦{funding.amount.toLocaleString()}
                </span>
              </div>
              <div className="grid grid-cols-[150px_1fr] gap-4">
                <span className="font-medium text-[#868e96]">
                  Date & Time :
                </span>
                <span className="font-bold">
                  {date}, {time}
                </span>
              </div>
            </div>

            {/* Payment Status */}
            <div className="grid grid-cols-[150px_1fr] gap-4">
              <h2 className="text-sm font-semibold text-[#868e96]">
                Payment Status :
              </h2>
              <div
                className={`text-sm font-bold ${
                  funding.status.toLowerCase() === "success"
                    ? "text-green-600"
                    : funding.status.toLowerCase() === "pending"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {funding.status}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* PDF Download Button */}
      <Button
        className="w-full mt-10 text-sm bg-[#622BB9] hover:bg-[#351A60] font-bold text-white px-10 py-2 rounded-lg"
        onClick={handleDownloadPDF}
      >
        Download Receipt as PDF
      </Button>
    </div>
  );
};

export default AdminUserWalletFundingDetails;
