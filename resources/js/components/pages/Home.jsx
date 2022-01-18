import React, { useState, useMemo } from 'react';
import { Navbar, Container, Nav, Button, Row, ListGroup, Col } from 'react-bootstrap';
import Modals from './../UI/Modal/Modal'
import CatalogList from './../CatalogList'


const Home = () => {
    const [services, setServices] = useState([
        {
            id: 1,
            title: 'Услуги стилиста',
            appointment: 'Женские стрижки',
            type: 'Короткие волосы',
            prace: 1000
        },
        {
            id: 2,
            title: 'Услуги стилиста',
            appointment: 'Женские стрижки',
            type: 'Средние волосы',
            prace: 1200,
        },
        {
            id: 3,
            title: 'Услуги стилиста',
            appointment: 'Женские стрижки',
            type: 'Длинные волосы',
            prace: 1800,
        },
        {
            id: 4,
            title: 'Услуги стилиста',
            appointment: 'Окрашивание',
            type: 'Короткие волосы',
            prace: 2000,
        },
        {
            id: 5,
            title: 'Услуги стилиста',
            appointment: 'Окрашивание',
            type: 'Средние волосы',
            prace: 2200,
        },
        {
            id: 6,
            title: 'Услуги стилиста',
            appointment: 'Окрашивание',
            type: 'Длинные волосы',
            prace: 2800,
        },
        {
            id: 7,
            title: 'Услуги стилиста',
            appointment: 'Мужские стрижки',
            type: 'Короткие волосы',
            prace: 700,
        },
        {
            id: 8,
            title: 'Косметология',
            appointment: 'Чистка лица',
            prace: 5700,
        },
        {
            id: 9,
            title: 'Косметология',
            appointment: 'Массаж лица',
            prace: 3000,
        },
        {
            id: 10,
            title: 'Ногтевой сервис',
            appointment: 'Мужские маникюр',
            prace: 1700,
        },
        {
            id: 11,
            title: 'Ногтевой сервис',
            appointment: 'Женский маникюр',
            prace: 2200,
        },
        {
            id: 12,
            title: 'Ногтевой сервис',
            appointment: 'Женский педикюр',
            prace: 2700,
        },
        {
            id: 13,
            title: 'Брови и ресницы',
            appointment: 'Наращивание ресниц',
            type: 'Объем 1D',
            prace: 1000,
        },
        {
            id: 14,
            title: 'Брови и ресницы',
            appointment: 'Наращивание ресниц',
            type: 'Объем 3D',
            prace: 3000,
        },
    ]
    );
    const [filter, setFilter] = useState({ sort: '', query: '' });

    const removeService = (service) => {
        setServices();
    };



    function MyVerticallyCenteredModal(props) {
        return (
            <Modals {...props} />
        );
    }
    const [modalShow, setModalShow] = useState(false);
    return (<>
        <Container fluid as="header">
            <Row>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Beauty & Clients</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Главная</Nav.Link>
                            <Nav.Link href="#">Услуги и цены</Nav.Link>
                            <Nav.Link href="#catalog">Каталаг услуг</Nav.Link>
                            <Nav.Link href="#favorites">Избранное</Nav.Link>
                            <Nav.Link href="#record">Мои записи</Nav.Link>
                        </Nav>
                        <Button className="mx-2" variant="secondary" onClick={() => setModalShow(true)}>Вход</Button>
                    </Container>
                </Navbar>
            </Row>
        </Container>
        <Container fluid as="main">
            <CatalogList
                remove={removeService}
                services={services}
                title={'Онлайн запись в вашем городе'}
            />
        </Container>
        <Container fluid as="footer" className='d-flex justify-content-center my-4'>
            <span>Beauty & Clients </span>
            <span> &copy; 2022 </span>
        </Container>
        <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
    </>
    )
}
export default Home
