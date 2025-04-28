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
        <Route path='/profile' element={<Profile />}/>
        <Route path='/reset-password' element={<ResetPassword />}/>
        <Route path='/rules' element={<Rules />}/>
        <Route path='/my-purchased' element={<MyPurchased />}/>
        <Route path='/dashboard' element={<MyPurchaseComponent />}/>
        
        
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
