import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/pages/Home'
import SignUp from './components/pages/SignUp'
import LoginPage from './components/pages/Login'
import WalletPage from './components/pages/WalletPage'
import Profile from './components/pages/Profile'
import ResetPassword from './components/pages/ResetPassword'
import Rules from './components/pages/Rules'
import MyPurchased from './components/pages/MyPurchased'
import ScrollToTop from "./components/ScrollToTop";
import UserDashboard from './components/pages/UserDashboard'
import MyPurchaseComponent from './components/MyPurchase/MyPurchaseComponent'
import Support from './components/pages/Support'
import Account from './components/pages/Account'
import PlatformViewMorePage from './components/pages/PlatformViewMorePage'
import BuyAccountPage from './components/pages/BuyAccountPage'
import LogPurchasedSuccessful from './components/pages/LogPurchasedSuccessful'
import LogDetails from './components/pages/LogDetails'
import FundWalletSuccessful from './components/pages/FundWalletSuccessful'



function App() {

  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* Add more routes here as needed */}
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/wallet' element={<WalletPage />}/>
        <Route path="/fund-wallet-successful" element={<FundWalletSuccessful />} />
        <Route path='/profile' element={<Profile />}/>
        <Route path='/reset-password' element={<ResetPassword />}/>
        <Route path='/rules' element={<Rules />}/>
        <Route path='/my-purchased' element={<MyPurchased />}/>
        <Route path='/dashboard' element={<MyPurchaseComponent />}/>
        <Route path='/support' element={<Support />}/>
        <Route path='/accounts' element={<Account />}/>
        <Route path="/accounts/platform/:platformName" element={<PlatformViewMorePage />} />
        <Route path="/accounts/buy/:platformName/:productName" element={<BuyAccountPage />} />
        <Route path="/log-purchased-successful" element={<LogPurchasedSuccessful />} />
        <Route path="/log-details" element={<LogDetails />} />

        
        
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
