import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaChartLine } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import AdminAccountLayout from "../AdminAccount/AdminAccountLayout";
import Navbar from "../Header/Navbar";
import walletIcon from "../../assets/images/Total revenue.png";
import { RecentWalletFunding } from "../dashboard/data";
import getAdminFunding from "@/hooks/api/queries/super-admin/adminLogs/getAdminFunding";
import { getAdminOverview } from "@/hooks/api/queries/super-admin/adminLogs/getAdminInfos";
import Loader from "../Loader";

const AdminWalletManagementPage = () => {
  const { data: overview, isPending } = getAdminOverview();
  const [page, setPage] = useState(1);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const overviewData = overview?.data ?? {};
  const rawTrendData = overviewData?.fundVsSpend || [];

  const monthsMap = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const fundingTrendData = rawTrendData.map((item) => ({
    month: monthsMap[item.month],
    funding: item.funded,
    spending: item.spent,
  }));

  const maxValue =
    Math.max(
      ...fundingTrendData.map((item) => Math.max(item.funding, item.spending))
    ) || 1;

  const percentageData = fundingTrendData.map((item) => ({
    month: item.month,
    funding: (item.funding / maxValue) * 100,
    spending: (item.spending / maxValue) * 100,
    originalFunding: item.funding,
    originalSpending: item.spending,
  }));

  const { data: recentFund, isPending: fundPend } = getAdminFunding({
    page: page,
    limit: 10,
  });
  const recentFundData = recentFund?.data?.result || [];
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [showFilter, setShowFilter] = React.useState(false);

  const filteredData =
    statusFilter === "all"
      ? recentFundData
      : recentFundData.filter(
          (item) => item.status.toLowerCase() === statusFilter
        );

  const pageInfo = recentFund?.data?.pagedInfo || {};
  const totalPages = pageInfo?.totalPages || 1;

  const formatDate = (isoDate) => {
    const dateObj = new Date(isoDate);
    const date = dateObj.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    const time = dateObj.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return { date, time };
  };

  return (
    <AdminAccountLayout>
      <div className="">
        <Navbar />
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl">
          Payment & Wallet Management
        </h1>

        {/* Summary Cards and Chart Section */}
        {isPending ? (
          <Loader />
        ) : (
          <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6">
            {/* Summary Cards */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4 w-full lg:max-w-[450px]">
              <Card className="flex-1 min-w-0">
                <CardContent className="flex flex-col sm:flex-row justify-between items-center h-full p-3 sm:p-4 md:p-6">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-gray-500 truncate">
                      Total Amount Funded
                    </p>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mt-1 truncate">
                      ₦{overviewData?.totalFunded?.toLocaleString() || "0"}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 truncate">
                      All-time user deposits
                    </p>
                  </div>
                  <img
                    src={walletIcon}
                    alt="Total revenue icon"
                    className="mt-2 sm:mt-0 sm:ml-4"
                    style={{ height: "36px", width: "36px", minWidth: "36px" }}
                  />
                </CardContent>
              </Card>

              <Card className="flex-1 min-w-0">
                <CardContent className="flex flex-col sm:flex-row justify-between items-center h-full p-3 sm:p-4 md:p-6">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-gray-500 truncate">
                      Available Wallet Funds
                    </p>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mt-1 truncate">
                      ₦
                      {overviewData?.availableWalletFunds?.toLocaleString() ||
                        "0"}
                    </h2>

                    {/* <div className="flex items-center gap-1 sm:gap-2 mt-1 flex-wrap">
                    <Badge className="bg-green-100 text-green-700 text-xs">
                      +13%
                    </Badge>
                    <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                      since last month
                    </span>
                  </div> */}
                  </div>
                  <img
                    src={walletIcon}
                    alt="Total revenue icon"
                    className="mt-2 sm:mt-0 sm:ml-4"
                    style={{ height: "36px", width: "36px", minWidth: "36px" }}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Chart Card */}
            <Card className="flex-1 min-w-0">
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <FaChartLine className="text-purple-700 text-sm md:text-base" />
                  <h2 className="text-sm sm:text-base md:text-lg font-semibold">
                    Funding Trend Chart
                  </h2>
                </div>

                <div className="h-[180px] sm:h-[220px] md:h-[250px] lg:h-[220px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={percentageData}>
                      <CartesianGrid strokeDasharray="0" vertical={false} />
                      <XAxis
                        dataKey="month"
                        tick={{ fontSize: 10 }}
                        tickMargin={8}
                      />
                      <YAxis
                        domain={[20, 100]}
                        ticks={[20, 40, 60, 80, 100]}
                        tickFormatter={(value) => `${value}%`}
                        tick={{ fontSize: 10 }}
                        tickMargin={8}
                      />
                      <Tooltip
                        formatter={(value, name) => {
                          const dataItem = percentageData.find((item) =>
                            name === "funding"
                              ? item.funding === value
                              : item.spending === value
                          );
                          const originalValue =
                            name === "funding"
                              ? dataItem?.originalFunding
                              : dataItem?.originalSpending;

                          return [
                            `₦${originalValue?.toLocaleString() || 0}`,
                            `${value.toFixed(0)}%`,
                          ];
                        }}
                        labelFormatter={(label) => `Month: ${label}`}
                        contentStyle={{
                          fontSize: "12px",
                          borderRadius: "8px",
                          padding: "6px 10px",
                        }}
                      />
                      <Legend
                        wrapperStyle={{
                          paddingTop: "8px",
                          fontSize: "12px",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="funding"
                        stroke="#12B64A"
                        strokeWidth={2}
                        name="Funding"
                        dot={false}
                        activeDot={false}
                      />
                      <Line
                        type="monotone"
                        dataKey="spending"
                        stroke="#FF2D55"
                        strokeWidth={2}
                        name="Spending"
                        dot={false}
                        activeDot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Wallet Fundings Table */}
        <Card>
          <CardContent className="p-1 sm:p-2 md:p-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 sm:mb-3 md:mb-4 gap-2">
              <h2 className="text-base sm:text-lg md:text-xl font-bold">
                User Wallets Funding
              </h2>
              <div className="relative inline-block">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs sm:text-sm"
                  onClick={() => setShowFilter((prev) => !prev)}
                >
                  Filter by status
                </Button>

                {showFilter && (
                  <div className="absolute z-10 mt-2 w-36 rounded-md border bg-white shadow-md text-sm">
                    <div
                      className="cursor-pointer px-3 py-2 hover:bg-gray-100"
                      onClick={() => {
                        setStatusFilter("all");
                        setShowFilter(false);
                      }}
                    >
                      All
                    </div>
                    <div
                      className="cursor-pointer px-3 py-2 hover:bg-gray-100"
                      onClick={() => {
                        setStatusFilter("pending");
                        setShowFilter(false);
                      }}
                    >
                      Pending
                    </div>
                    <div
                      className="cursor-pointer px-3 py-2 hover:bg-gray-100"
                      onClick={() => {
                        setStatusFilter("success");
                        setShowFilter(false);
                      }}
                    >
                      Success
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Table Data: Loading, Empty, or Populated */}
            {fundPend ? (
              <div className="flex justify-center items-center py-10">
                <Loader />
              </div>
            ) : filteredData.length === 0 ? (
              <div className="text-center py-10 text-gray-500 text-sm sm:text-base">
                No wallet funding records found.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-2 py-2 sm:px-3 sm:py-3 text-left whitespace-nowrap">
                        Transaction ID
                      </th>
                      <th className="px-2 py-2 sm:px-3 sm:py-3 text-left whitespace-nowrap">
                        User Name & Email
                      </th>
                      <th className="px-2 py-2 sm:px-3 sm:py-3 text-left whitespace-nowrap">
                        Amount
                      </th>
                      <th className="px-2 py-2 sm:px-3 sm:py-3 text-left whitespace-nowrap">
                        Date
                      </th>
                      <th className="px-2 py-2 sm:px-3 sm:py-3 text-left whitespace-nowrap">
                        Status
                      </th>
                      <th className="px-2 py-2 sm:px-3 sm:py-3 text-left whitespace-nowrap">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredData.map((funding, index) => {
                      const { date, time } = formatDate(funding.createdAt);
                      return (
                        <tr key={funding._id}>
                          <td className="px-2 py-2 sm:px-3 sm:py-3 font-medium text-gray-800 whitespace-nowrap">
                            {funding.transactionId}
                          </td>
                          <td className="px-2 py-2 sm:px-3 sm:py-3">
                            <div className="font-semibold text-gray-900 truncate max-w-[120px] sm:max-w-none">
                              Unknown User
                            </div>
                            <div className="text-gray-500 text-xs truncate max-w-[120px] sm:max-w-none">
                              ID: {funding.userId}
                            </div>
                          </td>
                          <td className="px-2 py-2 sm:px-3 sm:py-3 whitespace-nowrap">
                            ₦{funding.amount.toLocaleString()}
                          </td>
                          <td className="px-2 py-2 sm:px-3 sm:py-3 whitespace-nowrap">
                            <div>{date}</div>
                            <div className="text-xs text-gray-500">{time}</div>
                          </td>
                          <td className="px-2 py-2 sm:px-3 sm:py-3 whitespace-nowrap">
                            <Badge
                              className={
                                funding.status.toLowerCase() === "success"
                                  ? "bg-[#12B64A] text-white"
                                  : funding.status.toLowerCase() === "pending"
                                  ? "bg-[#FFC107] text-white"
                                  : "bg-[#FF3D00] text-white"
                              }
                            >
                              {funding.status}
                            </Badge>
                          </td>
                          <td className="px-2 py-2 sm:px-3 sm:py-3 whitespace-nowrap">
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-xs sm:text-sm font-semibold bg-[#F5F5F5] hover:bg-gradient-to-r from-[#622BB9] to-[#351A60] hover:text-white"
                            >
                              View Payment
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}

            {/* Pagination */}
            <div className="mt-2 sm:mt-3 md:mt-4 flex justify-end flex-wrap gap-1 sm:gap-2 items-center">
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm"
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={!pageInfo?.hasPrevious || page === 1}
              >
                Previous
              </Button>

              {/* Dynamically render numbered pages */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNum) => (
                  <Button
                    key={pageNum}
                    variant={pageNum === page ? "default" : "outline"}
                    size="sm"
                    className="text-xs sm:text-sm"
                    onClick={() => setPage(pageNum)}
                  >
                    {pageNum}
                  </Button>
                )
              )}

              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm"
                onClick={() =>
                  setPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={!pageInfo?.hasNext || page === totalPages}
              >
                Next
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminAccountLayout>
  );
};

export default AdminWalletManagementPage;
