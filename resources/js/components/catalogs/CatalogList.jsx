import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import CatalogItem from './CatalogItem';
const CatalogList = ({ catalogs, title }) => {
    if (!catalogs.length) {
        return <h2 className='d-flex justify-content-center my-5'> Услуги не найдены</h2>;
    }
    return (<Container fluid as="section" className='d-flex justify-content-center my-4 flex-column align-items-center'>
        <h1 className='my-4' >{title}</h1>
        <ListGroup as="ul" className='card__list'>
            {catalogs.map((catalog) => (
                <CatalogItem key={catalog.id} catalog={catalog} />
            ))}
        </ListGroup>
    </Container>)
}
export default CatalogList
