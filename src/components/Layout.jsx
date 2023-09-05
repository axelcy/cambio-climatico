import { Link, Outlet } from "react-router-dom"
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Layout.css'

function Layout() {
    return (
        <>
            <Navbar expand="lg" className=" layout-container">
                <Container className="navbar-brand-container">
                    <Link className="brand no-select" to={'/'} ><img draggable={false} src="favicon.ico" className="icon no-select" /> Home</Link>
                    <Link className="brand no-select" to={`/reglas`}><img draggable={false} src="rules.png" className="icon no-select" /> Reglas</Link>
                    <Link className="brand no-select" to={`/usuarios`}><img draggable={false} src="usuarios.png" className="icon no-select" /> Usuarios</Link>
                </Container>
            </Navbar>


            <Outlet />
        </>
    )
}

export default Layout