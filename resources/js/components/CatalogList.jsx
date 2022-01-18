import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import CatalogItem from './CatalogItem'
const CatalogList = ({ remove, services, title }) => {

    if (!services.length) {
        return <h2 className='d-flex justify-content-center my-5'> Услуги не найдены</h2>;
    }
    return (
        <Container fluid as="section" className='d-flex justify-content-center my-4 flex-column align-items-center'>
            <h1>{title}</h1>
            <ListGroup as="ul" className='card__list'>
                {services.map((service, index) => (
                    <CatalogItem key={service.id} remove={remove} number={index + 1} service={service} />
                ))}
            </ListGroup>
        </Container>)
}
export default CatalogList
