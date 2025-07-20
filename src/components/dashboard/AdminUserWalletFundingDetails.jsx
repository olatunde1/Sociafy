import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const AdminUserWalletFundingDetails = ({ funding, onClose }) => {
  const receiptRef = useRef();

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

  const handleDownloadPDF = async () => {
    const cardElement = receiptRef.current;

    try {
      const canvas = await html2canvas(cardElement, {
        scale: 2,
        useCORS: true,
      });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save(`wallet-receipt-${funding.transactionId || "receipt"}.pdf`);
    } catch (error) {
      console.error("PDF generation failed:", error);
    }
  };

  return (
    <div className="p-4 sm:w-[640px] space-y-4 w-full mx-auto">
      {/* Top Navigation */}
      <div className="flex items-center justify-between mt-10">
        <div
          onClick={onClose}
          className="text-sm text-muted-foreground cursor-pointer hover:text-primary hover:font-bold transition-colors duration-200"
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

      {/* Card Info - PDF Section */}
      <Card
        ref={receiptRef}
        className="border rounded-lg p-4 space-y-4 transition-shadow duration-200 hover:shadow-md mt-10 bg-white text-black"
      >
        <CardContent className="p-0 space-y-4">
          <div className="space-y-2">
            <h2 className="text-[16px] font-bold mb-8">User Information</h2>
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-[150px_1fr] gap-4">
                <span className="font-medium text-muted-foreground">Name:</span>
                <span className="font-bold">
                  {funding?.userId?.username || "Unknown User"}
                </span>
              </div>
              <div className="grid grid-cols-[150px_1fr] gap-4">
                <span className="font-medium text-muted-foreground">
                  User's Email:
                </span>
                <span className="font-bold">{funding?.userId?.email || "N/A"}</span>
              </div>
            </div>
          </div>

          <div className="grid gap-y-4 text-sm">
            <h2 className="text-[16px] font-bold mt-10 mb-10">Transaction Information</h2>
            <div className="grid grid-cols-[150px_1fr] gap-4">
              <span className="font-medium text-muted-foreground">Transaction ID :</span>
              <span className="font-bold">{funding.transactionId}</span>
            </div>
            <div className="grid grid-cols-[150px_1fr] gap-4">
              <span className="font-medium text-muted-foreground">Amount :</span>
              <span className="font-bold">₦{funding.amount.toLocaleString()}</span>
            </div>
            <div className="grid grid-cols-[150px_1fr] gap-4">
              <span className="font-medium text-muted-foreground">Date & Time :</span>
              <span className="font-bold">{date}, {time}</span>
            </div>
          </div>

          <div className="grid grid-cols-[150px_1fr] gap-4">
            <h2 className="text-sm font-semibold text-muted-foreground">Payment Status :</h2>
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

      {/* Share Receipt Button */}
      <Button
        onClick={handleDownloadPDF}
        className="w-full mt-10 text-sm bg-white font-bold border border-[#7B36E7] bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white px-10 py-2 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
      >
        Share Receipt
      </Button>
    </div>
  );
};

export default AdminUserWalletFundingDetails;
