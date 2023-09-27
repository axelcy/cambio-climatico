import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import { PasswordProvider } from './context/PasswordContext'
import Password from './pages/Password'
import Reglas from './pages/Reglas'
import Usuarios from './pages/Usuarios'
// Más adelante, tal vez implementar logros
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Password />} />
            <Route path='/reglas' element={<Reglas />} />
            <Route path='/usuarios' element={<Usuarios />} />
            <Route path='/*' element={<h1>Error 404</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
