import React from "react";
import { X, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ViewPaymentDetails = ({ onClose, paymentData }) => {
  // Function to share receipt
  const shareReceipt = () => {
    const receiptInfo = `
    Payment Receipt
    --------------
    User: ${paymentData.name}
    Email: ${paymentData.email}
    Transaction ID: ${paymentData.transactionId}
    Amount: ₦${paymentData.amount.toLocaleString()}
    Date: ${paymentData.date}, ${paymentData.time}
    Status: ${paymentData.paymentStatus}
        `.trim();
    
    if (navigator.share) {
      navigator.share({
        title: 'Payment Receipt',
        text: receiptInfo,
      }).catch(console.error);
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(receiptInfo).then(() => {
        console.log('Receipt copied to clipboard');
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/30 backdrop-blur-sm">
      <div className="w-full sm:w-[720px] bg-white h-full p-6 sm:p-10 overflow-y-auto shadow-2xl slide-in-right">
        <div className="flex items-center justify-between mt-4 sm:mt-13">
          <p className="text-sm text-gray-600 cursor-pointer" onClick={onClose}>
            ← Go Back / View Payment
          </p>
          <button onClick={onClose} className="text-gray-600 flex items-center gap-1 hover:text-black">
            <X size={20} />
            <span className="hidden sm:inline">Close</span>
          </button>
        </div>

        <div className="mt-8 sm:mt-16">
          <h3 className="text-lg font-semibold mb-4 sm:mb-8">User Information</h3>
          <div className="space-y-4 sm:space-y-8 text-sm">
            <div className="flex flex-col sm:flex-row">
              <span className="font-medium mb-1 sm:mb-0 sm:w-40">User's Name:</span>
              <strong className="sm:pl-10">{paymentData.name}</strong>
            </div>
            <div className="flex flex-col sm:flex-row">
              <span className="font-medium mb-1 sm:mb-0 sm:w-40">User's E-mail:</span>
              <span className="sm:pl-10">{paymentData.email}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-16">
          <h3 className="text-lg font-semibold mb-4 sm:mb-8">Transaction Information</h3>
          <div className="space-y-4 sm:space-y-8 text-sm">
            <div className="flex flex-col sm:flex-row">
              <span className="font-medium mb-1 sm:mb-0 sm:w-40">Transaction ID:</span>
              <span className="sm:pl-10">{paymentData.transactionId}</span>
            </div>
            <div className="flex flex-col sm:flex-row">
              <span className="font-medium mb-1 sm:mb-0 sm:w-40">Amount:</span>
              <span className="sm:pl-10">₦{paymentData.amount.toLocaleString()}</span>
            </div>
            <div className="flex flex-col sm:flex-row">
              <span className="font-medium mb-1 sm:mb-0 sm:w-40">Date & Time:</span>
              <span className="sm:pl-10">{paymentData.date}, {paymentData.time}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-16">
          <h3 className="text-lg font-semibold mb-4 sm:mb-8">Payment Status</h3>
          <div className="flex items-center justify-between">
            <span className={`text-sm px-4 py-2 rounded-full w-fit ${
              paymentData.paymentStatus === "Success"
                ? "bg-green-500 text-white"
                : paymentData.paymentStatus === "Pending"
                ? "bg-yellow-500 text-white"
                : "bg-red-500 text-white"
            }`}>
              {paymentData.paymentStatus}
            </span>
            
            <Button 
              size="sm" 
              variant="ghost" 
              className="text-sm sm:text-md text-[#7B36E7] font-semibold hover:bg-purple-50 flex items-center gap-2" 
              onClick={shareReceipt}
            >
              <Share2 size={16} />
              Share Receipt
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPaymentDetails;