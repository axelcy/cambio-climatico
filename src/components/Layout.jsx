import { Link, Outlet } from "react-router-dom"
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Layout.css'

function Layout() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary layout-container">
                <Container>
                    <Link className="brand" to={'/'}>Password</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto navbar-links">
                            <Link to={'/test1234'}>Test1234</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <Outlet />
        </>
    )
}

export default Layout