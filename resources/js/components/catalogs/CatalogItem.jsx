import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
// import CatalogServece from './CatalogServece';

const CatalogItem = (props) => {
    //  console.log(props);

    return (
        <ListGroup.Item as="li">
            <Card bg='dark' text='white'>
                <Card.Img className='catalog__img'
                    variant='top'
                    src={`${props.catalog.cover}`} />
                <Card.Body >
                    <Card.Title>
                        <svg
                            className='mx-2'
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='currentColor'
                            viewBox='0 0 16 16'
                        >
                            <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z' />
                        </svg>
                        {props.catalog.master.name}
                    </Card.Title>
                    <Card.Text as='span'>
                        <svg
                            className='mx-2'
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='currentColor'
                            viewBox='0 0 16 16'
                        >
                            <path d='M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z' />
                        </svg>{' '}
                        +{props.catalog.master.phone}
                    </Card.Text>
                    <Card.Text>
                        <span className='mx-1'>Город:</span>
                        {props.catalog.city}
                    </Card.Text>
                    <Card.Text>
                        <span className='mx-1'>Адрес:</span>
                        {props.catalog.address}
                    </Card.Text>
                    <Card.Text>
                        <svg
                            className='mx-2'
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='currentColor'
                            viewBox='0 0 16 16'
                        >
                            <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                        </svg>
                        {props.catalog.rating}
                    </Card.Text>
                    <Button variant='secondary' className=' mx-2'>Смотреть предложение</Button>
                </Card.Body>
                {/* <CatalogServece service={props.catalog.service} key={catalog.id }/> */}
            </Card>
        </ListGroup.Item>
    );
};
export default CatalogItem;
