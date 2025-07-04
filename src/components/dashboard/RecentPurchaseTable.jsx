// src/components/dashboard/RecentPurchaseTable.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const RecentPurchaseTable = ({ data = [] }) => {
  return (
    <Card>
      <CardContent className="overflow-x-auto p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Recent Purchase</h2>
          <Button variant="outline" className="text-xs text-[14px] font-semibold bg-[#F5F5F5] hover:bg-gradient-to-r from-[#622BB9] to-[#351A60] cursor-pointer hover:text-white">
            View More
          </Button>
        </div>
        <table className="min-w-[1000px] w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-5 text-[#949494]">Order ID</th>
              <th className="px-3 py-5 text-[#949494]">Buyer</th>
              <th className="px-3 py-5 text-[#949494]">Product</th>
              <th className="px-3 py-5 text-[#949494]">Amount</th>
              <th className="px-3 py-5 text-[#949494]">Date & Time</th>
              <th className="px-3 py-5 text-[#949494]">Payment Status</th>
              <th className="px-3 py-5 text-[#949494]">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((purchase, index) => (
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
                  <Badge className={
                    purchase.paymentStatus === "Success" ? "bg-[#12B64A] text-white" :
                    purchase.paymentStatus === "Pending" ? "bg-[#FFC107] text-white" :
                    "bg-[#FF3D00] text-white"
                  }>
                    {purchase.paymentStatus}
                  </Badge>
                </td>
                <td className="px-3 py-2">
                  <Button variant="outline" className="text-[14px] font-semibold bg-[#F5F5F5] hover:bg-gradient-to-r from-[#622BB9] to-[#351A60] cursor-pointer hover:text-white">
                    View Order
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

export default RecentPurchaseTable;
