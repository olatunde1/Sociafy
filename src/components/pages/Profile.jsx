import { useState } from "react";
import { FaUserCircle,FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";
import Castine from '../../assets/images/castine.png'
import UpdatePassword from '../../assets/images/update-password.png'
import { Link } from "react-router-dom";


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
    { name: "Dashboard", path: "/dashboard" },
    { name: "Accounts", path: "/accounts" },
    { name: "My Purchased", path: "/my-purchased" },
    { name: "Wallet", path: "/wallet" },
    { name: "Rules", path: "/rules" },
    { name: "Support", path: "/support" },
    { name: "My Profile", path: "/profile" },
    { name: "Sign Out", path: "/" },
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

        {/* user profile */}
        <div className="grid gap-8 space-y-8 md:flex md:space-y-0">
  {/* First Div: Flex layout for profile */}
  <div className="flex items-center justify-center bg-white p-6 rounded-lg shadow w-full md:w-[35.75rem] h-full md:h-[31.25rem]">
    <div className="grid place-items-center gap-6">
      <img
        src={user.image}
        alt="User"
        className="w-20 h-20 rounded-full object-cover"
      />
      <div className="text-center">
        <h3 className="text-lg font-semibold">{user.name}</h3>
        <p className="text-sm text-gray-600">Email: {user.email}</p>
        <p className="text-sm text-gray-500 mt-1">Joined: 13-03-2025</p>
      </div>
    </div>
  </div>

  <div className="grid gap-8">
    {/* Second Div: Grid for total spent */}
    <div className="items-center text-center justify-center grid bg-white p-18 rounded-lg shadow w-full md:w-[35.75rem] h-full md:h-[14.375rem]">
      <span className="text-[26px] font-bold text-gray-800">Total Spent</span>
      <span className="text-[20px] font-semibold text-[#515151]">NGN 34,900</span>
    </div>

    {/* Third Div: Grid for total purchased */}
    <div className="items-center text-center justify-center grid bg-white p-18 rounded-lg shadow md:w-[35.75rem] h-full md:h-[14.375rem]">
      <span className="text-[26px] font-bold text-gray-800">Total Purchased</span>
      <span className="text-[20px] font-semibold text-[#515151]">31</span>
    </div>
  </div>

  {/* Update Password Button can be placed here if needed */}
</div>

        <div>
            <Link to="/reset-password">
              <button className="px-10 py-4 flex items-center text-[24px] font-semibold bg-[#F2EBFD] text-[#1B1B1B] rounded-2xl hover:bg-gradient-to-r from-[#622BB9] to-[#351A60] hover:text-white gap-6 mt-[60px]"><img src={UpdatePassword} alt="" />Update Password</button>
            </Link>
          </div>

      </main>
    </div>
  );
}
