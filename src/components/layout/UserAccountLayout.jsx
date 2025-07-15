import { Outlet } from "react-router-dom";
import { useSidebarStore } from "@/store/SidebarStore";
import AccountSideBar from "../UserAccount/AccountSideBar";

import Castine from "../../assets/images/castine.png";
import { MenuIcon } from "lucide-react";
import { getUserProfile } from "@/hooks/api/queries/user/dashboard/getOverview";

const UserAccountLayout = () => {
  const { isSidebarOpen, toggleSidebar, closeSidebar } = useSidebarStore();
  
  const { data: profile, isPending } = getUserProfile();
   const userData = profile?.data;

  const user = {
    name: "Castine",
    email: "castiin@sociafy.com",
    balance: "NGN 179,000",
    image: Castine,
  };
  return (
    <div className="flex relative justify-between h-screen">
      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="bg-darkColor w-[70%] max-w-sm h-full border-r border-borderColor transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <AccountSideBar />
          </div>

          <div
            className="flex-1 bg-black bg-opacity-50"
            onClick={closeSidebar}
          />
        </div>
      )}

      {/* Sidebar for Large Screens */}
      <div className="hidden lg:block lg:w-[18%]">
        <AccountSideBar toggleSidebar={toggleSidebar} />
      </div>

      {/* Main Content */}
      <div
        className={` transition-all duration-300 ${
          isSidebarOpen ? "lg:w-[82%] w-full" : "lg:w-[82%] w-full"
        }`}
      >
        <main className="p-6 bg-gray-100">
          <div className="flex sm:block w-full items-center sm:gap-10 gap-3 h-[58px]">
            <button onClick={toggleSidebar} className="lg:hidden">
              <MenuIcon color="black" />
            </button>
            <section className="flex justify-between items-center ">
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
                  <h2 className="sm:text-xl text-[10px] font-bold">
                    Welcome, {userData?.username ?? "nil"}
                  </h2>
                  <p className="sm:text-sm text-[8px] text-gray-500">
                    {userData?.email ?? "nil"}
                  </p>
                </div>
              </div>

              {/* Wallet Balance Summary */}
              <div className=" px-4 py-2">
                <span className="text-gray-600 sm:text-sm text-[8px] font-medium mr-2">
                  Balance:
                </span>
                <span className="sm:text-sm text-[8px] rounded-lg px-4 py-2 font-medium bg-gradient-to-r from-[#622BB9] to-[#351A60] cursor-pointer text-white">
                  NGN {userData?.wallet.walletBalance ?? "0"}
                </span>
              </div>
            </section>
          </div>
          <div className="h-[calc(100vh-106px)] overflow-y-auto scrollbar-hidden">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserAccountLayout;
