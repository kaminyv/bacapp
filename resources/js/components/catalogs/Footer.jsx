import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container
            fluid
            as='footer'
            className='bg-dark text-white p-3 text-center'
        >
            <Link to='/'
                className='link-light text-decoration-none'
                variant='secondary'>
                Beauty & Clients &copy; 2022
            </Link>
        </Container>)
}
export default Footer
