// src/components/dashboard/RecentWalletFundingTable.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const RecentWalletFundingTable = ({ data = [] }) => {
  return (
    <Card>
      <CardContent className="overflow-x-auto p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Recent Wallet Funding</h2>
          <Button variant="outline" className="text-xs text-[14px] font-semibold bg-[#F5F5F5] hover:bg-gradient-to-r from-[#622BB9] to-[#351A60] cursor-pointer hover:text-white">
            View More
          </Button>
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
            {data.map((funding, index) => (
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
                  <Badge className={
                    funding.status === "Success" ? "bg-[#12B64A] text-white" :
                    funding.status === "Pending" ? "bg-[#FFC107] text-white" :
                    "bg-[#FF3D00] text-white"
                  }>
                    {funding.status}
                  </Badge>
                </td>
                <td className="px-3 py-2">
                  <Button variant="outline" className="text-[14px] font-semibold bg-[#F5F5F5] hover:bg-gradient-to-r from-[#622BB9] to-[#351A60] cursor-pointer hover:text-white">
                    View Payment
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default RecentWalletFundingTable;
