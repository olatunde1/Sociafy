import React from "react";
import {
  FaUserCircle,
  FaBox,
} from "react-icons/fa";
import Castine from "../../assets/images/castine.png";
import TotalRevenue from "../../assets/images/Total revenue.png";
import TotalAccount from "../../assets/images/total number of account.png";
import TotalUser from "../../assets/images/total number of users.png";
import SociafyCornerImage from "../../assets/images/socccialffy-corner.png";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AdminDashBoard = () => {
  const user = {
    name: "Castine",
    email: "castiin@sociafy.com",
    balance: "NGN 179,000",
    add: "Add New Log",
    image: Castine,
  };

  // const menuItems = [
  //   { name: "Overview", path: "/admin-dashboard" },
  //   {
  //     name: "Social Logs",
  //     iconSrc: FaBox,
  //     submenu: [
  //       { name: "All Logs", path: "/admin/logs" },
  //       { name: "Add New Logs", path: "/admin/add-logs" },
  //     ],
  //   },
  //   { name: "Orders", path: "/admin/orders" },
  //   { name: "User Management", path: "/admin/users" },
  //   { name: "Wallet Management", path: "/admin/wallet" },
  //   { name: "Report & Analytics", path: "/admin/reports" },
  //   { name: "Log Out", path: "/" },
  // ];


 const recentPurchases = [
  {
    id: "TRX234567890",
    name: "Francis Castiin",
    email: "castiin@sociafy.com",
    product: "USA 🇺🇸 Standard IG",
    info: "5-8yrs with posts | 1000 followers",
    amount: "₦30,000",
    date: "Feb 24, 2025",
    time: "05:23pm",
    paymentStatus: "Success",
  },
  {
    id: "TRX012345678",
    name: "Kathryn Murphy",
    email: "tanya.hill@example.com",
    product: "USA 🇺🇸 Standard FB",
    info: "8yrs | 100+ friends",
    amount: "₦24,000",
    date: "Feb 24, 2025",
    time: "05:23pm",
    paymentStatus: "Success",
  },
  {
    id: "TRX543210987",
    name: "Bessie Cooper",
    email: "curtis.weaver@example.com",
    product: "USA 🇺🇸 Tiktok",
    info: "1-2yrs | Partially Filled",
    amount: "₦19,000",
    date: "Feb 24, 2025",
    time: "05:23pm",
    paymentStatus: "Success",
  },
  {
    id: "TRX890123456",
    name: "Theresa Webb",
    email: "willie.jennings@example.com",
    product: "USA 🇺🇸 Snapchat",
    info: "2 - 5 months",
    amount: "₦16,000",
    date: "Feb 24, 2025",
    time: "05:23pm",
    paymentStatus: "Pending",
  },
  {
    id: "TRX678901234",
    name: "Kathryn Murphy",
    email: "tanya.hill@example.com",
    product: "USA 🇺🇸 Standard IG",
    info: "5-8yrs with posts | 1000 followers",
    amount: "₦25,000",
    date: "Feb 24, 2025",
    time: "05:23pm",
    paymentStatus: "Success",
  },
  {
    id: "TRX789012345",
    name: "Albert Flores",
    email: "bill.sanders@example.com",
    product: "USA 🇺🇸 Standard T...",
    info: "5-11yrs | 0- 30 followers",
    amount: "₦19,000",
    date: "Feb 24, 2025",
    time: "05:23pm",
    paymentStatus: "Success",
  },
  {
    id: "TRX098765432",
    name: "Darlene Robertson",
    email: "kenzi.lawson@example.com",
    product: "PIA vpn",
    info: "1-6 month",
    amount: "₦9,000",
    date: "Feb 24, 2025",
    time: "05:23pm",
    paymentStatus: "Failed",
  },
  {
    id: "TRX234567890",
    name: "Leslie Alexander",
    email: "nevaeh.simmons@example.com",
    product: "USA 🇺🇸 Standard FB",
    info: "8yrs | 100+ friends",
    amount: "₦3,800",
    date: "Feb 24, 2025",
    time: "05:23pm",
    paymentStatus: "Success",
  },
  {
    id: "TRX321098765",
    name: "Esther Howard",
    email: "georgia.young@example.com",
    product: "Gmail Google Voice",
    info: "5-8yrs with posts | 1000 followers",
    amount: "₦19,000",
    date: "Feb 24, 2025",
    time: "05:23pm",
    paymentStatus: "Success",
  },
  {
    id: "TRX321098765",
    name: "Cody Fisher",
    email: "michael.mitc@example.com",
    product: "USA 🇺🇸 Tiktok",
    info: "1-2yrs | Partially Filled",
    amount: "₦14,500",
    date: "Feb 24, 2025",
    time: "05:23pm",
    paymentStatus: "Success",
  },
];

const recentWalletFundings = [
  {
    id: "TRF7894903",
    name: "Francis Castiin",
    email: "castiin@sociafy.com",
    amount: "₦30,000",
    date: "Feb 24, 2025",
    time: "05:23pm",
    status: "Success",
  },
  {
    id: "TRF7894903",
    name: "Kathryn Murphy",
    email: "tanya.hill@example.com",
    amount: "₦30,000",
    date: "Feb 24, 2025",
    time: "05:23pm",
    status: "Pending",
  },
  {
    id: "TRF7894903",
    name: "Bessie Cooper",
    email: "curtis.weaver@example.com",
    amount: "₦24,000",
    date: "Feb 24, 2025",
    time: "05:23pm",
    status: "Success",
  },
  {
    id: "TRF7894903",
    name: "Theresa Webb",
    email: "willie.jennings@example.com",
    amount: "₦16,000",
    date: "Feb 24, 2025",
    time: "05:23pm",
    status: "Failed",
  },
  {
    id: "TRF7894903",
    name: "Kathryn Murphy",
    email: "tanya.hill@example.com",
    amount: "₦16,000",
    date: "Feb 24, 2025",
    time: "05:23pm",
    status: "Success",
  },
  {
    id: "TRF7894903",
    name: "Leslie Alexander",
    email: "nevaeh.simmons@example.com",
    amount: "₦25,000",
    date: "Feb 24, 2025",
    time: "05:23pm",
    status: "Success",
  },
  {
    id: "TRF7894903",
    name: "Albert Flores",
    email: "bill.sanders@example.com",
    amount: "₦25,000",
    date: "Feb 24, 2025",
    time: "05:23pm",
    status: "Pending",
  },
  {
    id: "TRF7894903",
    name: "Darlene Robertson",
    email: "kenzi.lawson@example.com",
    amount: "₦19,000",
    date: "Feb 24, 2025",
    time: "05:23pm",
    status: "Success",
  },
  {
    id: "TRF7894903",
    name: "Cody Fisher",
    email: "michael.mitc@example.com",
    amount: "₦9,000",
    date: "Feb 24, 2025",
    time: "05:23pm",
    status: "Success",
  },
  {
    id: "TRF7894903",
    name: "Esther Howard",
    email: "georgia.young@example.com",
    amount: "₦3,800",
    date: "Feb 24, 2025",
    time: "05:23pm",
    status: "Success",
  },
];


  return (
    <>
      <div className=" font-custom">
      {/* ───────────── User Info & Balance ───────────── */}
      <div className="flex items-center justify-between gap-4 mb-8">
        {/* User Info */}
        <div className="flex items-center gap-4">
          {user.image ? (
            <img
              src={user.image}
              alt="User"
              className="w-14 h-14 rounded-full object-cover"
            />
          ) : (
            <FaUserCircle className="text-gray-400 w-14 h-14" />
          )}
          <div>
            <h2 className="text-xl font-bold">Welcome, {user.name}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        {/* Wallet Balance Summary */}
        <div className="px-4 py-2">
          {/* <span className="text-gray-600 font-medium mr-2">Balance:</span> */}
          <span className="rounded-lg px-8 py-4 font-medium bg-gradient-to-r from-[#622BB9] to-[#351A60] cursor-pointer text-white">
            {user.add}
          </span>
        </div>
      </div>

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
      {/* Recent Purchases */}
      <Card>
        <CardContent className="overflow-x-auto p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Recent Purchase</h2>
            <Button variant="outline" className="text-xs text-[14px] font-semibold bg-[#F5F5F5] hover:bg-gradient-to-r from-[#622BB9] to-[#351A60] cursor-pointer hover:text-white">View More</Button>
          </div>
          <table className="min-w-[1000px] w-full text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-5 text-[#949494] border-t-0">Order ID</th>
                <th className="px-3 py-5 text-[#949494]">Buyer</th>
                <th className="px-3 py-5 text-[#949494]">Product</th>
                <th className="px-3 py-5 text-[#949494]">Amount</th>
                <th className="px-3 py-5 text-[#949494]">Date & Time</th>
                <th className="px-3 py-5 text-[#949494]">Payment Status</th>
                <th className="px-3 py-5 text-[#949494]">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentPurchases.map((purchase, index) => (
                <tr key={index} className="border-b">
                  <td className="px-3 py-2 font-medium text-gray-800">{purchase.id}</td>
                  <td className="px-3 py-2">
                    <div className="font-semibold text-gray-900">{purchase.name}</div>
                    <div className="text-gray-500 text-xs">{purchase.email}</div>
                  </td>
                  <td className="px-3 py-2">
                    <div>{purchase.product}</div>
                    <div className="text-xs text-gray-500">{purchase.info}</div>
                  </td>
                  <td className="px-3 py-2">{purchase.amount}</td>
                  <td className="px-3 py-2">
                    <div>{purchase.date}</div>
                    <div className="text-xs text-gray-500">{purchase.time}</div>
                  </td>
                  <td className="px-3 py-2">
                    <Badge
                      className={
                        purchase.paymentStatus === "Success"
                          ? "bg-[#12B64A] text-white"
                          : purchase.paymentStatus === "Pending"
                          ? "bg-[#FFC107] text-white"
                          : "bg-[#FF3D00] text-white"
                      }
                    >
                      {purchase.paymentStatus}
                    </Badge>

                  </td>
                  <td className="px-3 py-2">
                    <Button variant="outline" className="text-[14px] font-semibold bg-[#F5F5F5] hover:bg-gradient-to-r from-[#622BB9] to-[#351A60] cursor-pointer hover:text-white">View Order</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="overflow-x-auto p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Recent Wallet Funding</h2>
            <Button variant="outline" className="text-xs text-[14px] font-semibold bg-[#F5F5F5] hover:bg-gradient-to-r from-[#622BB9] to-[#351A60] cursor-pointer hover:text-white">View More</Button>
          </div>
          <table className="min-w-[1000px] w-full text-sm text-left border">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-5">Transaction ID</th>
                <th className="px-3 py-5">User</th>
                <th className="px-3 py-5">Amount</th>
                <th className="px-3 py-5">Date & Time</th>
                <th className="px-3 py-5">Status</th>
                <th className="px-3 py-5">Action</th>
              </tr>
            </thead>
            <tbody>
              {recentWalletFundings.map((funding, index) => (
                <tr key={index} className="border-b">
                  <td className="px-3 py-2 font-medium text-gray-800">{funding.id}</td>
                  <td className="px-3 py-2">
                    <div className="font-semibold text-gray-900">{funding.name}</div>
                    <div className="text-gray-500 text-xs">{funding.email}</div>
                  </td>
                  <td className="px-3 py-2">{funding.amount}</td>
                  <td className="px-3 py-2">
                    <div>{funding.date}</div>
                    <div className="text-xs text-gray-500">{funding.time}</div>
                  </td>
                  <td className="px-3 py-2">
                   <Badge
                      className={
                        funding.status === "Success"
                               ? "bg-[#12B64A] text-white"
                          : funding.status === "Pending"
                          ? "bg-[#FFC107] text-white"
                          : "bg-[#FF3D00] text-white"
                      }
                    >
                      {funding.status}
                    </Badge>
                  </td>
                  <td className="px-3 py-2">
                    <Button variant="outline" className="text-[14px] font-semibold bg-[#F5F5F5] hover:bg-gradient-to-r from-[#622BB9] to-[#351A60] cursor-pointer hover:text-white">View Payment</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
    </>

  );
};

export default AdminDashBoard;
