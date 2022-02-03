import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const MasterServece = (props) => {
    // console.log(props)
    return (
        <ListGroup as='ul' className='servece__list'>
            {props.service.map(services =>
                <ListGroup.Item as='li' key={services.id} action variant="dark" className='d-grid'>
                    <span><strong>Услуга:</strong></span>
                    <span>{services.name}</span>
                    <span><strong>Стоимость:</strong></span>
                    <span className='d-flex align-items-center'>{services.price}
                        <svg className='mx-1'
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M2.04761 0.500854H6.03569C7.72543 0.500854 9.09524 1.87066 9.09524 3.5604C9.09524 5.25014 7.72543 6.61995 6.03569 6.61995H2.04761V0.500854Z'
                                stroke='#212529'
                            />
                            <path d='M2 6.50085H0' stroke='#212529' />
                            <path
                                d='M2.00006 0.000854492V13.0009M0.30957 9.69562H6.80958'
                                stroke='#212529'
                            />
                        </svg>
                    </span>
                    <span><strong>Время:</strong></span>
                    <span>{services.time}</span>
                    <Button variant='light'>Записаться</Button>
                </ListGroup.Item>
            )}
        </ListGroup>
    );
};
export default MasterServece;
