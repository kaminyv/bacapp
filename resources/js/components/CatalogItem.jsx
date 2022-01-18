import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const CatalogItem = (props) => {

    return (
        <ListGroup.Item as="li" className='card__item'>
            <h4>
                {props.service.title}
            </h4>
            <h5> {props.service.appointment}</h5>
            <h6> {props.service.type}</h6>
            <Button
                className="mx-2 button--catalog"
                variant="secondary"
            //    onClick={() => router.push(`/services/${props.service.category}`)}
            >
                Записаться
            </Button>
        </ListGroup.Item>
    )
}
export default CatalogItem
