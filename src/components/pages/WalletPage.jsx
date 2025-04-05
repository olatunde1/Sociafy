import { useState } from "react";
import { FaUserCircle,FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";
import Castine from '../../assets/images/castine.png'
import WalletIcon from '../../assets/images/wallet-logo.png'
import FundWallet from '../../assets/images/fund-wallet.png'
import { Link } from "react-router-dom";

export default function WalletPage() {

  const [currentPage, setCurrentPage] = useState(1);
const totalPages = 3; // Adjust this based on how many pages you have

const onPageChange = (page) => {
  if (page > 0 && page <= totalPages) {
    setCurrentPage(page);
    // Optional: implement filtering for currentPage here
  }
};

const renderPageNumbers = () => {
  // Example: just render 3 pages, adjust as needed
  return [1, 2, 3];
};


  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const user = {
    name: "Castine",
    email: "castiin@sociafy.com",
    balance: "NGN 179,000",
    image: Castine,
  };

  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Accounts", path: "/accounts" },
    { name: "My Purchased", path: "/my-purchased" },
    { name: "Wallet", path: "/wallet" },
    { name: "Rules", path: "/rules" },
    { name: "Support", path: "/support" },
    { name: "My Profile", path: "/profile" },
    { name: "Sign Out", path: "/sign-out" },
  ];

  const topUpHistory = [
    {
      id: "TXN123456",
      amount: "₦10,000",
      date: "2025-04-01",
      status: "Successful",
    },
    {
      id: "TXN123457",
      amount: "₦5,000",
      date: "2025-03-28",
      status: "Pending",
    },
    {
      id: "TXN123456",
      amount: "₦10,000",
      date: "2025-04-01",
      status: "Successful",
    },
    {
      id: "TXN123457",
      amount: "₦5,000",
      date: "2025-03-28",
      status: "Pending",
    },
    {
      id: "TXN123456",
      amount: "₦10,000",
      date: "2025-04-01",
      status: "Successful",
    },
    {
      id: "TXN123457",
      amount: "₦5,000",
      date: "2025-03-28",
      status: "Pending",
    },
    {
      id: "TXN123456",
      amount: "₦10,000",
      date: "2025-04-01",
      status: "Successful",
    },
    {
      id: "TXN123456",
      amount: "₦10,000",
      date: "2025-04-01",
      status: "Failed",
    },
    {
      id: "TXN123457",
      amount: "₦5,000",
      date: "2025-03-28",
      status: "Pending",
    },
    {
      id: "TXN123456",
      amount: "₦10,000",
      date: "2025-04-01",
      status: "Successful",
    },
    {
      id: "TXN123457",
      amount: "₦5,000",
      date: "2025-03-28",
      status: "Pending",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
       {/* Sidebar Toggler */}
       <div className="md:hidden flex justify-between items-center p-4 bg-white shadow-md">
        <img src={Logo} alt="Logo" className="h-8" />
        <button onClick={toggleSidebar} className="text-xl">
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col justify-between">
      <div>
        <img src={Logo} alt="Logo" className="h-10 w-auto mb-18" />
        <nav className="space-y-4">
          {menuItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className={`block text-gray-700 hover:text-purple-700 font-medium ${item.name === "My Profile" ? "mt-[375px]" : ""}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Welcome & Balance */}
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
          <div className=" px-4 py-2">
            <span className="text-gray-600 font-medium mr-2">Balance:</span>
            <span className=" rounded-lg px-4 py-2 font-medium bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white">{user.balance}</span>
          </div>
        </div>

        {/* Wallet Balance & Fund Wallet Cards */}
        <div className="flex grid-cols-1 md:grid-cols-2 gap-6  mb-10">
          {/* Wallet Balance Card */}
          <div className="bg-white rounded-lg shadow  w-full md:w-[365px]">
            <img src={WalletIcon} alt="" className=" px-5 pt-3" />
            <h3 className="text-lg font-semibold text-[#7B36E7] mb-4 py-3 px-5">
              Wallet Balance
            </h3>
            <p className="text-2xl px-5 py-3 font-bold text-white bg-[#292E35] rounded-br-lg rounded-bl-lg">{user.balance}</p>
          </div>

          {/* Fund Wallet Card */}
          <div className="bg-[#EBE1FB] rounded-lg shadow flex flex-col items-start text-center  w-full md:w-[180px] ">
            <img src={FundWallet} alt="fund-wallet" className="mx-12 mt-6 mb-3.5" />
            <h3 className="text-lg font-semibold text-gray-700 px-10 ">
              Fund Wallet
            </h3>
            {/* <button className="mt-2 flex items-center gap-2 bg-[#7B36E7] text-white px-5 py-3 rounded hover:bg-purple-700 transition">
              <FaWallet className="text-white text-lg" />
              <span>Fund Wallet</span>
            </button> */}
          </div>
        </div>



        {/* Top-Up History Table */}
       {/* Top-Up History Table */}
<div className="bg-white rounded-lg shadow p-6">
  <h3 className="text-lg font-semibold text-gray-700 mb-4">
    Top-Up History
  </h3>
  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left">
      <thead className="bg-gray-100 text-gray-700 uppercase">
        <tr>
          <th className="px-4 py-2 ">Transaction ID</th>
          <th className="px-4 py-2 ">Amount</th>
          <th className="px-4 py-2 ">Date</th>
          <th className="px-4 py-2 ">Status</th>
        </tr>
      </thead>
      <tbody>
        {topUpHistory.length > 0 ? (
          topUpHistory.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b border-[#EDF2F7]">{item.id}</td>
              <td className="px-4 py-2 border-b border-[#EDF2F7]">{item.amount}</td>
              <td className="px-4 py-2 border-b border-[#EDF2F7]">{item.date}</td>
              <td className="px-4 py-2 border-b border-[#EDF2F7]">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.status === "Successful"
                      ? "bg-green-100 text-green-600"
                      : item.status === "Failed"
                      ? "bg-red-700 text-white"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="px-4 py-2 border text-center" colSpan="4">
              No top-up history available.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>

  {/* Pagination */}
  <nav
    aria-label="Pagination"
    className="flex justify-end mt-6 gap-2 text-sm overflow-x-auto"
  >
    <ul className="flex gap-2 items-center">
      <li>
        <button
          className="px-3 py-1 rounded  text-gray-700 hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Previous
        </button>
      </li>

      {renderPageNumbers().map((page, index) => (
        <li key={index}>
          {page === "..." ? (
            <span className="px-3 py-1 text-gray-500">...</span>
          ) : (
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
          )}
        </li>
      ))}

      <li>
        <button
          className="px-3 py-1 rounded  text-gray-700 hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
      </li>
    </ul>
  </nav>
</div>

      </main>
    </div>
  );
}
