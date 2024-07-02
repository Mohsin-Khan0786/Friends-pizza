import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Success from './pages/Success'
import Home from './pages/Home'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/success" 
          element={<ProtectedRoute element={<Success />} />} 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
