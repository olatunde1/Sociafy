import AccountSideBar from "./AccountSideBar";

const AccountLayout = ({children}) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100" >
        <div className="flex w-full">
            <AccountSideBar />
            <main>{children}</main>
        </div>
    </div>
  )
}

export default AccountLayout