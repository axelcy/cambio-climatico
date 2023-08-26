import { Link, Outlet } from "react-router-dom"
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Layout.css'

function Layout() {
    return (
        <>
            <Navbar expand="lg" className=" layout-container">
                <Container className="navbar-brand-container">
                    <Link className="brand" to={'/'}><img src="favicon.ico" className="icon" />Home</Link>
                    {/* <Nav className="me-auto navbar-links"></Nav> */}
                    <Link className="brand" to={`/reglas`}><img src="rules.png" className="icon" />Reglas</Link>
                </Container>
            </Navbar>


            <Outlet />
        </>
    )
}

export default Layout