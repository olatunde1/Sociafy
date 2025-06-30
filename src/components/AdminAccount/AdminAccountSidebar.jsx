import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaBox } from "react-icons/fa6";
import AdminLogo from "../../assets/images/logo.png"; // Adjust the path as necessary
import { useAuthStore } from "@/store/authStore";
import { toast } from "sonner";

const AdminAccountSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (name) => {
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const menuItems = [
    { name: "Overview", path: "/admin-dashboard" },
    {
      name: "Social Logs",
      iconSrc: FaBox,
      submenu: [
        { name: "All Logs", path: "/admin/logs" },
        { name: "Add New Logs", path: "/admin/add-logs" },
      ],
    },
    { name: "Orders", path: "/admin/orders" },
    { name: "User Management", path: "/admin/users" },
    { name: "Wallet Management", path: "/admin/wallet" },
    { name: "Report & Analytics", path: "/admin/reports" },
    { name: "Log Out", path: "/" },
  ];

  const { logout } = useAuthStore();

  const handleNavigate = (item) => {
    if (item.name === "Log Out") {
      localStorage.removeItem("admin-auth");
      logout();
      toast.success("Logged out successfully");
      navigate("/admin/login");
    } else {
      navigate(item.path);
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-64 bg-[#fffff] text-[#515151] h-screen p-6 space-y-6 shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        <img src={AdminLogo} alt="Admin Panel Logo" />
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
              >
                {item.name}
              </button>
            ) : (
              <div>
                <button
                  onClick={() => toggleMenu(item.name)}
                  className="w-full flex justify-between items-center px-2 py-2 rounded hover:text-[#7B36E7] hover:font-bold"
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
                              ? "hover:text-[#7B36E7] hover:font-bold"
                              : ""
                          }`}
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
  );
};

export default AdminAccountSidebar;
