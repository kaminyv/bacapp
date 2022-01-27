import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container
            fluid
            as="footer"
            className="d-flex justify-content-center my-4 bg-dark text-white"
        >
            <span>Beauty & Clients </span>
            <span> &copy; 2022 </span>
        </Container>)
}
export default Footer
