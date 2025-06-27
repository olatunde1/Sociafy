import AdminAccountSidebar from "./AdminAccountSidebar";

const AdminAccountLayout = ({ children }) => {
  return (
    <div className="flex">
      <AdminAccountSidebar />
      <main className="flex-1 p-6"> 
        {children}
      </main>
    </div>
  );
};

export default AdminAccountLayout;
