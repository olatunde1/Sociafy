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
import Loader from "../Loader";
import { getAdminOverview } from "@/hooks/api/queries/super-admin/adminLogs/getAdminInfos";

const AdminDashBoard = (dashBoardUser) => {
  const { data: overview, isPending } = getAdminOverview();
  console.log(overview, "overview");

  const overviewData = overview?.data ?? {}
  return (
    <div className="font-custom">
      {/* Navbar */}
      <Navbar user={dashBoardUser} />

<<<<<<< HEAD
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
    
=======
      {isPending ? (
        <Loader />
      ) : (
        <>
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-4 sm:mt-6 md:mt-8">
            {/* Card 1 */}
            <Card className="w-full">
              <CardContent className="p-4 flex justify-between items-center gap-3">
                <div className="flex-1">
                  <p className="text-xs sm:text-sm text-gray-500">
                    Total Revenue
                  </p>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                    {overviewData?.orderStats?.totalRevenue ?? "0"}
                  </h2>
                  {/* <div className="flex items-center space-x-2 mt-2 sm:mt-3">
                    <Badge className="bg-[#DDF1E2] text-green-600 text-xs">
                      +25%
                    </Badge>
                    <span className="text-xs sm:text-sm text-gray-500">
                      since last month
                    </span>
                  </div> */}
                </div>
                <img
                  src={TotalRevenue}
                  alt="Revenue"
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="w-full">
              <CardContent className="p-4 flex justify-between items-center gap-3">
                <div className="flex-1">
                  <p className="text-xs sm:text-sm text-gray-500">
                    Accounts Sold
                  </p>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                    {overviewData?.orderStats?.totalAccountsSold ?? "0"}
                  </h2>
                  {/* <div className="flex items-center space-x-2 mt-2 sm:mt-3">
                    <Badge className="bg-[#FEEBE9] text-[#FF3B30] text-xs">
                      +25%
                    </Badge>
                    <span className="text-xs sm:text-sm text-gray-500">
                      since last month
                    </span>
                  </div> */}
                </div>
                <img
                  src={TotalAccount}
                  alt="Accounts"
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="w-full">
              <CardContent className="p-4 flex justify-between items-center gap-3">
                <div className="flex-1">
                  <p className="text-xs sm:text-sm text-gray-500">
                    Total Users
                  </p>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                    {overviewData?.totalUsers ?? "0"}
                  </h2>
                  {/* <div className="flex items-center space-x-2 mt-2 sm:mt-3">
                    <Badge className="bg-[#DDF1E2] text-green-600 text-xs">
                      +9%
                    </Badge>
                    <span className="text-xs sm:text-sm text-gray-500">
                      since last month
                    </span>
                  </div> */}
                </div>
                <img
                  src={TotalUser}
                  alt="Users"
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </CardContent>
            </Card>
          </div>

          {/* Tables Section */}
          <div className="p-4 space-y-6 sm:space-y-8">
            <div className="overflow-x-auto">
              <RecentPurchaseTable data={RecentPurchases} />
            </div>
            <div className="overflow-x-auto">
              <RecentWalletFundingTable data={RecentWalletFunding} />
            </div>
          </div>
        </>
      )}
>>>>>>> d0ab701521015090878b17a6b5e98f2ff4a80bfc
    </div>
  );
};

export default AdminDashBoard;
