import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/pages/Home'
import SignUp from './components/pages/SignUp'
import LoginPage from './components/pages/Login'
import WalletPage from './components/pages/WalletPage'
import Profile from './components/pages/Profile'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* Add more routes here as needed */}
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/wallet' element={<WalletPage />}/>
        <Route path='/profile' element={<Profile />}/>
        
        
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
