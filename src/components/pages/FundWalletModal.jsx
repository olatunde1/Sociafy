import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import wallet from "../../assets/images/wallet.png";
import { useFundWallet } from "@/hooks/api/mutation/user/useFundWallet";
import { toast } from "sonner";
// import { useNavigate } from "react-router-dom";

const FundWalletModal = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState("");
  // const navigate = useNavigate();

  const { mutate, isPending } = useFundWallet();

  const handleFund = () => {
    if (!amount) {
      toast.warning("Please enter an amount.");
      return;
    }

    mutate(
      {
        amount: parseFloat(amount),
      },
      {
        onSuccess: (response) => {
          toast.success(response?.data?.data?.message || "Initiated!");
          console.log(response, "response");
          window.location.href = response?.data?.data?.authorizationUrl;
          onClose();
        },
        onError: (error) => {
          toast.error(error?.response?.data?.message || "Payment Failed!");
          onClose();
        },
      }
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm w-full rounded-xl">
        <DialogHeader>
          <div className="mx-auto mb-4">
            <img src={wallet} alt="wallet" className="w-14 h-14 mx-auto" />
          </div>
          <DialogTitle className="text-[20px] font-bold text-center">
            Fund Wallet
          </DialogTitle>
          <DialogDescription className="text-sm text-black mb-10 font-medium text-center">
            Enter the amount you want to add to your wallet below.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 px-4">
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter the amount here"
            className="py-5 mb-6 text-base appearance-none 
                focus:outline-none focus:ring-0 focus:border-transparent 
                [&::-webkit-outer-spin-button]:appearance-none 
                [&::-webkit-inner-spin-button]:appearance-none"
          />

          <div className="flex justify-center">
            <Button
              onClick={handleFund}
              className="w-full sm:w-[350px] mb-4 py-6 bg-[#351A60] text-white hover:bg-[#622BB9]"
            >
              {isPending ? "Processing..." : "Pay"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FundWalletModal;
