import { useState } from "react";
import WalletIcon from "../../assets/images/wallet-logo.png";
import FundWallet from "../../assets/images/fund-wallet.png";
import FundWalletModal from "./FundWalletModal";
import { useUserOverview } from "@/hooks/api/queries/user/dashboard/getOverview";
import { usePayment } from "@/hooks/api/queries/user/dashboard/getHistories";
import Loader from "../Loader";

export default function WalletPage() {
  const [currentPage, setCurrentPage] = useState(1);
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  const itemsPerPage = 7;

  const onPageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  const { data: userOverview, isPending } = useUserOverview();
  const OverviewData = userOverview?.data;

  const { data: paymentHistory } = usePayment();
  const paymentData = paymentHistory?.data?.result || [];

  const paginatedTopUps = paymentData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(paymentData.length / itemsPerPage);

  const [open, setOpen] = useState(false);


  return (
    <main className="my-5">
      <div className="flex grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-lg shadow w-full md:w-[365px]">
          <img src={WalletIcon} alt="" className="px-5 pt-3" />
          <h3 className="text-lg font-semibold text-[#7B36E7] mb-4 py-3 px-5">
            Wallet Balance
          </h3>
          <p className="text-2xl px-5 py-3 font-bold text-white bg-[#292E35] rounded-br-lg rounded-bl-lg">
            NGN {OverviewData?.walletBalance || "0"}
          </p>
        </div>

        <div
          onClick={() => setOpen(true)}
          className="bg-[#EBE1FB] rounded-2xl shadow flex flex-col items-start text-center w-full md:w-[180px]"
        >
          <img
            src={FundWallet}
            alt="fund-wallet"
            className="mx-12 mt-6 mb-3.5"
          />
          <h3 className="text-lg font-semibold text-gray-700 px-10">
            Fund Wallet
          </h3>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Top-Up History
        </h3>
        {isPending ? (
          <Loader />
        ) : paginatedTopUps.length > 0 ? (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-100 text-gray-700 uppercase">
                  <tr>
                    <th className="px-4 py-2">Transaction ID</th>
                    <th className="px-4 py-2">Amount</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedTopUps.map((item) => (
                    <tr key={item._id} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border-b border-[#EDF2F7]">
                        {item.transactionId}
                      </td>
                      <td className="px-4 py-2 border-b border-[#EDF2F7]">
                        ₦{item.amount.toLocaleString()}
                      </td>
                      <td className="px-4 py-2 border-b border-[#EDF2F7]">
                        {new Date(item.createdAt).toLocaleDateString("en-NG")}
                      </td>
                      <td className="px-4 py-2 border-b border-[#EDF2F7]">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            item.status === "success"
                              ? "bg-green-100 text-green-600"
                              : item.status === "failed"
                              ? "bg-red-700 text-white"
                              : "bg-yellow-100 text-yellow-600"
                          }`}
                        >
                          {item.status.charAt(0).toUpperCase() +
                            item.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <nav
              aria-label="Pagination"
              className="flex justify-end mt-6 gap-2 text-sm overflow-x-auto"
            >
              <ul className="flex gap-2 items-center">
                <li>
                  <button
                    className="px-3 py-1 rounded text-gray-700 hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                  >
                    Previous
                  </button>
                </li>

                {renderPageNumbers().map((page, index) => (
                  <li key={index}>
                    <button
                      className={`px-3 py-1 rounded ${
                        currentPage === page
                          ? "bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white font-semibold"
                          : "border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                      }`}
                      onClick={() => onPageChange(page)}
                      aria-current={currentPage === page ? "page" : undefined}
                    >
                      {page}
                    </button>
                  </li>
                ))}

                <li>
                  <button
                    className="px-3 py-1 rounded text-gray-700 hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </>
        ) : (
          <tr>
            <td className="px-4 py-2 border text-center" colSpan="4">
              No top-up history available.
            </td>
          </tr>
        )}
      </div>

      {open && <FundWalletModal isOpen={open} onClose={() => setOpen(false)} />}
    </main>
  );
}
