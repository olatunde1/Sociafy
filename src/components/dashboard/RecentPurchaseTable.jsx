import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { getAdminOrders } from "@/hooks/api/queries/super-admin/adminLogs/getAdminInfos";
import Loader from "../Loader";

const RecentPurchaseTable = () => {
  const { data: orders, isPending } = getAdminOrders();

  const mappedData =
    orders?.data?.result?.map((item) => ({
      id: item._id,
      name: "Unknown Buyer",
      email: "",
      product: item.product,
      info: "",
      amount: item.amount,
      date: format(new Date(item.createdAt), "MMMM d, yyyy"),
      time: format(new Date(item.createdAt), "h:mm a"),
      paymentStatus:
        item.status === "success"
          ? "Success"
          : item.status === "pending"
          ? "Pending"
          : "Failed",
    })) || [];

  return (
    <Card className="w-full">
      <CardContent className="p-0">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border-b gap-2">
          <h2 className="text-lg sm:text-xl font-bold">Recent Purchases</h2>
          <Button
            variant="outline"
            size="sm"
            className="text-xs sm:text-sm font-medium bg-[#F5F5F5] hover:bg-gradient-to-r from-[#622BB9] to-[#351A60] hover:text-white"
          >
            View More
          </Button>
        </div>

        {isPending ? (
          <Loader />
        ) : (
          <>
            {/* Mobile Cards View */}
            <div className="sm:hidden space-y-2 p-2">
              {mappedData.map((purchase, index) => (
                <Card key={index} className="p-3">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-gray-900">
                          #{purchase.id}
                        </p>
                        <p className="text-sm text-gray-500">
                          {purchase.date} • {purchase.time}
                        </p>
                      </div>
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
                    </div>

                    <div className="border-t pt-2">
                      <p className="font-medium">{purchase.product}</p>
                      <p className="text-xs text-gray-500">{purchase.info}</p>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">
                          ₦{purchase.amount.toLocaleString()}
                        </p>
                        <p className="text-xs text-gray-500">{purchase.name}</p>
                      </div>
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
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Buyer
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date & Time
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Payment
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {mappedData.map((purchase, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-3 py-3 whitespace-nowrap font-medium text-gray-900">
                        #{purchase.id}
                      </td>
                      <td className="px-3 py-3">
                        <div className="font-medium">{purchase.name}</div>
                        <div className="text-xs text-gray-500">
                          {purchase.email}
                        </div>
                      </td>
                      <td className="px-3 py-3">
                        <div className="font-medium">{purchase.product}</div>
                        <div className="text-xs text-gray-500">
                          {purchase.info}
                        </div>
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap font-medium">
                        ₦{purchase.amount.toLocaleString()}
                      </td>
                      <td className="px-3 py-3">
                        <div>{purchase.date}</div>
                        <div className="text-xs text-gray-500">
                          {purchase.time}
                        </div>
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap">
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
                      <td className="px-3 py-3 whitespace-nowrap">
                        <Button
                          variant="outline"
                          size="sm"
                          className="font-medium bg-[#F5F5F5] hover:bg-gradient-to-r from-[#622BB9] to-[#351A60] hover:text-white"
                        >
                          View Order
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentPurchaseTable;
