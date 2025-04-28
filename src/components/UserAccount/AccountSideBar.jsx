import React, { useState } from 'react'
import { FaUserCircle,FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom';
import Logo from "../../assets/images/logo.png";




const AccountSideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

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

    // const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

    // const { logout } = useAuthStore();
    
    //  const navigate = useNavigate();
  
    // const handleLogout = () => {
    //   logout();
    //   navigate("/");
    //   toast.success("Logged out successfully");
    // };



  return (
    <div>
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
         
    </div>
  )
}

export default AccountSideBar