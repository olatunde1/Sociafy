import UpdatePassword from "../../assets/images/update-password.png";
import { Link } from "react-router-dom";
import { getUserProfile } from "@/hooks/api/queries/user/dashboard/getOverview";
import Loader from "../Loader";
import Castine from "../../assets/images/castine.png";

export default function Profile() {
  const { data: profile, isPending } = getUserProfile();
  console.log("Profile Data:", profile);

  const userData = profile?.data;

  const user = {
    name: "Castine",
    email: "castiin@sociafy.com",
    balance: "NGN 179,000",
    image: Castine,
  };

  return (
    <main className="mt-5">
      {isPending ? (
        <Loader />
      ) : (
        <>
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
                  <h3 className="text-lg font-semibold">{userData.username}</h3>
                  <p className="text-sm text-gray-600">
                    Email: {userData.email}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Joined: nil</p>
                </div>
              </div>
            </div>

            <div className="grid gap-8">
              {/* Second Div: Grid for total spent */}
              <div className="items-center text-center justify-center grid bg-white p-18 rounded-lg shadow w-full md:w-[35.75rem] h-full md:h-[14.375rem]">
                <span className="text-[26px] font-bold text-gray-800">
                  Total Spent
                </span>
                <span className="text-[20px] font-semibold text-[#515151]">
                  NGN {userData.totalSpent || "0"}
                </span>
              </div>

              {/* Third Div: Grid for total purchased */}
              <div className="items-center text-center justify-center grid bg-white p-18 rounded-lg shadow md:w-[35.75rem] h-full md:h-[14.375rem]">
                <span className="text-[26px] font-bold text-gray-800">
                  Total Purchased
                </span>
                <span className="text-[20px] font-semibold text-[#515151]">
                  {userData.totalPurchase || "0"}
                </span>
              </div>
            </div>

            {/* Update Password Button can be placed here if needed */}
          </div>

          <div>
            <Link to="/reset-password">
              <button className="px-10 py-4 flex items-center text-[24px] font-semibold bg-[#F2EBFD] text-[#1B1B1B] rounded-2xl hover:bg-gradient-to-r from-[#622BB9] to-[#351A60] hover:text-white gap-6 mt-[60px]">
                <img src={UpdatePassword} alt="" />
                Update Password
              </button>
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
