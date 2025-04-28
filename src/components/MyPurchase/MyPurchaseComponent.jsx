import UserDashBoard from '../pages/UserDashboard'
import AccountLayout from '../UserAccount/AccountLayout'
// import MyPurchased from '../pages/MyPurchased'

const MyPurchaseComponent = () => {
  return (
    <AccountLayout>
      <UserDashBoard />
    </AccountLayout>
  )
}

export default MyPurchaseComponent