import { useNavigate,Navigate, Outlet } from "react-router-dom";
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



const AdminDashboardProtectedRoute = () => {
  const isAuth = localStorage.getItem("admin-auth");

  return isAuth ? <Outlet /> : <Navigate to="/admin-dashboard" />;
};

export default AdminDashboardProtectedRoute;