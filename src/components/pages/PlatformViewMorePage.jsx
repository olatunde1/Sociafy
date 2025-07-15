import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaSnapchat,
  FaTwitter,
  FaUserCircle,
  FaBars,
  FaTimes,
  FaChevronLeft,
  FaSearch,
} from "react-icons/fa";
import Logo from "../../assets/images/logo.png";
import Castine from "../../assets/images/castine.png";
import SupportImage from "../../assets/images/telegram-support.png";
import getAvailableAccounts from "@/hooks/api/queries/user/accounts/getAvailableAcc";
import Loader from "../Loader";

const iconMap = {
  Facebook: <FaFacebook className="text-blue-600 text-xl" />,
  Instagram: <FaInstagram className="text-pink-500 text-xl" />,
  Tiktok: <FaTiktok className="text-black text-xl" />,
  Snapchat: <FaSnapchat className="text-yellow-400 text-xl" />,
  Twitter: <FaTwitter className="text-blue-400 text-xl" />,
};

const PlatformViewMorePage = () => {
  const [search, setSearch] = useState("");
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

  const { platformName } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const { data: accData, isPending } = getAvailableAccounts({
    category: platformName,
    page: currentPage,
    search,
  });

  const platformDetails = accData?.data?.result || [];
  const pagedInfo = accData?.data?.pagedInfo;

  const products = platformDetails;
  const filteredProducts = search
    ? platformDetails.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    : platformDetails;
  const totalPages = pagedInfo?.totalPages || 1;

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center p-4 bg-white shadow-sm sticky top-0 z-10">
        <img src={Logo} alt="Logo" className="h-8" />
        <button onClick={toggleSidebar} className="text-xl text-gray-600">
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "block" : "hidden"
        } md:block w-64 bg-white shadow-md p-6 flex flex-col justify-between`}
      >
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-10 w-auto mb-8" />
          </Link>

          <nav className="space-y-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 px-3 rounded-lg transition-colors ${
                  item.name === "My Profile" ? "mt-[375px]" : ""
                } ${
                  window.location.pathname === item.path
                    ? "bg-purple-100 text-purple-700 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 pb-8">
        {/* User Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-6">
          <div className="flex items-center gap-4">
            {user.image ? (
              <img
                src={user.image}
                alt="User"
                className="w-12 h-12 rounded-full object-cover border-2 border-purple-100"
              />
            ) : (
              <FaUserCircle className="text-gray-400 w-12 h-12" />
            )}
            <div>
              <h2 className="text-lg font-bold text-gray-800">
                Welcome, {user.name}
              </h2>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>
          <div className="px-4 py-2">
            <span className="text-gray-600 font-medium mr-2">Balance:</span>
            <span className="rounded-lg px-4 py-2 font-medium bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white">
              {user.balance}
            </span>
          </div>
        </div>

        {/* Platform Content */}
        <div className="p-6">
          {/* Breadcrumb */}
          <div className="mb-6 flex">
            <button
              onClick={() => navigate(-1)}
              className="text-purple-700 font-medium flex items-center gap-1 hover:text-purple-800 transition-colors"
            >
              <FaChevronLeft className="text-sm" /> Back
            </button>
            <p className="text-sm text-gray-500 ml-4">
              Account &gt; {platformName}
            </p>
          </div>

          {/* Title and Search */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-full">
                {iconMap[platformName]}
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {platformName} Products
              </h2>
            </div>

            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                value={search}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1); // reset to first page on search
                }}
              />
            </div>
          </div>

          {isPending ? (
            <Loader />
          ) : (
            <>
              {/* Table */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead className="bg-[#EDF2F7]">
                    <tr className="text-left text-[#949494]">
                      <th className="p-4 font-medium">Product</th>
                      <th className="p-4 font-medium">Amount</th>
                      <th className="p-4 font-medium">Quantity</th>
                      <th className="p-4 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredProducts.map((item) => (
                      <tr
                        key={item._id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="p-4 font-medium text-gray-800 w-[600px]">
                          {item.name}
                        </td>
                        <td className="p-4 text-[#515151] font-semibold">
                          ₦{item.price}
                        </td>
                        <td className="p-4 text-[#515151] ">
                          <span className="px-2 py-1 bg-[#E5E5EA] rounded-full text-sm">
                            {item.isAvailable ? "Available" : "Unavailable"}
                          </span>
                        </td>
                        <td className="p-4">
                          <button
                            onClick={() =>
                              navigate(
                                `/accounts/buy/${platformName}/${encodeURIComponent(
                                  item.name
                                )}`,
                                {
                                  state: { product: item },
                                }
                              )
                            }
                            className="bg-[#F2EBFD] hover:bg-gradient-to-r from-[#622BB9] to-[#351A60] hover:text-white font-bold text-[#7B36E7] px-4 py-2 rounded-lg shadow-sm transition-colors"
                          >
                            Buy Now
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
                <div className="text-sm text-gray-500">
                  Showing page {currentPage} of {totalPages}
                </div>
                <div className="flex gap-2">
                  <button
                    disabled={!pagedInfo?.hasPrevious}
                    onClick={() => setCurrentPage((p) => p - 1)}
                    className={`px-4 py-2 rounded-lg ${
                      !pagedInfo?.hasPrevious
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-purple-600 text-white hover:bg-purple-700"
                    } transition-colors`}
                  >
                    Previous
                  </button>
                  <div className="flex items-center px-4 bg-gray-100 rounded-lg">
                    <span className="text-gray-700">
                      Page {currentPage} of {totalPages}
                    </span>
                  </div>
                  <button
                    disabled={!pagedInfo?.hasNext}
                    onClick={() => setCurrentPage((p) => p + 1)}
                    className={`px-4 py-2 rounded-lg ${
                      !pagedInfo?.hasNext
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-purple-600 text-white hover:bg-purple-700"
                    } transition-colors`}
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Support Section */}
        <div className="mx-6 mt-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Need help?</h3>
            <p className="text-gray-600 mb-4">
              Our support team is available 24/7 to assist you with any
              questions.
            </p>
            <button className="bg-white text-purple-700 px-6 py-2 rounded-lg shadow-sm border border-purple-200 hover:bg-purple-50 transition-colors font-medium">
              Contact Support
            </button>
          </div>
          <img
            src={SupportImage}
            alt="Support"
            className="w-40 md:w-48 object-contain"
          />
        </div>
      </main>
    </div>
  );
};

export default PlatformViewMorePage;
