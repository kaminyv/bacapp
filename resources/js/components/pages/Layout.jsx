import React from 'react';
import { Navbar, Container, Nav, Row } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <Container fluid as='header'>
            <Row>
                <Navbar bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Brand href='/'>
                            Beauty & Clients
                        </Navbar.Brand>
                        <Nav className='me-auto'>
                            {/* <Link to="/">Main</Link> */}
                            {/* <Link to="/login" className="nav-link">login</Link> */}
                            <Nav.Link href="/">Главная</Nav.Link>
                            <Nav.Link href='/user'>Мои записи</Nav.Link>
                            <Nav.Link href='/master'>Мой мастер</Nav.Link>
                        </Nav>

                        <Link to="/login" className="btn btn-secondary mx-2"
                            variant='secondary'>Вход</Link>
                    </Container>
                </Navbar>
            </Row>
            <Outlet />
        </Container>
    )
}
export default Layout
