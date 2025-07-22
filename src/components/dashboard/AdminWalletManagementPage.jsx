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
import useAdminFunding from "@/hooks/api/queries/super-admin/adminLogs/GetAdminFunding";
import { useAdminOverview } from "@/hooks/api/queries/super-admin/adminLogs/GetAdminInfos";
import Loader from "../Loader";
import AdminUserWalletFundingDetails from "./AdminUserWalletFundingDetails";

const AdminWalletManagementPage = () => {
  const { data: overview, isPending } = useAdminOverview();
  const [page, setPage] = useState(1);
  const [selectedFunding, setSelectedFunding] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const overviewData = overview?.data ?? {};
  const rawTrendData = overviewData?.fundVsSpend || [];

  const monthsMap = [
    "", "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const fundingTrendData = rawTrendData.map((item) => ({
    month: monthsMap[item.month],
    funding: item.funded,
    spending: item.spent,
  }));

  const maxValue = Math.max(
    ...fundingTrendData.map((item) => Math.max(item.funding, item.spending))
  ) || 1;

  const percentageData = fundingTrendData.map((item) => ({
    month: item.month,
    funding: (item.funding / maxValue) * 100,
    spending: (item.spending / maxValue) * 100,
    originalFunding: item.funding,
    originalSpending: item.spending,
  }));

  const { data: recentFund, isPending: fundPend } = useAdminFunding({
    page: page,
    limit: 10,
  });
  const recentFundData = recentFund?.data?.result || [];
  const [statusFilter, setStatusFilter] = useState("all");
  const [showFilter, setShowFilter] = useState(false);

  const filteredData = statusFilter === "all"
    ? recentFundData
    : recentFundData.filter(item => item.status.toLowerCase() === statusFilter);

  const pageInfo = recentFund?.data?.pagedInfo || {};
  const totalPages = pageInfo?.totalPages || 1;

  const formatDate = (isoDate) => {
    const dateObj = new Date(isoDate);
    return {
      date: dateObj.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      time: dateObj.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      })
    };
  };

  const handleViewPayment = (funding) => {
    setSelectedFunding(funding);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <AdminAccountLayout>
      <div className="relative">
        <Navbar />
        <h1 className="text-lg font-bold md:text-xl lg:text-2xl">
          Payment & Wallet Management
        </h1>

        {/* Summary Cards and Chart Section */}
        {isPending ? (
          <Loader />
        ) : (
          <div className="flex flex-col gap-3 md:gap-4 lg:flex-row lg:gap-6">
            {/* Summary Cards - Stack vertically on mobile */}
            <div className="flex flex-col gap-3 w-full md:flex-row lg:flex-col lg:max-w-[450px]">
              <Card className="flex-1">
                <CardContent className="flex flex-col items-center p-3 sm:flex-row sm:justify-between sm:p-4 md:p-6">
                  <div className="flex-1 min-w-0 text-center sm:text-left">
                    <p className="text-xs text-gray-500 sm:text-sm">Total Amount Funded</p>
                    <h2 className="text-xl font-bold text-gray-900 mt-1 sm:text-2xl md:text-3xl">
                      ₦{overviewData?.totalFunded?.toLocaleString() || "0"}
                    </h2>
                    <p className="text-xs text-gray-500 mt-1 sm:text-sm">All-time user deposits</p>
                  </div>
                  <img
                    src={walletIcon}
                    alt="Total revenue icon"
                    className="mt-2 w-9 h-9 sm:mt-0 sm:ml-4"
                  />
                </CardContent>
              </Card>

              <Card className="flex-1">
                <CardContent className="flex flex-col items-center p-3 sm:flex-row sm:justify-between sm:p-4 md:p-6">
                  <div className="flex-1 min-w-0 text-center sm:text-left">
                    <p className="text-xs text-gray-500 sm:text-sm">Available Wallet Funds</p>
                    <h2 className="text-xl font-bold text-gray-900 mt-1 sm:text-2xl md:text-3xl">
                      ₦{overviewData?.availableWalletFunds?.toLocaleString() || "0"}
                    </h2>
                  </div>
                  <img
                    src={walletIcon}
                    alt="Total revenue icon"
                    className="mt-2 w-9 h-9 sm:mt-0 sm:ml-4"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Chart Card - Full width on mobile */}
      
<Card className="flex-1 min-w-0">
  <CardContent className="p-3 sm:p-4">
    <div className="flex items-center gap-2 mb-2 sm:mb-3">
      <FaChartLine className="text-purple-700 text-sm md:text-base" />
      <h2 className="text-sm font-semibold sm:text-base md:text-lg">
        Funding Trend Chart
      </h2>
    </div>

    {/* Chart Container - Critical fix */}
    <div className="w-full" style={{ height: '200px' }}>
      {percentageData.length > 0 ? (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={percentageData}
            margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="month"
              tick={{ fontSize: 10 }}
              tickMargin={8}
            />
            <YAxis
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
              tick={{ fontSize: 10 }}
              tickMargin={8}
            />
            <Tooltip
              formatter={(value, name) => {
                const dataItem = percentageData.find(item => 
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
                  `${name === "funding" ? "Funding" : "Spending"}`
                ];
              }}
              labelFormatter={(label) => `Month: ${label}`}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="funding"
              stroke="#12B64A"
              strokeWidth={2}
              name="Funding"
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="spending"
              stroke="#FF2D55"
              strokeWidth={2}
              name="Spending"
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <div className="flex items-center justify-center h-full text-gray-500">
          No chart data available
        </div>
      )}
    </div>
  </CardContent>
</Card>
          </div>
        )}

        {/* Wallet Fundings Table */}
        <Card className="mt-4">
          <CardContent className="p-2 sm:p-3 md:p-4">
            <div className="flex flex-col justify-between gap-2 mb-3 sm:flex-row sm:items-center md:mb-4">
              <h2 className="text-base font-bold sm:text-lg md:text-xl">
                User Wallets Funding
              </h2>
              <div className="relative inline-block">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs sm:text-sm"
                  onClick={() => setShowFilter(!showFilter)}
                >
                  Filter by status
                </Button>
                {showFilter && (
  <div className="absolute z-10 mt-2 w-36 rounded-md border bg-white shadow-md text-sm">
    {["all", "success", "pending", "failed"].map((status) => (
      <button
        key={status}
        onClick={() => {
          setStatusFilter(status);
          setShowFilter(false);
        }}
        className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
          statusFilter === status ? "bg-gray-100 font-medium" : ""
        }`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </button>
    ))}
  </div>
)}

              </div>
            </div>

            {/* Table - Scroll horizontally on mobile */}
            {fundPend ? (
              <div className="flex justify-center items-center py-10">
                <Loader />
              </div>
            ) : filteredData.length === 0 ? (
              <div className="py-10 text-sm text-center text-gray-500 sm:text-base">
                No wallet funding records found.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-2 py-2 text-left sm:px-3 sm:py-3">Transaction ID</th>
                      <th className="px-2 py-2 text-left sm:px-3 sm:py-3">User Name & Email</th>
                      <th className="px-2 py-2 text-left sm:px-3 sm:py-3">Amount</th>
                      <th className="px-2 py-2 text-left sm:px-3 sm:py-3">Date</th>
                      <th className="px-2 py-2 text-left sm:px-3 sm:py-3">Status</th>
                      <th className="px-2 py-2 text-left sm:px-3 sm:py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredData.map((funding) => {
                      const { date, time } = formatDate(funding.createdAt);
                      return (
                        <tr key={funding._id}>
                          <td className="px-2 py-2 font-medium text-gray-800 sm:px-3 sm:py-3">
                            {funding.transactionId}
                          </td>
                          <td className="px-2 py-2 sm:px-3 sm:py-3">
                            <div className="font-semibold text-gray-900 truncate max-w-[120px] sm:max-w-none">
                              {funding.userId?.username || "Unknown User"}
                            </div>
                            <div className="text-gray-500 text-xs truncate max-w-[120px] sm:max-w-none">
                              ID: {funding?.userId?._id}
                            </div>
                          </td>
                          <td className="px-2 py-2 sm:px-3 sm:py-3">
                            ₦{funding.amount.toLocaleString()}
                          </td>
                          <td className="px-2 py-2 sm:px-3 sm:py-3">
                            <div>{date}</div>
                            <div className="text-xs text-gray-500">{time}</div>
                          </td>
                          <td className="px-2 py-2 sm:px-3 sm:py-3">
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
                          <td className="px-2 py-2 sm:px-3 sm:py-3">
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-xs font-semibold bg-[#F5F5F5] sm:text-sm hover:bg-gradient-to-r from-[#622BB9] to-[#351A60] hover:text-white"
                              onClick={() => handleViewPayment(funding)}
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

            {/* Pagination - Stack on small screens */}
            <div className="flex flex-wrap justify-end gap-1 mt-3 items-center sm:gap-2 sm:mt-4">
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm"
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={!pageInfo?.hasPrevious || page === 1}
              >
                Previous
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <Button
                  key={pageNum}
                  variant={pageNum === page ? "default" : "outline"}
                  size="sm"
                  className="text-xs sm:text-sm"
                  onClick={() => setPage(pageNum)}
                >
                  {pageNum}
                </Button>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm"
                onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={!pageInfo?.hasNext || page === totalPages}
              >
                Next
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Modal - Full screen on mobile */}
      {/* Modal - Slide in from right, mobile-first responsive */}

        <div
          className={`fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 ${
            isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
              isModalOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleCloseModal}
          />

          {/* Slide-out Panel */}
          <div
            className={`fixed inset-y-0 right-0 flex max-w-full transition-transform duration-300 ease-in-out ${
              isModalOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="relative w-full max-w-md sm:w-screen sm:max-w-[720px]">
              <div className="h-full flex flex-col bg-white shadow-xl overflow-y-auto">
                {selectedFunding && (
                  <AdminUserWalletFundingDetails
                    funding={selectedFunding}
                    onClose={handleCloseModal}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </AdminAccountLayout>
  );
};

export default AdminWalletManagementPage;