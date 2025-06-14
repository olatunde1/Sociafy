import { useState } from "react";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";
import Castine from '../../assets/images/castine.png';
import { Link,useNavigate } from "react-router-dom";

export default function MyPurchased() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const navigate = useNavigate();


  const user = {
    name: "Castine",
    email: "castiin@sociafy.com",
    balance: "NGN 179,000",
    image: Castine,
  };

  const handleSignOut = () => {
    // Clear session logic here
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  };

  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Accounts", path: "/accounts" },
    { name: "My Purchased", path: "/my-purchased" },
    { name: "Wallet", path: "/wallet" },
    { name: "Rules", path: "/rules" },
    { name: "Support", path: "/support" },
    { name: "My Profile", path: "/profile" },
    { name: "Sign Out", path: "/",  action: handleSignOut },
  ];

  // Function to generate random dates
  const generateRandomDate = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[Math.floor(Math.random() * 12)];
    const day = Math.floor(Math.random() * 28) + 1;
    const year = 2025;
    const hour = Math.floor(Math.random() * 12) + 1;
    const minute = Math.floor(Math.random() * 60);
    const ampm = Math.random() > 0.5 ? 'am' : 'pm';
    
    return `${month} ${day}, ${year}\n${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}${ampm}`;
  };

  const orders = Array.from({ length: 24 }, (_, i) => ({
    product: "USA 🇺🇸 Standard IG",
    amount: `₦${(Math.floor(Math.random() * 5) + 1) * 5000}`,
    time: generateRandomDate(),
    action: "View Info",
  }));


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
          <div className="px-4 py-2">
            <span className="text-gray-600 font-medium mr-2">Balance:</span>
            <span className="rounded-lg px-4 py-2 font-medium bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white">
              {user.balance}
            </span>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            My Orders ({orders.length})
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100 text-[#EDF2F7] uppercase">
                <tr>
                  <th className="px-4 py-2 text-[#949494]">Product</th>
                  <th className="px-4 py-2 text-[#949494]">Amount</th>
                  <th className="px-4 py-2 text-[#949494]">Date</th>
                  <th className="px-4 py-2 text-[#949494]">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-b border-[#EDF2F7] w-[570px]">{order.product}</td>
                    <td className="px-4 py-2 border-b border-[#EDF2F7]">{order.amount.toLocaleString()}</td>
                    <td className="p-3 ">
                      <span className=" py-1.5 font-medium rounded-3xl text-[#425466] whitespace-pre-line">{order.time}</span>
                    </td>
                    <td className="px-4 py-2 border-b border-[#EDF2F7]">
                    <button
                          onClick={() => navigate("/log-details", {
                            state: {
                              product: order.product,
                              username: "@Caatiin_Sociafy25",
                              password: "axkLC8wyoA4M",
                              email: "samplemail@sociafy.com",
                              emailPassword: "Eb7qvG0fESQ",
                              dateCreated: "08-06-2004",
                              description: "5-8yrs with posts | 1000 followers",
                              price: order.amount
                            }
                          })}
                          className="text-[#292E35] font-semibold leading-3 px-5 py-3 hover:underline rounded-[8px] bg-[#F4F4F6] hover:bg-gradient-to-r from-[#622BB9] to-[#351A60] hover:text-white"
                        >
                          {order.action}
                      </button>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}