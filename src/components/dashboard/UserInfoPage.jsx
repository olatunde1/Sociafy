import React, { useState} from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AdminAccountLayout from "../AdminAccount/AdminAccountLayout";
import Navbar from "../Header/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import UserWalletImage from "../../assets/images/userwalletimage.png";
import CardBackground from "../../assets/images/profile-background.png";
import walletIcon from "../../assets/images/Total revenue.png";
import {
  useAdminSingleUserOrders,
  useAdminSingleUserWallet,
} from "@/hooks/api/queries/super-admin/adminLogs/GetAdminInfos";
import { format } from "date-fns";

// const fundings = [
//   {
//     id: "TRF7894903",
//     amount: 30000,
//     date: "Feb 24, 2025",
//     time: "05:23pm",
//     status: "Success",
//   },
//   {
//     id: "TRF7894903",
//     amount: 24000,
//     date: "Feb 24, 2025",
//     time: "05:23pm",
//     status: "Pending",
//   },
//   {
//     id: "TRF7894903",
//     amount: 16000,
//     date: "Feb 24, 2025",
//     time: "05:23pm",
//     status: "Success",
//   },
//   {
//     id: "TRF7894903",
//     amount: 25000,
//     date: "Feb 24, 2025",
//     time: "05:23pm",
//     status: "Failed",
//   },
// ];

const UserInfoPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  // console.log(user, "info");

  // Redirect if user data is missing
  React.useEffect(() => {
    if (!user) {
      navigate("/admin/users-admin");
    }
  }, [user, navigate]);

  // const { data: singleUser } = getAdminSingleUser(user?._id);
  const [walletPage, setWalletPage] = useState(1);
  const { data: singleWallet, isPending: walletPend } =
    useAdminSingleUserWallet(user?._id, { page: walletPage });
  const [orderPage, setOrderPage] = useState(1);
  const { data: singleOrder, isPending: orderPend } = useAdminSingleUserOrders(
    user?._id,
    {
      page: orderPage,
    }
  );

  const orders = singleOrder?.data?.result || [];
  const pagedInfo = singleOrder?.data?.pagedInfo;
  const totalOrderPages = pagedInfo?.totalPages || 1;

  const walletFundings = singleWallet?.data?.result || [];
  const walletPagedInfo = singleWallet?.data?.pagedInfo;
  const totalWalletPages = walletPagedInfo?.totalPages || 1;

  const renderPagination = (currentPage, totalPages, onPageChange) => (
    <div className="flex justify-end gap-2 mt-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || orderPend}
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
            <CardContent className="absolute bottom-0 left-0 right-0 p-4 sm:pl-6 h-[160px] text-black bg-white">
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
                  <p className="text-xs pt-3.5">
                    Joined:{" "}
                    {user?.createdAt
                      ? format(new Date(user.createdAt), "MMM, dd, yyyy")
                      : ""}
                  </p>
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
                <h2 className="text-2xl font-bold pt-2">
                  ₦{user?.wallet?.walletBalance ?? "0"}
                </h2>
              </div>
              <img
                src={walletIcon}
                alt="Total revenue icon"
                className="ml-4"
                style={{ height: "40px", width: "40px" }}
              />
            </div>
            <div className="flex justify-between py-[33px] px-6 rounded-2xl shadow-xl border border-gray-200">
              <div>
                <p className="text-xs text-gray-400">Total Spent</p>
                <h2 className="text-xl font-semibold pt-2">
                  ₦{user?.totalSpent ?? "0"}
                </h2>
              </div>
              <img
                src={walletIcon}
                alt="Total revenue icon"
                className="ml-4"
                style={{ height: "40px", width: "40px" }}
              />
            </div>
          </div>
        </div>

        {/* Order History */}
        {/* Order History */}
        <Card className="shadow-xl mt-8">
          <CardContent className="overflow-x-auto p-4">
            <h2 className="font-semibold mb-4">
              Order History ({pagedInfo?.total || 0})
            </h2>

            {orderPend ? (
              <p>Loading order history...</p>
            ) : orders.length === 0 ? (
              <p className="text-gray-500">No order history available.</p>
            ) : (
              <>
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
                    {orders.map((order) => (
                      <tr key={order._id} className="border-b hover:bg-gray-50">
                        <td className="p-3">{order.product}</td>
                        <td className="p-3">
                          ₦{order.amount.toLocaleString()}
                        </td>
                        <td className="p-3">
                          <div>
                            {format(new Date(order.createdAt), "MMM dd, yyyy")}
                          </div>
                          <div className="text-xs text-gray-500">
                            {format(new Date(order.createdAt), "hh:mm a")}
                          </div>
                        </td>
                        <td className="p-3">
                          <Button size="sm" variant="outline">
                            View Info
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {renderPagination(orderPage, totalOrderPages, setOrderPage)}
              </>
            )}
          </CardContent>
        </Card>

        {/* Wallet Funding */}
        <Card className="shadow-xl mt-10">
          <CardContent className="p-4 overflow-x-auto">
            <h2 className="font-semibold mb-4">Wallet Funding History</h2>
            {walletPend ? (
              <p>Loading wallet funding history...</p>
            ) : walletFundings.length === 0 ? (
              <p className="text-gray-500">
                No wallet funding history available.
              </p>
            ) : (
              <>
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
                    {walletFundings.map((item) => (
                      <tr key={item._id} className="border-b hover:bg-gray-50">
                        <td className="p-3">{item.transactionId}</td>
                        <td className="p-3">₦{item.amount.toLocaleString()}</td>
                        <td className="p-3">
                          <div>
                            {format(new Date(item.createdAt), "MMM dd, yyyy")}
                          </div>
                          <div className="text-xs text-gray-500">
                            {format(new Date(item.createdAt), "hh:mm a")}
                          </div>
                        </td>
                        <td className="p-3">
                          <Badge
                            className={
                              item.status === "success"
                                ? "bg-[#12B64A] text-white"
                                : item.status === "pending"
                                ? "bg-[#FFC107] text-white"
                                : "bg-[#FF3D00] text-white"
                            }
                          >
                            {item.status.charAt(0).toUpperCase() +
                              item.status.slice(1)}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {renderPagination(walletPage, totalWalletPages, setWalletPage)}
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminAccountLayout>
  );
};

export default UserInfoPage;
