import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Password from './pages/Password'
import Reglas from './pages/Reglas'
// Más adelante, tal vez implementar logros
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/cambio-climatico/' element={<Layout />} >
          <Route index element={<Password />} />
          <Route path='/cambio-climatico/reglas' element={<Reglas />} />
          <Route path='/cambio-climatico/*' element={<h1>Error 404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
