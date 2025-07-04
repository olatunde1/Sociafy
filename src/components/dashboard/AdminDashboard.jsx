import React from "react";
import {
  FaUserCircle,
  FaBox,
} from "react-icons/fa";

import TotalRevenue from "../../assets/images/Total revenue.png";
import TotalAccount from "../../assets/images/total number of account.png";
import TotalUser from "../../assets/images/total number of users.png";
import SociafyCornerImage from "../../assets/images/socccialffy-corner.png";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import RecentPurchaseTable from "./RecentPurchaseTable";
import RecentWalletFundingTable from "./RecentWalletFundingTable";
import Navbar from "../Header/Navbar";
import { RecentPurchases } from "../dashboard/data";
import { RecentWalletFunding } from "../dashboard/data";

const AdminDashBoard = (dashBoardUser) => {

  return (
    <>
      <div className=" font-custom">
      {/* ───────────── User Info & Balance ───────────── */}
       <Navbar user={dashBoardUser} />

      {/* ───────────── Cards Section ───────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 mt-10">
        {/* Card 1 - Wallet Balance */}
          
           <Card className="w-full">
            <CardContent className="p-4 space-y-2 flex justify-between">
              <div className="left">
                <p className="text-sm text-gray-500 pb-2">Total Revenue</p>
              <h2 className="text-2xl font-bold text-gray-900">₦759,000</h2>
              <div className="flex items-center space-x-2 pt-5">
                <span className="text-sm font-semibold px-2 py-2 text-green-600 bg-[#DDF1E2]">+25%</span>
                <span className="text-sm text-gray-500">since last month</span>
              </div>
              </div>
              <div className=" rounded-full">
              <img
                src={TotalRevenue}
                alt="Total Revenue Icon"
                className="w-10 h-10"
              />
              </div>
            </CardContent>
          </Card>


        {/* Card 2 - Total Orders */}
         <Card className="w-full">
            <CardContent className="p-4 space-y-2 flex  justify-between">
              <div className="left">
                <p className="text-sm text-gray-500 pb-2">Total Number Of Accounts Sold</p>
              <h2 className="text-2xl font-bold text-gray-900">3,784</h2>
              <div className="flex items-center space-x-2 pt-5">
                <span className="text-sm font-semibold px-2 py-2 text-[#FF3B30] bg-[#FEEBE9]">+25%</span>
                <span className="text-sm text-gray-500">since last month</span>
              </div>
              </div>
              <div className="rounded-full">
              <img
                src={TotalAccount}
                alt="Total Accounts Icon"
                className="w-10 h-10"
              />
            </div>
            </CardContent>
          </Card>


        {/* Card 3 - Total Deposit */}
         <Card className="w-full">
            <CardContent className="p-4 space-y-2 flex justify-between">
              <div className="left">
                <p className="text-sm text-gray-500 pb-2">Total Number Of Users</p>
              <h2 className="text-2xl font-bold text-gray-900">807</h2>
              <div className="flex items-center space-x-2 pt-5">
                <span className="text-sm font-semibold px-2 py-2 text-green-600 bg-[#DDF1E2]">+9%</span>
                <span className="text-sm text-gray-500">since last month</span>
              </div>
              </div>
              <div className="rounded-full">
              <img
                src={TotalUser}
                alt="Total Users Icon"
                className="w-10 h-10"
              />
            </div>
            </CardContent>
          </Card>
      </div>

    </div>
    
    <div className="p-4 space-y-6">
      <RecentPurchaseTable data={RecentPurchases} />
      <RecentWalletFundingTable data={RecentWalletFunding} />
    </div>
    </>

  );
};

export default AdminDashBoard;
