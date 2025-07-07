import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AdminAccountLayout from "../AdminAccount/AdminAccountLayout";
import Navbar from "../Header/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import UserWalletImage from "../../assets/images/userwalletimage.png";
import CardBackground from "../../assets/images/profile-background.png";
import walletIcon from "../../assets/images/Total revenue.png";

const orders = [
  { product: "USA 🇺🇸 Standard IG", amount: 30000, date: "Feb 24, 2025", time: "05:23pm", info: "5-8yrs with posts | 1000 followers" },
  { product: "USA 🇺🇸 Standard FB", amount: 24000, date: "Feb 24, 2025", time: "05:23pm", info: "8yrs | 100+ friends" },
  { product: "USA 🇺🇸 Tiktok", amount: 16000, date: "Feb 24, 2025", time: "05:23pm", info: "1-2yrs | Partially Filled" },
  { product: "USA 🇺🇸 Snapchat", amount: 25000, date: "Feb 24, 2025", time: "05:23pm", info: "2 - 5 months" },
];

const fundings = [
  { id: "TRF7894903", amount: 30000, date: "Feb 24, 2025", time: "05:23pm", status: "Success" },
  { id: "TRF7894903", amount: 24000, date: "Feb 24, 2025", time: "05:23pm", status: "Pending" },
  { id: "TRF7894903", amount: 16000, date: "Feb 24, 2025", time: "05:23pm", status: "Success" },
  { id: "TRF7894903", amount: 25000, date: "Feb 24, 2025", time: "05:23pm", status: "Failed" },
];

const UserInfoPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  // Redirect if user data is missing
  React.useEffect(() => {
    if (!user) {
      navigate("/admin/users-admin");
    }
  }, [user, navigate]);

   // Pagination state for orders
  const [orderPage, setOrderPage] = useState(1);
  const ordersPerPage = 2;
  const totalOrderPages = Math.ceil(orders.length / ordersPerPage);
  const paginatedOrders = orders.slice((orderPage - 1) * ordersPerPage, orderPage * ordersPerPage);

 // Pagination state for fundings
  const [fundingPage, setFundingPage] = useState(1);
  const fundingsPerPage = 2;
  const totalFundingPages = Math.ceil(fundings.length / fundingsPerPage);
  const paginatedFundings = fundings.slice((fundingPage - 1) * fundingsPerPage, fundingPage * fundingsPerPage);

  const renderPagination = (currentPage, totalPages, onPageChange) => (
    <div className="flex justify-end gap-2 mt-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </Button>
      {Array.from({ length: totalPages }).map((_, i) => (
        <Button
          key={i}
          size="sm"
          variant={currentPage === i + 1 ? "default" : "outline"}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </Button>
      ))}
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  );

  return (
    <AdminAccountLayout>
      <Navbar />
      <div className="p-4 md:p-6 space-y-6">
        <h1 className="text-xl md:text-2xl font-bold">User Information</h1>

        <div className="grid gap-4 md:grid-cols-2">
          {/* User Details */}
          <Card
  className="relative bg-cover bg-center bg-no-repeat h-[240px] md:h-[280px] text-white rounded-xl shadow-xl overflow-hidden"
  style={{ backgroundImage: `url(${CardBackground})` }}
>
  <CardContent
    className="absolute bottom-0 left-0 right-0 p-4 sm:pl-6 h-[160px] text-black bg-white"
  >
    <div className="flex flex-col md:flex-row items-start justify-between md:items-center gap-4">
      <div className="space-y-1">
        <p className="text-base font-extrabold">{user?.name}</p>
        <p className="text-sm">{user?.email}</p>
        <Badge
          className={`px-4 mt-3.5 w-fit ${
            user?.status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {user?.status}
        </Badge>
        <p className="text-xs pt-3.5">Joined: Mar 14, 2025</p>
      </div>
      <img
        src={UserWalletImage}
        alt="wallet"
        className="w-20 h-20 object-cover absolute right-6 bottom-30 rounded-md"
      />
    </div>
  </CardContent>
          </Card>

          {/* Wallet Info */}
        
          <div className="flex flex-col gap-4 space-y-4">
            <div className="flex justify-between py-[33px] px-6 rounded-2xl shadow-xl border border-gray-200">
                <div>
                    <p className="text-sm text-gray-500">Wallet Balance</p>
                  <h2 className="text-2xl font-bold pt-2">₦205,000</h2>
                </div>
                <img 
                  src={walletIcon} 
                  alt="Total revenue icon" 
                  className="ml-4"
                  style={{ height: '40px', width: '40px' }} 
                  />
            </div>
            <div className="flex justify-between py-[33px] px-6 rounded-2xl shadow-xl border border-gray-200">
              <div>
                <p className="text-xs text-gray-400">Total Spent</p>
                <h2 className="text-xl font-semibold pt-2">₦25,000</h2>
              </div>
               <img 
                src={walletIcon} 
                alt="Total revenue icon" 
                className="ml-4"
                style={{ height: '40px', width: '40px' }} 
                />
            </div>
          </div>
        

        </div>

        
        {/* Order History */}
       {/* Order History */}
        <Card className="shadow-xl mt-8">
          <CardContent className="overflow-x-auto p-4">
            <h2 className="font-semibold mb-4">Order History ({orders.length})</h2>
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-3 text-left">Product</th>
                  <th className="p-3 text-left">Amount</th>
                  <th className="p-3 text-left">Date & Time</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedOrders.map((order, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <div>{order.product}</div>
                      <div className="text-xs text-gray-500">{order.info}</div>
                    </td>
                    <td className="p-3">₦{order.amount.toLocaleString()}</td>
                    <td className="p-3">
                      <div>{order.date}</div>
                      <div className="text-xs text-gray-500">{order.time}</div>
                    </td>
                    <td className="p-3">
                      <Button size="sm" variant="outline">View Info</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {renderPagination(orderPage, totalOrderPages, setOrderPage)}
          </CardContent>
        </Card>

        {/* Wallet Funding */}
        <Card className="shadow-xl mt-10">
          <CardContent className="p-4 overflow-x-auto">
            <h2 className="font-semibold mb-4">Wallet Funding History</h2>
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-3 text-left">Transaction ID</th>
                  <th className="p-3 text-left">Amount</th>
                  <th className="p-3 text-left">Date & Time</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {paginatedFundings.map((item, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="p-3">{item.id}</td>
                    <td className="p-3">₦{item.amount.toLocaleString()}</td>
                    <td className="p-3">
                      <div>{item.date}</div>
                      <div className="text-xs text-gray-500">{item.time}</div>
                    </td>
                    <td className="p-3">
                      <Badge className={
                        item.status === "Success"
                          ? "bg-[#12B64A] text-white"
                          : item.status === "Pending"
                          ? "bg-[#FFC107] text-white"
                          : "bg-[#FF3D00] text-white"
                      }>
                        {item.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {renderPagination(fundingPage, totalFundingPages, setFundingPage)}
          </CardContent>
        </Card>
      </div>
    </AdminAccountLayout>
  );
};

export default UserInfoPage;
