import { useState } from "react";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";
import Castine from '../../assets/images/castine.png';
import { Link } from "react-router-dom";
import SupportImage from '../../assets/images/telegram-support.png'

export default function Support() {
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

        {/* Rules Section */}
        <div className="grid gap-8 space-y-8 md:flex md:space-y-0">
          <div className="flex mt-16 bg-white p-6 rounded-lg shadow w-full md:w-[578px]">
            <div>
            <div className="flex items-center gap-4">
                <img src={SupportImage} alt="" />
                <div className="ml-6">
                    <h3 className="text-lg font-bold">Telegram</h3>
                    <p className="text-gray-600">Reach out to us on telegram for help and support.</p>
                </div>
            </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
