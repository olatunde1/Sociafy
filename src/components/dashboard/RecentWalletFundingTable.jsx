import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const RecentWalletFundingTable = ({ data = [] }) => {
  return (
    <Card className="w-full">
      <CardContent className="p-0">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border-b gap-2">
          <h2 className="text-lg sm:text-xl font-bold">Recent Wallet Funding</h2>
          <Button
            variant="outline"
            size="sm"
            className="text-xs sm:text-sm font-medium bg-[#F5F5F5] hover:bg-gradient-to-r from-[#622BB9] to-[#351A60] hover:text-white"
          >
            View More
          </Button>
        </div>

        {/* Mobile Cards View */}
        <div className="sm:hidden space-y-2 p-2">
          {data.map((funding, index) => (
            <Card key={index} className="p-3">
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">#{funding.id}</p>
                    <p className="text-sm text-gray-500">{funding.date} • {funding.time}</p>
                  </div>
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
                </div>

                <div className="border-t pt-2">
                  <p className="font-medium">{funding.name}</p>
                  <p className="text-xs text-gray-500">{funding.email}</p>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium">₦{funding.amount.toLocaleString()}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs font-medium bg-[#F5F5F5] hover:bg-gradient-to-r from-[#622BB9] to-[#351A60] hover:text-white"
                  >
                    View
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden sm:block overflow-x-auto p-4">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((funding, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-3 py-3 whitespace-nowrap font-medium text-gray-900">#{funding.id}</td>
                  <td className="px-3 py-3">
                    <div className="font-medium">{funding.name}</div>
                    <div className="text-xs text-gray-500">{funding.email}</div>
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap font-medium">₦{funding.amount.toLocaleString()}</td>
                  <td className="px-3 py-3">
                    <div>{funding.date}</div>
                    <div className="text-xs text-gray-500">{funding.time}</div>
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap">
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
                  <td className="px-3 py-3 whitespace-nowrap">
                    <Button
                      variant="outline"
                      size="sm"
                      className="font-medium bg-[#F5F5F5] hover:bg-gradient-to-r from-[#622BB9] to-[#351A60] hover:text-white"
                    >
                      View Payment
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentWalletFundingTable;