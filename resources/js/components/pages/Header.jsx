import React, {useState} from 'react';
import { Navbar, Container, Nav, Button, Row } from 'react-bootstrap';
import Modals from './../UI/Modal/Modal'

const Header = () => {
    function MyVerticallyCenteredModal(props) {
        return <Modals {...props} />;
    }
    const [modalShow, setModalShow] = useState(false);
    return (<>
        <Container fluid as='header'>
            <Row>
                <Navbar bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Brand href='#home'>
                            Beauty & Clients
                        </Navbar.Brand>
                        <Nav className='me-auto'>
                            <Nav.Link href='#home'>Главная</Nav.Link>
                            <Nav.Link href='#'>Услуги и цены</Nav.Link>
                            <Nav.Link href='#catalog'>
                                Каталаг услуг
                            </Nav.Link>
                            <Nav.Link href='#favorites'>Избранное</Nav.Link>
                            <Nav.Link href='#record'>Мои записи</Nav.Link>
                        </Nav>
                        <Button
                            className='mx-2'
                            variant='secondary'
                            onClick={() => setModalShow(true)}
                        >
                            Вход
                        </Button>
                    </Container>
                </Navbar>
            </Row>
        </Container>
        <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
    </>
    )
}
export default Header
