import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useChangePassword } from "@/hooks/api/mutation/auth/changePassword";
import { toast } from "sonner";

export default function CreateNewPassword() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { mutate, isPending } = useChangePassword();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error("All fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("New password and confirmation do not match.");
      return;
    }

    mutate(
      {
        oldPassword: currentPassword,
        newPassword,
        confirmPassword,
      },
      {
        onSuccess: () => {
          toast.success("Password changed successfully!");
          setCurrentPassword("");
          setNewPassword("");
          setConfirmPassword("");
          navigate("/profile");
        },
        onError: (error) => {
          toast.error(
            error?.response?.data?.message || "Password change failed"
          );
          navigate("/profile");
        },
      }
    );
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black bg-opacity-50 flex items-center justify-center">
      <div className="md:h-[90vh] h-full w-full md:max-w-4xl flex items-center justify-center bg-white rounded-lg shadow-lg overflow-auto relative">
        <div className="w-full max-w-6xl flex flex-col md:flex-row overflow-hidden h-full">
          <div className="w-full md:w-1/2 p-8 opacity-10 flex flex-col justify-center bg-[#000] h-full" />

          <div className="w-full md:w-1/2 p-8 flex flex-col bg-white h-full">
            <nav
              className="flex justify-between items-center text-sm mb-[61px]"
              aria-label="Breadcrumb"
            >
              <ol className="list-reset flex items-center">
                <li>
                  <a href="./profile" className="hover:underline">
                    Go Back
                  </a>
                </li>
                <li>
                  <span className="mx-2 text-gray-500">/</span>
                </li>
                <li className="text-gray-700 font-semibold">Create New Password</li>
              </ol>
              <Link to="./profile">
                <button className="flex items-center text-gray-600 hover:text-gray-800">
                  <FaTimes className="mr-1 rounded-md bg-[#515151] text-gray-800" />
                  <span>Close</span>
                </button>
              </Link>
            </nav>

            <h1 className="text-[20px] font-bold mb-10">New Password</h1>
            <p className="text-gray-600 mb-6">
              Kindly create your new password.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  className="block text-sm font-semibold mb-4"
                  htmlFor="currentPassword"
                >
                  Current Password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter your current password"
                  required
                  className="w-full border border-[#949494] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#7B36E7]"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-semibold mb-4"
                  htmlFor="newPassword"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter your new password"
                  required
                  className="w-full border border-[#949494] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#7B36E7]"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-semibold mb-4"
                  htmlFor="confirmPassword"
                >
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your new password"
                  required
                  className="w-full border border-[#949494] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#7B36E7]"
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white px-8 py-3 mt-[3.75rem] rounded-lg font-semibold hover:bg-purple-700 transform transition-transform duration-300 hover:scale-100 disabled:opacity-50"
              >
                {isPending ? "Submitting..." : "Submit"}
              </button>
               <button
                type="submit"
                disabled={isPending}
                className="w-full bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white px-8 py-3 mt-[3.75rem] rounded-lg font-semibold hover:bg-purple-700 transform transition-transform duration-300 hover:scale-100 disabled:opacity-50"
              >
                {"Go back to Home Page"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
