import { useLocation, useNavigate } from "react-router-dom";
import { X } from "lucide-react";

export default function LogDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <div className="p-8">No data available.</div>;

  const stateData = state?.log ? state.log : state;

  console.log(stateData, "log details state");
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end bg-black/30 backdrop-blur-sm">
      {/* Slide-in panel */}
      <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] h-screen bg-white p-6 overflow-y-auto shadow-xl transition-all duration-300 ease-in-out">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-gray-600"
          >
            Go Back / Account
          </button>
          <button
            // onClick={() => navigate("/my-purchased")}
            onClick={() => navigate(-1)}
            className="text-gray-700 hover:text-red-600 flex items-center gap-2"
          >
            <X className="w-6 h-6 bg-[#E5E5EA] rounded-sm p-1" /> Close
          </button>
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold mb-2">{stateData.product}</h2>
          <p className="text-sm text-gray-500 mb-6">{stateData.description}</p>

          <p className="text-2xl font-semibold text-[#515151] mb-4">
            {stateData.price?.toLocaleString?.() || "N/A"}
          </p>

          <div className="flex justify-end mb-6">
            <button
              className="text-sm font-semibold text-[#7B36E7]"
              onClick={() => {
                const allInfo = `
Username: ${stateData.username}
Password: ${stateData.password}
Email: ${stateData.email}
Email Password: ${stateData.emailPassword}
Date Created: ${stateData.dateCreated}
                `;
                navigator.clipboard.writeText(allInfo);
                alert("Info copied to clipboard!");
              }}
            >
              Copy Info
            </button>
          </div>

          <div className="bg-[#F2F2F7] border-2 border-dashed border-[#949494] rounded-lg p-6 mb-10 space-y-5">
            {[
              { label: "Username", value: stateData.username },
              { label: "Password", value: "*****" },
              { label: "Email", value: stateData.accountemail },
              { label: "Email Password", value: "****" },
              { label: "Date Created", value: stateData.createdAt?.split("T")[0] },
            ].map(({ label, value }) => (
              <div key={label} className="flex gap-6 justify-stretch">
                <strong className="text-sm text-gray-500 w-32">{label}:</strong>
                <span className="text-base font-medium break-all">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
