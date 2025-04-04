import { useState } from "react";
import { FaUserCircle,FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";
import Castine from '../../assets/images/castine.png'


export default function Profile() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const user = {
    name: "Castine",
    email: "castiin@sociafy.com",
    balance: "NGN 179,000",
    image: Castine,
  };

  const menuItems = [
    "Dashboard",
    "Accounts",
    "My Purchased",
    "Wallet",
    "Rules",
    "Support",
    "My Profile",
    "Sign Out",
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
              <a
                key={item}
                href="#"
                className={`block text-gray-700 hover:text-purple-700 font-medium ${item === "My Profile" ? "mt-[375px]" : ""}`}
                >
                {item}
              </a>
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
        



      </main>
    </div>
  );
}
