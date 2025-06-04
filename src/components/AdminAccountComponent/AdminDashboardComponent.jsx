import AdminDashBoard from "../dashboard/AdminDashboard";
import AdminAccountLayout from "../AdminAccount/AdminAccountLayout";

const AdminDashboardComponent = () => {
  return (
    <AdminAccountLayout>
      <AdminDashBoard />
    </AdminAccountLayout>
  );
};

export default AdminDashboardComponent;
