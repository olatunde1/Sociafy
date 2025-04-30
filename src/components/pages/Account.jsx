import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaSnapchat, FaTwitter } from "react-icons/fa";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";
import Castine from '../../assets/images/castine.png';
import { Link } from "react-router-dom";
import SupportImage from '../../assets/images/telegram-support.png'

const platforms = [
  {
    name: "Facebook",
    icon: <FaFacebook className="text-blue-600" />,
    products: [
      { product: "USA Standard Fb", amount: "₦2,000", quantity: 10 },
      { product: "UK Premium Fb", amount: "₦2,500", quantity: 15 },
      { product: "NG Real Fb", amount: "₦1,800", quantity: 20 },
      { product: "CA Elite Fb", amount: "₦2,800", quantity: 5 },
      { product: "AU Verified Fb", amount: "₦3,000", quantity: 8 },
    ],
  },
  {
    name: "Instagram",
    icon: <FaInstagram className="text-pink-500" />,
    products: [
      { product: "USA Insta Pro", amount: "₦2,200", quantity: 12 },
      { product: "UK Insta Verified", amount: "₦2,700", quantity: 10 },
      { product: "NG Insta Organic", amount: "₦1,900", quantity: 25 },
      { product: "CA Insta Growth", amount: "₦2,900", quantity: 6 },
      { product: "AU Insta Elite", amount: "₦3,100", quantity: 9 },
    ],
  },
  {
    name: "Tiktok",
    icon: <FaTiktok className="text-black" />,
    products: [
      { product: "Tiktok Starter", amount: "₦1,800", quantity: 14 },
      { product: "Tiktok Influencer", amount: "₦3,000", quantity: 7 },
      { product: "Tiktok Verified", amount: "₦2,600", quantity: 11 },
      { product: "Tiktok Premium", amount: "₦2,900", quantity: 10 },
      { product: "Tiktok Gold", amount: "₦3,200", quantity: 4 },
    ],
  },
  {
    name: "Snapchat",
    icon: <FaSnapchat className="text-yellow-400" />,
    products: [
      { product: "Snap Basic", amount: "₦1,700", quantity: 20 },
      { product: "Snap Verified", amount: "₦2,100", quantity: 18 },
      { product: "Snap Premium", amount: "₦2,500", quantity: 10 },
      { product: "Snap Elite", amount: "₦3,000", quantity: 7 },
      { product: "Snap Gold", amount: "₦3,500", quantity: 5 },
    ],
  },
  {
    name: "Twitter",
    icon: <FaTwitter className="text-blue-400" />,
    products: [
      { product: "Twitter Basic", amount: "₦2,000", quantity: 9 },
      { product: "Twitter Verified", amount: "₦2,800", quantity: 8 },
      { product: "Twitter Premium", amount: "₦3,000", quantity: 6 },
      { product: "Twitter Influencer", amount: "₦3,300", quantity: 4 },
      { product: "Twitter Gold", amount: "₦3,700", quantity: 3 },
    ],
  },
];

const AccountPlatforms = () => {
  const [search, setSearch] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");

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
                <Link to="/">
                  <img src={Logo} alt="Logo" className="h-10 w-auto mb-18" />
              </Link>
                       
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
                <div className="px-4 py-2">
                  <span className="text-gray-600 font-medium mr-2">Balance:</span>
                  <span className="rounded-lg px-4 py-2 font-medium bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white">
                    {user.balance}
                  </span>
                </div>
              </div>

              {/* AVAILABLE ACCOUNTS  */}

                <div className="p-6 mt-10">
                <div className=" bg-white p-[35px] rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-gray-800 whitespace-nowrap">
                    Available Accounts
                  </h3>
                  
                  <div className="flex-1 w-full md:w-auto">
                    <input
                      type="text"
                      placeholder="Search accounts..."
                      className="border border-gray-300 p-2 rounded-md w-full focus:ring-2 focus:ring-[#7B36E7] focus:border-transparent"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  
                  <div className="w-full md:w-auto">
                    <select
                      className="border border-gray-300 p-2 rounded-md w-full focus:ring-2 focus:ring-[#7B36E7] focus:border-transparent"
                      value={selectedPlatform}
                      onChange={(e) => setSelectedPlatform(e.target.value)}
                    >
                      <option value="">Filter by Platform</option>
                      {platforms.map((platform) => (
                        <option key={platform.name} value={platform.name}>
                          {platform.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
      </div>

      {platforms
        .filter((platform) => !selectedPlatform || platform.name === selectedPlatform)
        .map((platform) => (
          <div key={platform.name} className="">
            <div className="flex justify-between items-center py-[17px] px-5 text-white  bg-[#371868]">
              <h3 className="flex items-center gap-2 text-xl font-semibold">
                {platform.name}
              </h3>
              <button className="text-[#371868] px-3 py-2 rounded-sm font-semibold bg-white font-medium">View More</button>
            </div>
            <table className="min-w-full bg-white border border-gray-200  overflow-hidden">
            <thead className="bg-[#FAFAFB]">
              <tr>
                <th className="px-6 py-[21px] text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                  Product
                </th>
                <th className="px-6 py-[21px] text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                  Amount
                </th>
                <th className="px-6 py-[21px] text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                  Quantity
                </th>
                <th className="px-6 py-[21px] text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                  Action
                </th>
              </tr>
            </thead>
                <tbody className="divide-y divide-gray-200">
    {platform.products
      .filter((product) => 
        product.product.toLowerCase().includes(search.toLowerCase())
      )
      .map((product, idx) => (
        <tr 
          key={idx} 
          className="hover:bg-gray-50 transition-colors duration-150"
        >
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center space-x-3">
              {platform.icon}
              <span className="font-medium text-gray-900">
                {product.product}
              </span>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-gray-700">
            {product.amount}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-gray-700">
            <span className="px-2 py-1 bg-[#E5E5EA] rounded-full text-sm">
              {product.quantity} pcs
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <button 
              className="bg-[#F2EBFD] hover:bg-purple-700 hover:text-white text-[#7B36E7] px-4 py-2 rounded-md font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#7B36E7] focus:ring-offset-1"
            >
              Buy Now
            </button>
          </td>
        </tr>
      ))}
                </tbody>
            </table>
          </div>
        ))}
                </div>
              </main>
      
      </div>
    
    
  );
};

export default AccountPlatforms;
