import { useNavigate, Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";

export const AdminProtectedRoute = () => {
  const { accessToken } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);
  if (!accessToken) {
    return null;
  }

  return <Outlet />;
};

export const SuperAdminProtectedRoute = () => {
  const { currentUser, accessToken } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    // if (!currentUser && currentUser.role !== "super-admin" && !accessToken) {
    if (!accessToken || !currentUser || currentUser.role !== "super-admin") {
      navigate("/");
    }
  }, [currentUser, accessToken, navigate]);
  if ((!currentUser && !accessToken)) {
    return null;
  }

  return <Outlet />;
};

const AdminDashboardProtectedRoute = () => {
  const isAuth = localStorage.getItem("admin-auth");

  return isAuth ? <Outlet /> : <Navigate to="/admin-dashboard" />;
};

export default AdminDashboardProtectedRoute;
