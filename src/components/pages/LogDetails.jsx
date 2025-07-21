import { useLocation, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function LogDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showEmailPassword, setShowEmailPassword] = useState(false);

  if (!state) return <div className="p-8">No data available.</div>;

  const stateData = state?.log ? state.log : state;

  console.log(stateData, "log details state");
  // State to toggle password visibility

  

  // Helper to render password field with toggle
  const renderPasswordField = (label, value, showState, setShowState) => (
    <div className="flex gap-6 justify-stretch items-center">
      <strong className="text-sm text-gray-500 w-32">{label}:</strong>
      <span className="text-base font-medium break-all flex items-center gap-2">
        {showState ? value : "••••••••"}
        <button
          type="button"
          onClick={() => setShowState((prev) => !prev)}
          className="ml-2 text-gray-500 hover:text-gray-700"
          aria-label={showState ? "Hide password" : "Show password"}
        >
          {showState ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </span>
    </div>
  );

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
            onClick={() => navigate(-1)}
            className="text-gray-700 hover:text-red-600 flex items-center gap-2"
          >
            <X className="w-6 h-6 bg-[#E5E5EA] rounded-sm p-1" /> Close
          </button>
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold mb-2">{stateData.category}</h2>
          <p className="text-sm text-gray-500 mb-6">{stateData.age} years with posts | {stateData.friends} followers </p>
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
              { label: "Password", value: stateData.password, isPassword: true },
              { label: "Email", value: stateData.accountemail },
              { label: "Email Password", value: stateData.emailPassword, isEmailPassword: true },
              { label: "Date Created", value: stateData.createdAt?.split("T")[0] },
            ].map(({ label, value, isPassword, isEmailPassword }) => {
              if (isPassword) {
                return renderPasswordField(label, value, showPassword, setShowPassword);
              } else if (isEmailPassword) {
                return renderPasswordField(label, value, showEmailPassword, setShowEmailPassword);
              } else {
                return (
                  <div key={label} className="flex gap-6 justify-stretch">
                    <strong className="text-sm text-gray-500 w-32">{label}:</strong>
                    <span className="text-base font-medium break-all">{value}</span>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}