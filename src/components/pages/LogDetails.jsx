import { useLocation, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { X } from "lucide-react";

export default function LogDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <div className="p-8">No data available.</div>;

  return (
    <div className="min-h-screen flex">
      {/* Left black background div */}
      <div className="flex-1 bg-black"></div>

      {/* Right details panel */}
      <div className="flex-1 bg-gray-100 p-8">
        <div className="flex justify-between items-center mb-[61px]">
          <button onClick={() => navigate(-1)} className="text-sm text-gray-600 ">
            Go Back / Account
          </button>
          <button
            onClick={() => navigate("/my-purchased")}
            className="text-gray-700 hover:text-red-600 flex items-center gap-2"
          >
            <X className="w-6 h-6 bg-[#E5E5EA] rounded-sm p-1" /> Close
          </button>
        
        </div>

        <div className="rounded-lg  max-w-2xl ">
          <h2 className="text-xl font-bold mb-2">{state.product}</h2>
          <p className="text-sm text-gray-500 mb-9">{state.description}</p>

          <p className="text-2xl font-semibold text-[#515151] mb-4">{(state.price).toLocaleString()}</p>

          <div className="flex justify-end mb-6">
            <button
              className="text-sm font-semibold text-[#7B36E7] "
              onClick={() => {
                const allInfo = `
                  Username: ${state.username}
                  Password: ${state.password}
                  Email: ${state.email}
                  Email Password: ${state.emailPassword}
                  Date Created: ${state.dateCreated}
                `;
                navigator.clipboard.writeText(allInfo);
                alert("Info copied to clipboard!");
              }}
            >
              Copy Info 
            </button>
          </div>
          <div className="bg-[#F2F2F7] border-2 border-dashed border-[#949494] rounded-lg p-6 mb-10 space-y-5">
                <div className="flex gap-6  justify-stretch">
                    <strong className="text-sm text-gray-500 w-32">Username:</strong>
                    <span className="text-base font-medium break-all">{state.username}</span>
                </div>

                <div className="flex gap-6 justify-stretch">
                    <strong className="text-sm text-gray-500 w-32">Password:</strong>
                    <span className="text-base font-medium break-all">{state.password}</span>
                </div>

                <div className="flex gap-6 justify-stretch">
                    <strong className="text-sm text-gray-500 w-32">Email:</strong>
                    <span className="text-base font-medium break-all">{state.email}</span>
                </div>

                <div className="flex gap-6 justify-stretch">
                    <strong className="text-sm text-gray-500 w-32">Email Password:</strong>
                    <span className="text-base font-medium break-all">{state.emailPassword}</span>
                </div>

                <div className="flex gap-6 justify-stretch">
                    <strong className="text-sm text-gray-500 w-32">Date Created:</strong>
                    <span className="text-base font-medium break-all">{state.dateCreated}</span>
                </div>
        </div>

        </div>
      </div>
    </div>
  );
}
