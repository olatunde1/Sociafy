import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import LoginPage from "./components/pages/Login";
import WalletPage from "./components/pages/WalletPage";
import Profile from "./components/pages/Profile";
import ResetPassword from "./components/pages/ResetPassword";
import Rules from "./components/pages/Rules";
import MyPurchased from "./components/pages/MyPurchased";
import ScrollToTop from "./components/ScrollToTop";
import UserDashboard from "./components/pages/UserDashboard";
import MyPurchaseComponent from "./components/MyPurchase/MyPurchaseComponent";
import Support from "./components/pages/Support";
import Account from "./components/pages/Account";
import PlatformViewMorePage from "./components/pages/PlatformViewMorePage";
import BuyAccountPage from "./components/pages/BuyAccountPage";
import LogPurchasedSuccessful from "./components/pages/LogPurchasedSuccessful";
import LogDetails from "./components/pages/LogDetails";
import FundWalletSuccessful from "./components/pages/FundWalletSuccessful";
import AdminDashboardProtectedRoute, {
  AdminProtectedRoute,
  SuperAdminProtectedRoute,
} from "./utils/ProtectedRoute";
import AdminLogin from "./components/dashboard/AdminLogin";
import AdminDashBoard from "./components/dashboard/AdminDashboard";
import AdminDashboardComponent from "./components/AdminAccountComponent/AdminDashboardComponent";
import AvailableLogsComponent from "./components/AdminAccountComponent/AvailableLogsComponent";
import LogDetailsPage from "./components/dashboard/LogDetailsPage";
import LogDetailsPageComponent from "./components/AdminAccountComponent/LogDetailsPageComponent";
import AddNewLogComponent from "./components/AdminAccountComponent/AddNewLogComponent";
import AllLogsViewComponent from "./components/AdminAccountComponent/AllLogsViewComponent";
import AdminOrdersComponent from "./components/AdminAccountComponent/adminOrdersComponent";
import UserManagementComponent from "./components/AdminAccountComponent/UserManagementComponent";
import AdminWalletManagementPage from "./components/dashboard/AdminWalletManagementPage";
import UserInfoPage from "./components/dashboard/UserInfoPage";
import UserAccountLayout from "./components/layout/UserAccountLayout";
import UserDashBoard from "./components/pages/UserDashboard";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here as needed */}
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/reset-password" element={<ResetPassword />} />

        {/* <Route path="/dashboard" element={<MyPurchaseComponent />} /> */}

        {/* Public route: Admin Login */}

        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/logs/:category" element={<LogDetailsPageComponent />} />
        <Route path="/logs/all" element={<AllLogsViewComponent />} />

        <Route path="/admin" element={<SuperAdminProtectedRoute />}>
          <Route index element={<AdminDashboardComponent />} />
          <Route path="dashboard" element={<AdminDashboardComponent />} />
          <Route path="logs" element={<AvailableLogsComponent />} />
          <Route path="logs/:category" element={<LogDetailsPageComponent />} />
          <Route path="add-logs" element={<AddNewLogComponent />} />
          <Route path="orders" element={<AdminOrdersComponent />} />
          <Route path="users-admin" element={<UserManagementComponent />} />
          <Route path="wallet" element={<AdminWalletManagementPage />} />
          <Route path="user-info" element={<UserInfoPage />} />
        </Route>

        {/* <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboardComponent />} />
        <Route path="/admin/logs" element={<AvailableLogsComponent />} />
        <Route path="/logs/:category" element={<LogDetailsPageComponent />} />
        <Route path="/admin/add-logs" element={<AddNewLogComponent />} />
        <Route path="/logs/all" element={<AllLogsViewComponent />} />


        <Route path="/admin" element={<SuperAdminProtectedRoute />}>
          <Route index path="dashboard" element={<AdminDashboardComponent />} />
          <Route path="logs" element={<AvailableLogsComponent />} />
          <Route path="logs/:category" element={<LogDetailsPageComponent />} />
          <Route path="add-logs" element={<AddNewLogComponent />} />
        </Route> */}

        <Route path="/" element={<AdminProtectedRoute />}>
          <Route path="" element={<UserAccountLayout />}>
            <Route index path="dashboard" element={<UserDashBoard />} />
            <Route path="accounts" element={<Account />} />
            <Route path="wallet" element={<WalletPage />} />
            <Route path="rules" element={<Rules />} />
            <Route path="my-purchased" element={<MyPurchased />} />
            <Route
              path="fund-wallet-successful"
              element={<FundWalletSuccessful />}
            />
            <Route path="profile" element={<Profile />} />
            <Route path="support" element={<Support />} />
            <Route
              path="accounts/platform/:platformName"
              element={<PlatformViewMorePage />}
            />
            <Route
              path="accounts/buy/:platformName/:productName"
              element={<BuyAccountPage />}
            />
            <Route
              path="log-purchased-successful"
              element={<LogPurchasedSuccessful />}
            />
            <Route path="log-details" element={<LogDetails />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
