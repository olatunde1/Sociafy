import AdminAccountLayout from "../AdminAccount/AdminAccountLayout";
import RecentPurchaseTable from "../dashboard/RecentPurchaseTable";
import { RecentPurchases } from "../dashboard/data";
import Navbar from "../Header/Navbar";

const adminOrdersComponent = () => {
 return (
    <AdminAccountLayout>
      <Navbar />
      <RecentPurchaseTable data={RecentPurchases} />
    </AdminAccountLayout>
  );
};

export default adminOrdersComponent;



