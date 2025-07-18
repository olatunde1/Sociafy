import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { getAdminOrders } from "@/hooks/api/queries/super-admin/adminLogs/getAdminInfos";
import Loader from "../Loader";
import AdminViewOrder from "./AdminViewOrderDetails"; // Import the AdminViewOrder component

const RecentPurchaseTable = ({title = "All orders"}) => {
  const { data: orders, isPending } = getAdminOrders();
  const [searchValue, setSearchValue] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      rawData: item, // Keep the raw data for the modal
    })) || [];

  const filteredData = mappedData.filter((item) => {
    const query = searchValue.toLowerCase().trim();
    return (
      item.name.toLowerCase().includes(query) ||
      item.product.toLowerCase().includes(query) ||
      item.paymentStatus.toLowerCase().includes(query) ||
      item.amount.toString().includes(query)
    );
  });

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  return (
    <>
      <Card className="w-full">
        <CardContent className="p-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border-b gap-2">
            <h2 className="text-lg text-center sm:text-left sm:text-xl font-bold">
              {title}
            </h2>

            <input
              type="text"
              placeholder="Filter..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="border px-3 py-1 rounded-md text-sm w-full sm:w-64"
            />
          </div>

          {isPending ? (
            <Loader />
          ) : (
            <>
              {/* Mobile View */}
              <div className="sm:hidden space-y-2 p-2">
                {filteredData.map((purchase, index) => (
                  <Card key={index} className="p-3">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-gray-900">#{purchase.id}</p>
                          <p className="text-sm text-gray-500">{purchase.date} • {purchase.time}</p>
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
                          onClick={() => handleViewOrder(purchase)}
                        >
                          View
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Desktop View */}
              <div className="hidden sm:block overflow-x-auto p-4">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Buyer</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Status</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredData.map((purchase, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-3 py-3 whitespace-nowrap font-medium text-gray-900">#{purchase.id}</td>
                        <td className="px-3 py-3">
                          <div className="font-medium">{purchase.name}</div>
                          <div className="text-xs text-gray-500">{purchase.email}</div>
                        </td>
                        <td className="px-3 py-3">
                          <div className="font-medium">{purchase.product}</div>
                          <div className="text-xs text-gray-500">{purchase.info}</div>
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap font-medium">₦{purchase.amount.toLocaleString()}</td>
                        <td className="px-3 py-3">
                          <div>{purchase.date}</div>
                          <div className="text-xs text-gray-500">{purchase.time}</div>
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
                            onClick={() => handleViewOrder(purchase)}
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

      {/* Modal */}
      {isModalOpen && selectedOrder && (
        <AdminViewOrder 
          onClose={handleCloseModal}
          orderData={selectedOrder}
        />
      )}
    </>
  );
};

export default RecentPurchaseTable;