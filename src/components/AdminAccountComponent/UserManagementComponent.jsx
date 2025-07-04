import AdminAccountLayout from "../AdminAccount/AdminAccountLayout";
import { RecentWalletFunding } from "../dashboard/data";
import RecentWalletFundingTable from "../dashboard/RecentWalletFundingTable";
import Navbar from "../Header/Navbar";

const UserManagementComponent = () => {
 return (
    <AdminAccountLayout>
      <Navbar />
      <RecentWalletFundingTable data={RecentWalletFunding} />
    </AdminAccountLayout>
  );
};


export default UserManagementComponent




