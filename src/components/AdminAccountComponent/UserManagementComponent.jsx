import React, { useState } from "react";
import AdminAccountLayout from "../AdminAccount/AdminAccountLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useMemo } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Navbar from "../Header/Navbar";
import { useNavigate } from "react-router-dom";
import { getAdminUsers } from "@/hooks/api/queries/super-admin/adminLogs/getAdminInfos";
import Loader from "../Loader";

// const users = [
//   {
//     name: "Francis Castiin",
//     email: "castiin@sociafy.com",
//     platform: "USA 🇺🇸 Standard IG",
//     signup: "Feb 24, 2025",
//     purchases: 26,
//     status: "Active",
//     info: "5-8yrs with posts | 1000 followers",
//   },
//   {
//     name: "Kathryn Murphy",
//     email: "tanya.hill@example.com",
//     platform: "USA 🇺🇸 Standard FB",
//     signup: "Feb 24, 2025",
//     purchases: 14,
//     status: "Active",
//     info: "8yrs | 100+ friends",
//   },
//   {
//     name: "Bessie Cooper",
//     email: "curtis.weaver@example.com",
//     platform: "USA 🇺🇸 Tiktok",
//     signup: "Feb 24, 2025",
//     purchases: 25,
//     status: "Active",
//     info: "1-2yrs | Partially Filled",
//   },
//   {
//     name: "Theresa Webb",
//     email: "willie.jennings@example.com",
//     platform: "USA 🇺🇸 Snapchat",
//     signup: "Feb 24, 2025",
//     purchases: 18,
//     status: "Suspended",
//     info: "2 - 5 months",
//   },
// ];

