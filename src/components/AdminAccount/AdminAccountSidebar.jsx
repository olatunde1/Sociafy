import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";
import { FaBox } from "react-icons/fa6";
import AdminLogo from "../../assets/images/logo.png";
import { useAuthStore } from "@/store/authStore";
import { toast } from "sonner";

const AdminAccountSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({});
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const { logout } = useAuthStore();

  const toggleMenu = (name) => {
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const menuItems = [
    { name: "Overview", path: "/admin" },
    {
      name: "Social Logs",
      iconSrc: FaBox,
      submenu: [
        { name: "All Logs", path: "/admin/logs" },
        { name: "Add New Logs", path: "/admin/add-logs" },
      ],
    },
    { name: "Orders", path: "/admin/orders" },
    { name: "User Management", path: "/admin/users-admin" },
    { name: "Wallet Management", path: "/admin/wallet" },
    { name: "Report & Analytics", path: "" },
    { name: "Log Out", path: "/admin/login" },
  ];

  const handleNavigate = (item) => {
    if (item.name === "Log Out") {
      localStorage.removeItem("admin-auth");
      logout();
      toast.success("Logged out successfully");
      navigate("/admin/login");
    } else {
      navigate(item.path);
      setMobileSidebarOpen(false);
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile Toggle Button (Top Left) */}
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md"
        onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        aria-label="Toggle sidebar"
      >
        {mobileSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <aside 
        className={`${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 w-64 bg-white text-[#515151] h-screen p-6 space-y-6 shadow-md transition-transform duration-300 ease-in-out z-40`}
        aria-label="Admin navigation"
      >
        {/* Logo - Hidden on mobile, visible on desktop */}
        <h2 className="text-2xl font-bold mb-4 hidden lg:block">
          <Link to="/admin">
            <img src={AdminLogo} alt="Admin Panel Logo" className="h-10" />
          </Link>
        </h2>
        
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              {!item.submenu ? (
                <button
                  onClick={() => handleNavigate(item)}
                  className={`w-full text-left px-2 py-2 rounded hover:text-[#7B36E7] hover:font-bold ${
                    isActive(item.path) ? "text-[#7B36E7] font-bold" : ""
                  }`}
                  aria-current={isActive(item.path) ? "page" : undefined}
                >
                  {item.name}
                </button>
              ) : (
                <div>
                  <button
                    onClick={() => toggleMenu(item.name)}
                    className="w-full flex justify-between items-center px-2 py-2 rounded hover:text-[#7B36E7] hover:font-bold"
                    aria-expanded={openMenus[item.name] || false}
                  >
                    <span className="flex items-center gap-2">
                      {item.iconSrc && <item.iconSrc />}
                      {item.name}
                    </span>
                    {openMenus[item.name] ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {openMenus[item.name] && (
                    <ul className="pl-6 mt-1 space-y-1">
                      {item.submenu.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <button
                            onClick={() => handleNavigate(sub)}
                            className={`w-full text-left px-2 py-1 text-sm rounded hover:text-[#7B36E7] hover:font-bold ${
                              isActive(sub.path)
                                ? "text-[#7B36E7] font-bold"
                                : ""
                            }`}
                            aria-current={isActive(sub.path) ? "page" : undefined}
                          >
                            {sub.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay for mobile (click to close sidebar) */}
      {mobileSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setMobileSidebarOpen(false)}
          role="presentation"
        />
      )}
    </>
  );
};

export default AdminAccountSidebar;