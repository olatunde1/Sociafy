import AccountSideBar from "./AccountSideBar";
import Castine from "../../assets/images/castine.png";

const AccountLayout = ({ children }) => {
  const user = {
    name: "Castine",
    email: "castiin@sociafy.com",
    balance: "NGN 179,000",
    image: Castine,
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      <div className="flex w-full">
        <AccountSideBar />
        <main className="p-6 space-y-10 font-custom">
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
              <span className=" rounded-lg px-4 py-2 font-medium bg-gradient-to-r from-[#622BB9] to-[#351A60] cursor-pointer text-white">
                {user.balance}
              </span>
            </div>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
};

export default AccountLayout;
