import React, { useState } from 'react';
import { Navbar, Container, Nav, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Modals from './../UI/Modal/Modal';
import Login from './../pages/Login'
const Header = () => {
    const [modal, setModal] = useState(false);
    return (
        <Container fluid as='header'>
            <Row>
                <Navbar bg='dark' variant='dark'>
                    <Container>
                        <Link className='navbar-brand' to='/'>Beauty & Clients</Link>
                        <Nav className='me-auto'>
                            <Link to='/' className='nav-link'>Главная</Link>
                            <Link to='/master' className='nav-link'>Мой мастер</Link>
                            <Link to='/user' className='nav-link'>Мои записи</Link>
                        </Nav>
                        <Modals modal={modal} setModal={setModal}>
                            <Login modal={modal} setModal={setModal} />
                        </Modals>
                    </Container>
                </Navbar>
            </Row>
        </Container>
    )
}
export default Header
