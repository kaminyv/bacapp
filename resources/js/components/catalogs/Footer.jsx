import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <Container
            fluid
            as="footer"
            className="d-flex justify-content-center my-4 bg-dark text-white"
        >
            <Link to="/" className="link-light text-decoration-none"
                variant='secondary'>Beauty & Clients &copy; 2022</Link>
        </Container>)
}
export default Footer
