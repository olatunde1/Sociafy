import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/pages/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* Add more routes here as needed */}
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
