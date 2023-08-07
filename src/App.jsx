import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Password from './pages/Password'
import Logros from './pages/Logros'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Password />} />
          <Route path='/test1234' element={<Logros />} />
          <Route path='*' element={<h1>Error 404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
