import React from "react";
import TotalRevenue from "../../assets/images/Total revenue.png";
import TotalAccount from "../../assets/images/total number of account.png";
import TotalUser from "../../assets/images/total number of users.png";
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
    <div className="font-custom">
      {/* Navbar */}
      <Navbar user={dashBoardUser} />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-4 sm:mt-6 md:mt-8">
        {/* Total Revenue Card */}
        <Card className="w-full h-full">
          <CardContent className="p-4 flex justify-between items-center gap-4 h-full">
            <div className="flex-1">
              <p className="text-xs sm:text-sm text-gray-500">Total Revenue</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">₦759,000</h2>
              <div className="flex items-center space-x-2 mt-2 sm:mt-3">
                <Badge className="bg-[#DDF1E2] text-green-600 text-xs">+25%</Badge>
                <span className="text-xs sm:text-sm text-gray-500">since last month</span>
              </div>
            </div>
            <img
              src={TotalRevenue}
              alt="Revenue"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
            />
          </CardContent>
        </Card>

        {/* Accounts Sold Card */}
        <Card className="w-full h-full">
          <CardContent className="p-4 flex justify-between items-center gap-4 h-full">
            <div className="flex-1">
              <p className="text-xs sm:text-sm text-gray-500">Accounts Sold</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">3,784</h2>
              <div className="flex items-center space-x-2 mt-2 sm:mt-3">
                <Badge className="bg-[#FEEBE9] text-[#FF3B30] text-xs">+25%</Badge>
                <span className="text-xs sm:text-sm text-gray-500">since last month</span>
              </div>
            </div>
            <img
              src={TotalAccount}
              alt="Accounts"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
            />
          </CardContent>
        </Card>

        {/* Total Users Card */}
        <Card className="w-full h-full">
          <CardContent className="p-4 flex justify-between items-center gap-4 h-full">
            <div className="flex-1">
              <p className="text-xs sm:text-sm text-gray-500">Total Users</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">807</h2>
              <div className="flex items-center space-x-2 mt-2 sm:mt-3">
                <Badge className="bg-[#DDF1E2] text-green-600 text-xs">+9%</Badge>
                <span className="text-xs sm:text-sm text-gray-500">since last month</span>
              </div>
            </div>
            <img
              src={TotalUser}
              alt="Users"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
            />
          </CardContent>
        </Card>
      </div>

      {/* Tables Section */}
      
        <div className="overflow-x-auto mt-10">
          <RecentPurchaseTable data={RecentPurchases} />
        </div>
        <div className="overflow-x-auto mt-10">
          <RecentWalletFundingTable data={RecentWalletFunding} />
        </div>
    
    </div>
  );
};

export default AdminDashBoard;