const UserManagementComponent = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");

  // const filteredUsers = users.filter(user => {
  //   if (filter === "All") return true;
  //   return user.status === filter;
  // });

  // const counts = {
  //   all: users.length,
  //   active: users.filter(user => user.status === "Active").length,
  //   suspended: users.filter(user => user.status === "Suspended").length,
  // };

  const getBadgeClass = (type) => {
    const base = "cursor-pointer transition-all";
    if (filter === "All" && type === "All") return `${base} bg-gray-800 text-white`;
    if (filter === "Active" && type === "Active") return `${base} bg-green-700 text-white`;
    if (filter === "Suspended" && type === "Suspended") return `${base} bg-red-600 text-white`;

    switch (type) {
      case "All": return `${base} bg-gray-100 text-gray-800`;
      case "Active": return `${base} bg-green-100 text-green-700`;
      case "Suspended": return `${base} bg-red-100 text-red-600`;
      default: return base;
    }
  };


  const { data: usersData, isPending } = getAdminUsers();
  const users = usersData?.data?.result || [];

  const filteredUsers = useMemo(() => {
    if (filter === "active") return users.filter((user) => !user.suspended);
    if (filter === "suspended") return users.filter((user) => user.suspended);
    return users;
  }, [filter, users]);

  return (
    <AdminAccountLayout>
      <Navbar />
      <div className="p-4 md:p-6 space-y-6">
        <h1 className="text-xl md:text-2xl font-bold">User Management</h1>

        {isPending ? (
          <Loader />
        ) : (
          <>
            <div className="flex flex-wrap gap-2">
              <Badge
                onClick={() => setFilter("all")}
                className={`cursor-pointer ${
                  filter === "all"
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                All Users ({users.length})
              </Badge>
              <Badge
                onClick={() => setFilter("active")}
                className={`cursor-pointer ${
                  filter === "active"
                    ? "bg-green-700 text-white"
                    : "bg-green-100 text-green-700"
                }`}
              >
                Active ({users.filter((u) => !u.suspended).length})
              </Badge>
              <Badge
                onClick={() => setFilter("suspended")}
                className={`cursor-pointer ${
                  filter === "suspended"
                    ? "bg-red-600 text-white"
                    : "bg-red-100 text-red-600"
                }`}
              >
                Suspended ({users.filter((u) => u.suspended).length})
              </Badge>
            </div>

            <Card>
              <CardContent className="p-0">
                {/* Mobile View */}
                <div className="sm:hidden space-y-2 p-2">
                  {filteredUsers.length === 0 ? (
                    <p className="text-gray-500 text-sm">No users available.</p>
                  ) : (
                    filteredUsers.map((user, index) => (
                      <Card key={index} className="p-3">
                        <div className="space-y-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold">{user.username}</h3>
                              <p className="text-xs text-gray-500">
                                {user.email}
                              </p>
                            </div>
                            <Badge
                              className={
                                user.suspended
                                  ? "bg-[#FF3D00] text-white"
                                  : "bg-[#12B64A] text-white"
                              }
                            >
                              {user.suspended ? "Suspended" : "Active"}
                            </Badge>
                          </div>

                          <div className="border-t pt-2">
                            <p className="text-sm text-gray-500">
                              Total Purchases: {user.totalPurchase || 0}
                            </p>
                          </div>

                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-xs text-gray-500">
                                Signup:{" "}
                                {new Date(user.createdAt).toLocaleDateString()}
                              </p>
                            </div>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button variant="outline" size="sm">
                                  Actions
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent
                                side="bottom"
                                align="end"
                                className="w-[150px] p-2 bg-white shadow-md rounded-md z-50"
                              >
                                <div className="flex flex-col gap-2 text-sm">
                                  <button
                                    onClick={() =>
                                      navigate("/admin/user-info", {
                                        state: { user },
                                      })
                                    }
                                    className="px-3 py-2 text-left hover:bg-gray-100 rounded"
                                  >
                                    Modify
                                  </button>
                                  <button
                                    onClick={() =>
                                      console.log("Suspend clicked")
                                    }
                                    className="px-3 py-2 text-left text-red-600 hover:bg-red-600 hover:text-white rounded"
                                  >
                                    Suspend
                                  </button>
                                </div>
                              </PopoverContent>
                            </Popover>
                          </div>
                        </div>
                      </Card>
                    ))
                  )}
                </div>

                {/* Desktop View */}
                <div className="hidden sm:block overflow-x-auto p-4">
                  <table className="min-w-full text-sm">
                    <thead className="bg-gray-100 text-left">
                      <tr>
                        <th className="p-3">User Name & Email</th>
                        <th className="p-3">Last Purchased</th>
                        <th className="p-3">Signup Date</th>
                        <th className="p-3">Total Purchases</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredUsers.length === 0 ? (
                        <tr>
                          <td
                            colSpan={6}
                            className="p-4 text-sm text-gray-500 text-center"
                          >
                            No users available.
                          </td>
                        </tr>
                      ) : (
                        filteredUsers.map((user, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="p-3">
                              <div className="font-semibold text-gray-900">
                                {user.username}
                              </div>
                              <div className="text-xs text-gray-500">
                                {user.email}
                              </div>
                            </td>
                            <td className="p-3">
                              {new Date(user.lastPurchase).toLocaleDateString()}
                            </td>
                            <td className="p-3">
                              {new Date(user.createdAt).toLocaleDateString()}
                            </td>
                            <td className="p-3">{user.totalPurchase || 0}</td>
                            <td className="p-3">
                              <Badge
                                className={
                                  user.suspended
                                    ? "bg-[#FF3D00] text-white"
                                    : "bg-[#12B64A] text-white"
                                }
                              >
                                {user.suspended ? "Suspended" : "Active"}
                              </Badge>
                            </td>
                            <td className="p-3">
                              <Popover>
                                <PopoverTrigger asChild>
                                  <button className="text-lg font-extrabold text-black hover:text-black">
                                    ...
                                  </button>
                                </PopoverTrigger>
                                <PopoverContent
                                  side="bottom"
                                  align="center"
                                  className="w-[150px] p-2 bg-white shadow-md rounded-md z-50"
                                >
                                  <div className="flex flex-col gap-2 text-sm">
                                    <button
                                      onClick={() =>
                                        navigate("/admin/user-info", {
                                          state: { user },
                                        })
                                      }
                                      className="px-3 py-2 text-left hover:bg-gray-100 rounded"
                                    >
                                      Modify
                                    </button>
                                    <button
                                      onClick={() =>
                                        console.log("Suspend clicked")
                                      }
                                      className="px-3 py-2 text-left text-red-600 hover:bg-red-600 hover:text-white rounded"
                                    >
                                      Suspend
                                    </button>
                                  </div>
                                </PopoverContent>
                              </Popover>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end gap-2">
              <Button variant="outline" size="sm">
                Previous
              </Button>
              <Button variant="default" size="sm">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </>
        )}
      </div>
    </AdminAccountLayout>
  );
};

export default UserManagementComponent;
