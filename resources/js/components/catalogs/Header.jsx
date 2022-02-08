import React, { useContext } from 'react';
import { Navbar, Container, Nav, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from './../context/index'
import BacappApi from '../../api/BacappApi';
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    const { isAuth, setIsAuth } = useContext(AuthContext)
    const signOn = (e) => {
        e.preventDefault()
        let token = localStorage.getItem('token');
        // console.log(token);
        BacappApi.postLogout(token)
        localStorage.removeItem('token')
        setIsAuth(false)
        navigate(`/`)
    }
    return (
        <Container fluid as='header'>
            <Row>
                <Navbar bg='dark' variant='dark'>
                    <Container>
                        <Link className='navbar-brand' to='/'>Beauty & Clients</Link>
                        <Nav className='me-auto'>
                            {/* <Link to='/' className='nav-link'>Главная</Link> */}
                            <Link to='/catalog' className='nav-link'>Каталог</Link>
                            {/* <Link to='/master' className='nav-link'>Мастер</Link> */}
                            <Link to='/user' className='nav-link'>Записи</Link>
                        </Nav>
                        <Link
                            to='/login'
                            className='mx-2 btn btn-secondary'
                            variant='secondary'>
                            Вход / Регистрация</Link>
                        <Button
                            onClick={signOn}
                            className='mx-2 '
                            variant='secondary'>
                            Выйти
                        </Button>
                    </Container>
                </Navbar>
            </Row>
        </Container >
    )
}
export default Header
