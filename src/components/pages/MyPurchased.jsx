
import {  useNavigate } from "react-router-dom";
import { useOrders } from "@/hooks/api/queries/user/dashboard/getHistories";
import Loader from "../Loader";

export default function MyPurchased() {
  const navigate = useNavigate();

  // const handleSignOut = () => {
  //   // Clear session logic here
  //   localStorage.clear();
  //   sessionStorage.clear();
  //   navigate("/");
  // };

  const { data: orderHistory, isPending } = useOrders();

  // Function to generate random dates
  // const generateRandomDate = () => {
  //   const months = [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ];
  //   const month = months[Math.floor(Math.random() * 12)];
  //   const day = Math.floor(Math.random() * 28) + 1;
  //   const year = 2025;
  //   const hour = Math.floor(Math.random() * 12) + 1;
  //   const minute = Math.floor(Math.random() * 60);
  //   const ampm = Math.random() > 0.5 ? "am" : "pm";

  //   return `${month} ${day}, ${year}\n${hour
  //     .toString()
  //     .padStart(2, "0")}:${minute.toString().padStart(2, "0")}${ampm}`;
  // };
  const orders = orderHistory?.data?.result || [];

  return (
    <main className="mt-5">
      {/* Orders Table */}
      {isPending ? (
        <Loader />
      ) : (
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
                    <td className="px-4 py-2 border-b border-[#EDF2F7]">
                      {order.product}
                    </td>
                    <td className="px-4 py-2 border-b border-[#EDF2F7]">
                      ₦{order.amount}
                    </td>
                    <td className="p-3 ">
                      <span className="py-1.5 font-medium rounded-3xl text-[#425466] whitespace-pre-line">
                        {new Date(order.createdAt).toLocaleString("en-US", {
                          month: "short",
                          day: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        })}
                      </span>
                    </td>
                    <td className="px-4 py-2 border-b border-[#EDF2F7]">
                      <button
                        onClick={() =>
                          navigate("/log-details", {
                            state: {
                              product: order.product,
                              username: order?.userId?.username,
                              password: "***",
                              email: order?.userId?.email,
                              emailPassword: "*****",
                              dateCreated: new Date(
                                order.createdAt
                              ).toLocaleDateString(),
                              description: "Purchased product",
                              price: order.amount,
                            },
                          })
                        }
                        className="text-[#292E35] font-semibold leading-3 px-5 py-3 hover:underline rounded-[8px] bg-[#F4F4F6] hover:bg-gradient-to-r from-[#622BB9] to-[#351A60] hover:text-white"
                      >
                        View Info
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </main>
  );
}
